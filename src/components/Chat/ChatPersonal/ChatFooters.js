import { Col, Container, Form, Row, Stack } from "react-bootstrap";

import InputComponent from "../../Form/InputComponent";
import Icon from "../../Icon/Icon";
import IconAuthen from "../../Icon/IconAuthen";

export default function ChatFooter({ level }) {
  const authLvl = (lvl) => (lvl > 4 ? true : false);

  const test = (e) => {
    console.log("bisa", e.target.value);
  };

  return (
    <Container fluid>
      <Row className="sticky-bottom">
        <Col>
          <InputComponent type="text" placement="chat" />
        </Col>
        <Col className="col-2 d-flex justify-content-center">
          <Stack direction="horizontal" gap={4}>
            <Icon name="note-sticky" placement="send-gif clickable" />
            <IconAuthen icon="image" auth={authLvl(level)} action={test} />
            <IconAuthen icon="street-view" auth={authLvl(level)} />
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}
