import { Col, Row } from "react-bootstrap";

export default function ChatBubble2({ name, message, image }) {
  return (
    <Row className="m-0 mb-2 cb2">
      <Col className="my-2 col-2 d-flex justify-content-center">
        <img
          src="https://dummyimage.com/500x500/e6e6e6/080808&text=A"
          alt="pp"
          width="47"
          height="47"
          className="avatar-cb2"
        />
      </Col>
      <Col className="text-truncate">
        <Row>
          <p className="username-cb2 m-0 mb-1">{name}</p>
          <div className="message-cb2">{message}</div>
        </Row>
      </Col>
    </Row>
  );
}
