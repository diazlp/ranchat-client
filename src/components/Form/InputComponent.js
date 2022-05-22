import { Col, Form, Row } from "react-bootstrap";
import ButtonPrimary from "../Button/ButtonPrimary";
import Icon from "../Icon/Icon";

export default function InputComponent({
  type,
  placeholder,
  placement,
  inputHandler,
  value,
  name,
  inputMessage,
  sendMesssage,
}) {
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
            onChange={(e) => {
              const value = e.target.value;
              inputMessage(value);
            }}
          />
          <div
            onClick={() => {
              sendMesssage();
            }}
          >
            <Icon name="paper-plane" placement="send-message clickable" />
          </div>
        </Col>
      </Row>
    );
  } else {
    return (
      <Form.Control
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          const value = e.target.value;
          inputHandler(value, name);
        }}
        className="mb-3"
      />
    );
  }
}
