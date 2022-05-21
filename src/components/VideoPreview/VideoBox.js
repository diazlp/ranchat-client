import { Col, Row, Button, Stack } from "react-bootstrap";
import ButtonPrimary from "../Button/ButtonPrimary";

export default function VideoBox({ guest }) {
  if (guest) {
    return (
      <Col className="d-flex justify-content-center">
        <div className="video-prev d-flex align-items-end">
          <Col className="d-flex justify-content-center mb-4">
            <Stack direction="horizontal" gap={3}>
              <Button className="video-button-ran">Run</Button>
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
