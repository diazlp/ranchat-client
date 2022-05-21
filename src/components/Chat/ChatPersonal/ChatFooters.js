import { Col, Container, Form, Row, Stack } from "react-bootstrap";

export default function ChatFooter(params) {
  return (
    <Container fluid>
      <Row className="sticky-bottom">
        <Col>
          <Form.Control type="email" placeholder="name@example.com" />
        </Col>
        <Col className="col-2 d-flex justify-content-center">
          <Stack direction="horizontal" gap={4}>
            <i class="fa-solid fa-note-sticky fs-5"></i>
            <i class="fa-solid fa-map-location-dot fs-5"></i>
            <i class="fa-solid fa-image fs-5"></i>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}
