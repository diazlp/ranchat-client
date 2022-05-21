import {
  Button,
  Col,
  Container,
  Form,
  OverlayTrigger,
  Popover,
  Row,
  Stack,
  Tooltip,
} from "react-bootstrap";
import IconAuthen from "../../Icon/IconAuthen";

export default function ChatFooter() {
  return (
    <Container fluid>
      <Row className="sticky-bottom">
        <Col>
          <Form.Control type="email" placeholder="name@example.com" />
        </Col>
        <Col className="col-2 d-flex justify-content-center">
          <Stack direction="horizontal" gap={4}>
            <i class="fa-solid fa-note-sticky fs-5"></i>
            <IconAuthen icon="image" auth={false} />
            <IconAuthen icon="street-view" auth={false} />
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}
