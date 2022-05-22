import { Col, Row } from "react-bootstrap";
import ChatList from "./ChatList";
import ChatBubble2 from "./ChatBubble2";
import { useSelector } from "react-redux";
import { format } from "timeago.js";

export default function ChatArea({ data }) {
  const { chatHistory } = useSelector((state) => state.chat);
  return (
    <Row className="chat-area d-flex align-items-end p-4">
      <Col>
        {chatHistory.length > 0 &&
          chatHistory.map((chat) => (
            <ChatBubble2
              from={chat.fromSelf}
              message={chat.message}
              time={format(chat.time)}
            />
          ))}
      </Col>
    </Row>
  );
}
