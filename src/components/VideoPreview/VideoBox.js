import { Col, Row, Button, Stack } from "react-bootstrap";

import ButtonPrimary from "../Button/ButtonPrimary";

export default function VideoBox({ guest, isLogin, found }) {
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

  if (guest && found) {
    return (
      <Col className="d-flex justify-content-center">
        <div className="video-prev d-flex align-items-end">
          <Col className="d-flex justify-content-center mb-4">
            <Stack direction="horizontal" gap={3}>
              <ButtonPrimary
                text="Run"
                action="/"
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
  } else if (guest && !found) {
    return (
      <Col className="d-flex justify-content-center">
        <div className="video-prev-searcing d-flex align-items-end justify-content-center">
          <Col className="action mb-4">
            <Stack direction="horizontal" gap={3}>
              <ButtonPrimary
                text="Run"
                action="/"
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
  } else {
    return (
      <Col className="d-flex justify-content-center">
        <div className="video-prev" />
      </Col>
    );
  }
}
