import { useContext, useEffect } from "react";
import { Col, Row, Button, Stack } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { SocketContext } from "../../context/SocketContext";
import { joinRoom } from "../../actions/guestAction";

import ButtonPrimary from "../Button/ButtonPrimary";

export default function VideoBox({ guest, isLogin, videoShow }) {
  const { callAccepted, callEnded, callUser, me } = useContext(SocketContext);

  const dispatch = useDispatch();
  const room = useSelector((state) => state.guest.room);

  const ranButtonHandler = () => {
    dispatch(joinRoom(me));
  };

  useEffect(() => {
    if (room.guestCaller) {
      callUser(room.guestCaller);
    }
  }, [room]);

  // useEffect(() => {
  //   if (call.isReceivedCall) {
  //     answerCall();
  //     console.log(call, "<<<<<<<");
  //     console.log(myVideo, "<<<<ini videoku");
  //     console.log(userVideo, "<<<<< ini video temanku");
  //     console.log(me, "<<<< idku");
  //     console.log(room, "<<< ini id roomnya");
  //   }
  // }, [call]);

  // li nanti tolong di style /////////////
  function Notifications() {
    const { answerCall, call, callAccepted } = useContext(SocketContext);

    return (
      <>
        {call.isReceivedCall && !callAccepted && (
          <div>
            <button onClick={answerCall}>Accept</button>
          </div>
        )}
      </>
    );
  }

  // function Options({ children }) {
  //   const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
  //     useContext(SocketContext);
  //   const [idToCall, setIdToCall] = useState("");

  //   return (
  //     <div
  //       style={{ display: "flex", flexDirection: "row", marginTop: "120px" }}
  //     >
  //       <form
  //         noValidate
  //         autoComplete="off"
  //         onSubmit={(e) => e.preventDefault()}
  //       >
  //         <div>
  //           <h6>Account Info</h6>
  //           <label>Name</label>
  //           <input
  //             type="text"
  //             value={name}
  //             onChange={(e) => setName(e.target.value)}
  //           />
  //           <p>copy the following text! {me}</p>
  //         </div>
  //         <div>
  //           <h6>Account Info</h6>
  //           <label>Id to call</label>
  //           <input
  //             type="text"
  //             value={idToCall}
  //             onChange={(e) => setIdToCall(e.target.value)}
  //           />
  //           {callAccepted && !callEnded ? (
  //             <button onClick={leaveCall}>Hang up</button>
  //           ) : (
  //             <button onClick={() => callUser(idToCall)}>Call</button>
  //           )}
  //         </div>
  //       </form>
  //       {children}
  //     </div>
  //   );
  // }

  const showButtonReq = (isLogin) => {
    if (isLogin) {
      return (
        <ButtonPrimary
          text="Request"
          action="/"
          placement="video-action btn-request"
        />
      );
    }
  };

  if (guest && callAccepted && !callEnded) {
    return (
      <Col className="d-flex justify-content-center">
        <div className="video-prev d-flex align-items-end justify-content-center">
          <video
            playsInline
            ref={videoShow}
            autoPlay
            width="100%"
            height="100%"
            id="video-user"
          />

          <Col className="d-flex justify-content-center mb-4" id="action">
            <Stack direction="horizontal" gap={3}>
              <ButtonPrimary
                text="Run"
                action={ranButtonHandler}
                placement="video-action btn-ran"
              />

              <ButtonPrimary
                text="Stop"
                action="/"
                placement="video-action btn-stop"
              />
              {showButtonReq(isLogin)}
            </Stack>
          </Col>
        </div>
      </Col>
    );
  } else if (!guest) {
    return (
      <Col className="d-flex justify-content-center">
        <div className="video-prev d-flex align-items-end justify-content-center">
          <video
            playsInline
            ref={videoShow}
            autoPlay
            width="100%"
            height="100%"
          />
          {/* {callAccepted && !callEnded && (
            <div
              style={{
                padding: "10px",
                border: "2px solid black",
                margin: "10px",
              }}
            >
              <video playsInline ref={userVideo} autoPlay />
            </div>
          )} */}
        </div>
      </Col>
    );
  } else {
    return (
      <Col className="d-flex justify-content-center">
        <Notifications />
        <div className="video-prev-searcing d-flex align-items-end justify-content-center">
          <Col className="action mb-4">
            <Stack direction="horizontal" gap={3}>
              <ButtonPrimary
                text="Run"
                action={ranButtonHandler}
                placement="video-action btn-ran"
              />
              <ButtonPrimary
                text="Stop"
                action="/"
                placement="video-action btn-stop"
              />
              {showButtonReq(isLogin)}
            </Stack>
          </Col>
          <video
            src={"/static-noise.mp4"}
            controls
            muted
            autoPlay={"autoplay"}
            preLoad="auto"
            loop
            width="100%"
            height="100%"
            id="video-static"
          ></video>
        </div>
      </Col>
    );
  }
}
