import { Container, Row, Stack } from "react-bootstrap";
import ChatBubble from "./ChatBubble1";

export default function ChatBox1() {
  return (
    <Container fluid className="chat-box">
      <Row className="chat-box-area">
        <Stack className="mt-auto">
          {/* <ChatBubble who="you" />
          <ChatBubble who="guest" /> */}
          <ChatBubble who="you" />
        </Stack>
      </Row>
      <Row>
        <input />
      </Row>
    </Container>
  );
}
