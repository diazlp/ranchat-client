import { Col, Row } from "react-bootstrap";

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
        <ChatBubble2
          from="guest"
          message="Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing"
          time="16.37"
        />
        <ChatBubble2
          from="guest"
          message="Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing"
          time="16.37"
        />
        <ChatBubble2
          from="you"
          message="Lorem Ipsum is simply dummy text of the printing"
          time="18.37"
        />
      </Col>
    </Row>
  );
}
