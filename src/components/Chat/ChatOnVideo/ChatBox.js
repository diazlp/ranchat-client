import { Container, Row, Stack } from "react-bootstrap";

import { useEffect } from "react";
import { useSelector } from "react-redux";

import InputComponent from "../../Form/InputComponent";
import ChatBubble1 from "./ChatBubble1";

export default function ChatBox1({ data }) {
  const messageHistory = useSelector((state) => state.guest.messageHistory);

  useEffect(() => {}, [messageHistory]);

  return (
    <Container fluid className="chat-box">
      <Row className="chat-box-area">
        <Stack className="mt-auto mx-2 p-2">
          <ChatBubble1
            who="you"
            message="halooo sayang"
            time="23.59"
            username="Kevin Tandiono"
          />
          <ChatBubble1
            who="guest"
            message="Hai juga"
            time="00.00"
            username="Kevin Tandiono"
          />
          <ChatBubble1
            who="you"
            message="halooo sayang"
            time="23.59"
            username="Kevin Tandiono"
          />
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
