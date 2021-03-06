import { Col, Form, Row, Stack } from "react-bootstrap";

import { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SocketContext } from "../../context/SocketContext";
// import { sendMessage } from "../../actions/guestAction";
// import { socketSendMessage } from "../../context/SocketContext";

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
  const { socketSendMessage } = useContext(SocketContext);

  const room = useSelector((state) => state.guest.room);
  const guest = useSelector((state) => state.guest.guest);

  const dispatch = useDispatch();
  const sendMessageToState = () => {
    let payload = {
      sender: "",
      receiver: "",
      message: message,
      room: room._id,
      time: Date.now(),
    };
    if (guest.socketId === room.guestCaller) {
      payload.sender = room.guestCaller;
      payload.receiver = room.guestCalled;
    } else if (guest.socketId === room.guestCalled) {
      payload.sender = room.guestCalled;
      payload.receiver = room.guestCaller;
    }
    socketSendMessage(payload);
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
        <Col>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessageToState();
              e.target.reset();
            }}
          >
            <Stack direction="horizontal">
              <Form.Control
                type={type}
                placeholder="Type your message"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                className="input-chat py-2"
              />
              <button type="submit" className="btn-send-message-playground">
                <Icon name="paper-plane" placement="send-message clickable" />
              </button>
            </Stack>
          </Form>
        </Col>
      </Row>
    );
  } else if (placement === "friend-chat") {
    return (
      <Row>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            sendMesssage();
          }}
        >
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

            <button type="submit" className="btn-send-message-playground">
              <Icon name="paper-plane" placement="send-message clickable" />
            </button>

            {/* <div
            onClick={() => {
              sendMesssage();
            }}
          >
            <Icon name="paper-plane" placement="send-message clickable" />
          </div> */}
          </Col>
        </Form>
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
