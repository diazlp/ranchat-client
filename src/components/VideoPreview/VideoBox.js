import { Col, Row, Button, Stack } from "react-bootstrap";
import ButtonPrimary from "../Button/ButtonPrimary";
import { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SocketContext } from "../../context/SocketContext";
import { joinRoom } from "../../actions/guestAction";
export default function VideoBox({ guest }) {
  const {
    me,
    name,
    callAccepted,
    myVideo,
    userVideo,
    answerCall,
    callEnded,
    callUser,
    stream,
    call,
  } = useContext(SocketContext);
  const dispatch = useDispatch();
  const room = useSelector((state) => state.guest.room);
  const ran = () => {
    dispatch(joinRoom(me));
  };

  useEffect(() => {
    if (room.guestCaller) {
      callUser(room.guestCaller);
    }
    if (call.isReceivedCall) {
      answerCall();
      console.log(userVideo, "<<<<< dari useEffect");
    }
  }, [room, call]);

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
      <div
        style={{ display: "flex", flexDirection: "row", marginTop: "120px" }}
      >
        <form
          noValidate
          autoComplete="off"
          onSubmit={(e) => e.preventDefault()}
        >
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
  if (guest) {
    return (
      <Col className="d-flex justify-content-center">
        {/* <Options>
          <Notifications />
        </Options> */}
        <div className="video-prev d-flex align-items-end">
          {stream && (
            <div
              style={{
                justifyContent: "center",
              }}
            >
              <div style={{ width: "870px", height: "500px" }}>
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

          <Col className="d-flex justify-content-center mb-4">
            <Stack direction="horizontal" gap={3}>
              <Button className="video-button-ran" onClick={() => ran()}>
                Run
              </Button>
              <Button className="video-button-stop">Stop</Button>
              <Button className="video-button-request">Request</Button>
            </Stack>
          </Col>
        </div>
      </Col>
    );
  } else {
    return (
      <Col className="d-flex justify-content-center">
        <div className="video-prev" />
      </Col>
    );
  }
}
