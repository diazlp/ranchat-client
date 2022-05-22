import { Col, Row, Stack } from "react-bootstrap";

export default function ChatBubble2({ from, message, time }) {
  if (from === "you") {
    return (
      <Row className="mt-auto w-50 ms-auto">
        <Col className="d-flex justify-content-end mb-2">
          <Stack direction="horizontal">
            <Stack className="me-3" gap={2}>
              <div className="cb1 chat-you px-3 py-2 d-flex align-items-center">
                <p className="m-0 p-1 chat-message">{message}</p>
              </div>
              <p className="align-self-end chat-time">{time}</p>
            </Stack>
            <img
              src="https://dummyimage.com/500x500/e6e6e6/080808&text=A"
              alt="pp"
              width="44"
              height="44"
              className="avatar-cb2 align-self-start"
            />
          </Stack>
        </Col>
      </Row>
    );
  } else if (from === "guest") {
    return (
      <Row className="mt-auto w-50 me-auto">
        <Col className="d-flex justify-content-start mb-2">
          <Stack direction="horizontal">
            <img
              src="https://dummyimage.com/500x500/e6e6e6/080808&text=A"
              alt="pp"
              width="44"
              height="44"
              className="avatar-cb2 align-self-start"
            />
            <Stack className="ms-3" gap={2}>
              <div className="cb1 chat-guest px-3 py-1 d-flex align-items-center">
                <p className="m-0 p-1 chat-message">{message}</p>
              </div>
              <p className="align-self-start chat-time">{time}</p>
            </Stack>
          </Stack>
        </Col>
      </Row>
    );
  }
}
