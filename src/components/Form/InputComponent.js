import { Col, Form, Row } from "react-bootstrap";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../../actions/guestAction";

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
  const [message, setMessage] = useState("");

  const room = useSelector((state) => state.guest.room);
  const guest = useSelector((state) => state.guest.guest);

  const dispatch = useDispatch();
  const sendMessageToState = () => {
    if (guest.socketId === room.guestCaller) {
      const payload = {
        sender: room.guestCaller,
        receiver: room.guestCalled,
        message: message,
        room: room._id,
        time: Date.now(),
      };
      dispatch(sendMessage(payload));
    } else if (guest.socketId === room.guestCalled) {
      const payload = {
        sender: room.guestCalled,
        receiver: room.guestCaller,
        message: message,
        room: room._id,
        time: Date.now(),
      };
      dispatch(sendMessage(payload));
    }
  };
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
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="input-chat py-2"
          />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              sendMessageToState();
            }}
          >
            send
          </button>
          <Icon name="paper-plane" placement="send-message clickable" />
        </Col>
      </Row>
    );
  } else if (placement === "friend-chat") {
    return (
      <Row>
        <Col className="d-flex align-items-center">
          <Form.Control
            type={type}
            placeholder="Type your message"
            className="input-chat py-2"
            value={value}
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
