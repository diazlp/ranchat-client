import { Col, Container, Form, Row, Stack } from "react-bootstrap";
import InputComponent from "../../Form/InputComponent";
import Icon from "../../Icon/Icon";
import IconAuthen from "../../Icon/IconAuthen";
import { useSelector, useDispatch } from "react-redux";
import { useState, useContext, useEffect } from "react";
import { sendMessage } from "../../../actions/chatAction";
import { SocketContext } from "../../../context/SocketContext";

export default function ChatFooter({ level }) {
  const authLvl = (lvl) => (lvl > 4 ? true : false);
  const { socket } = useContext(SocketContext);
  const [arrivalMessage, setArrivalMessage] = useState(null);

  const [message, setMessage] = useState("");
  const { friendRoom, chatList } = useSelector((state) => state.chat);
  const { profile } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const sendMesssage = () => {
    if (message && friendRoom) {
      const chatListById = chatList.filter((list) => list._id === friendRoom);
      const receiverId = chatListById[0].members.find(
        (member) => member !== profile.UserId
      );
      socket.emit("sendMessage", {
        friendRoom,
        senderId: profile.UserId,
        receiverId,
        text: message,
      });
      dispatch(sendMessage({ message, friendRoom, id: profile.UserId }));
      setMessage("");
    }
  };
  const inputMessage = (value) => {
    setMessage(value);
  };
  return (
    <Container fluid>
      <Row className="sticky-bottom">
        <Col>
          <InputComponent
            type="text"
            placement="chat"
            chat
            value={message}
            inputMessage={inputMessage}
            sendMesssage={sendMesssage}
          />
        </Col>
        <Col className="col-2 d-flex justify-content-center">
          <Stack direction="horizontal" gap={4}>
            <Icon name="note-sticky" placement="send-gif clickable" />
            <IconAuthen icon="image" auth={authLvl(level)} />
            <IconAuthen icon="street-view" auth={authLvl(level)} />
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}
