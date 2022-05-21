import { Col, Form, Row } from "react-bootstrap";
import ButtonPrimary from "../Button/ButtonPrimary";
import Icon from "../Icon/Icon";

export default function InputComponent({ type, placeholder, placement }) {
  if (placement === "search") {
    return (
      <Form.Control
        type={type}
        placeholder="Search Here!"
        className="input-search mb-3"
      />
    );
  } else if (placement === "chat") {
    return (
      <Row>
        <Col className="d-flex align-items-center">
          <Form.Control
            type={type}
            placeholder="Type your message"
            className="input-chat py-2"
          />
          <Icon name="paper-plane" placement="send-message clickable" />
        </Col>
      </Row>
    );
  } else {
    <Form.Control type={type} placeholder={placeholder} />;
  }
}
