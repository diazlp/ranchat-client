import { Col, Container, Form, Row, Stack } from "react-bootstrap";
import InputComponent from "../../Form/InputComponent";
import Icon from "../../Icon/Icon";
import IconAuthen from "../../Icon/IconAuthen";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { sendMessage } from "../../../actions/chatAction";

export default function ChatFooter({ level }) {
  const authLvl = (lvl) => (lvl > 4 ? true : false);
  const [message, setMessage] = useState("");
  const { friendRoom } = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  const sendMesssage = () => {
    if (message && friendRoom) {
      dispatch(sendMessage({ message, friendRoom }));
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
