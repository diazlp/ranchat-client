import { Badge, Button, Col, Row, Stack } from "react-bootstrap";
import ChatBubble2 from "./Chat/ChatPersonal/ChatBubble2";
import Icon from "./Icon/Icon";

export default function SidebarChat(params) {
  return (
    <Col className="col-3 sidebar-chat">
      <Row className="header d-flex align-items-center ">
        <Col className="col-3">
          <img
            src="https://i.ibb.co/0nC0wBx/Run-Chat-Icon.png"
            alt="Run-Chat-Icon"
            width="50"
          />
        </Col>
        <Col className="d-flex align-items-center justify-content-end">
          <Button className="button-upgrade">
            <Icon name="crown" /> Upgrade Now
          </Button>
        </Col>
      </Row>
      <Stack gap={4} className="mt-5">
        <Row>
          <Col className="d-flex align-items-center justify-content-between">
            <h2>Message</h2>
            <h5 className="badge-message">
              <Badge pill>90+</Badge>
            </h5>
          </Col>
        </Row>
        <Row className="m-0">
          <input type="search" />
        </Row>
        <Row className="chat-list d-flex align-items-start">
          <ChatBubble2
            name="Aliansyah"
            avatar="https://dummyimage.com/500x500/e6e6e6/080808&text=A"
            message="Test 123adasdasdasdasdasdasdasdasdadasdasdasdasdsa"
          />
          <ChatBubble2
            name="Aliansyah"
            avatar="https://dummyimage.com/500x500/e6e6e6/080808&text=A"
            message="Test 123adasdasdasdasdasdasdasdasdadasdasdasdasdsa"
          />
        </Row>
      </Stack>
    </Col>
  );
}
