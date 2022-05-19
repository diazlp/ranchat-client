import "./App.css";
import { Routes, Route } from "react-router-dom";
import DummyHomepage from "./views/DummyHomepage";

import { SocketContext } from "./context/SocketContext";
import { useContext, useState } from "react";

function Notifications() {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivedCall && !callAccepted && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>{call.name} is calling:</h1>
          <button onClick={answerCall}>Accept</button>
        </div>
      )}
    </>
  );
}

function Options({ children }) {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  return (
    <div style={{ display: "flex", flexDirection: "row", marginTop: "120px" }}>
      <form noValidate autoComplete="off" onSubmit={(e) => e.preventDefault()}>
        <div>
          <h6>Account Info</h6>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p>copy the following text! {me}</p>
        </div>
        <div>
          <h6>Account Info</h6>
          <label>Id to call</label>
          <input
            type="text"
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
          />
          {callAccepted && !callEnded ? (
            <button onClick={leaveCall}>Hang up</button>
          ) : (
            <button onClick={() => callUser(idToCall)}>Call</button>
          )}
        </div>
      </form>
      {children}
    </div>
  );
}

function VideoPlayer() {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {stream && (
          <div
            style={{
              padding: "10px",
              border: "2px solid black",
              margin: "10px",
            }}
          >
            <h2>{name || "Name"}</h2>
            <div style={{ width: "550px", height: "300px" }}>
              <video playsInline muted ref={myVideo} autoPlay />
            </div>
          </div>
        )}
        {callAccepted && !callEnded && (
          <div
            style={{
              padding: "10px",
              border: "2px solid black",
              margin: "10px",
            }}
          >
            <h2>{call.name || "Name"}</h2>

            <video playsInline ref={userVideo} autoPlay />
          </div>
        )}
      </div>

      <Options>
        <Notifications />
      </Options>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<DummyHomepage />} /> */}
        <Route path="/" element={<VideoPlayer />} />
      </Routes>
    </div>
  );
}

export default App;
