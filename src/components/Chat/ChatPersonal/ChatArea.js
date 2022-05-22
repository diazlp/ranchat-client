import { Col, Row } from "react-bootstrap";
import ChatList from "./ChatList";
import ChatBubble2 from "./ChatBubble2";

export default function ChatArea({ data }) {
  return (
    <Row className="chat-area d-flex align-items-end p-4">
      <Col>
        <ChatBubble2
          from="you"
          message="Lorem Ipsum is simply dummy text of the printing"
          time="15.37"
        />
      </Col>
    </Row>
  );
}
