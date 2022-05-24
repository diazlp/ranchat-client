import { Container, Row, Stack } from "react-bootstrap";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import InputComponent from "../../Form/InputComponent";
import ChatBubble1 from "./ChatBubble1";

export default function ChatBox1({ data }) {
  const messageHistory = useSelector((state) => state.guest.messageHistory);
  const guest = useSelector((state) => state.guest.guest);
  useEffect(() => {}, [messageHistory]);

  return (
    <Container fluid className="chat-box">
      <Row className="chat-box-area">
        <Stack className="mt-auto mx-2 p-2">
          {messageHistory.map((el, i) => {
            return (
              <ChatBubble1
                key={i}
                who={el.sender === guest.socketId ? "you" : "guest"}
                message={el.message}
                time={el.time}
                username={`guest${el.sender}`}
              />
            );
          })}
        </Stack>
      </Row>
      <Row>
        <InputComponent
          type="text"
          placeholder="Enter your message"
          placement="chat"
        />
      </Row>
    </Container>
  );
}
