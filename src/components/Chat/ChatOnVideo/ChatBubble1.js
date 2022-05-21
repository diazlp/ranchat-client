import { Badge, Col, Row, Stack } from "react-bootstrap";

export default function ChatBubble({ who }) {
  return (
    <Col className="my-2">
      <p className={`username-chat-bubble ${who}`}>Aliansyah Firdaus</p>
      <p className="message-chat-bubble">Haloo</p>
      <p className="time-chat-bubble">20.30</p>
    </Col>
  );
}
