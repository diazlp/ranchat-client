import { useContext, useEffect } from "react";
import { Col, Row, Button, Stack } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { SocketContext } from "../../context/SocketContext";
import { joinRoom } from "../../actions/guestAction";

import ButtonPrimary from "../Button/ButtonPrimary";

export default function VideoBox({ guest, isLogin, videoShow }) {
  const {
    callAccepted,
    callEnded,
    leaveCall,
    callUser,
    sendFriendRequest,
    me,
  } = useContext(SocketContext);

  const dispatch = useDispatch();
  const room = useSelector((state) => state.guest.room);
  let disabled = false;

  const ranButtonHandler = () => {
    dispatch(joinRoom(me));
  };

  useEffect(() => {
    if (room.guestCaller) {
      callUser(room.guestCaller);
    }
  }, [room]);

  function Notifications() {
    const { answerCall, call, callAccepted } = useContext(SocketContext);

    return (
      <>
        {call.isReceivedCall && !callAccepted && (
          <Row id="notification" className="bg-light p-3">
            <Stack direction="horizontal" gap={3}>
              Jodoh mu sudah datang!
              <Button onClick={answerCall} size="sm">
                Let's Go!
              </Button>
            </Stack>
          </Row>
        )}
      </>
    );
  }

  const showButtonReq = (isLogin) => {
    if (isLogin) {
      return (
        <ButtonPrimary
          text="Request"
          sendFriendRequest={sendFriendRequest}
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
                disabled={disabled}
              />

              <ButtonPrimary
                text="Stop"
                action={leaveCall}
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
            preload="auto"
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
