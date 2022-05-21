import { Badge, Col, Row, Stack } from "react-bootstrap";
import Icon from "../../Icon/Icon";

export default function ChatHeader(params) {
  return (
    <Row className="chat-header d-flex align-items-center px-3 sticky-top">
      <Col className="d-flex align-items-center">
        <img
          src="https://dummyimage.com/500x500/e6e6e6/080808&text=A"
          alt="pp"
          width="50"
          height="50"
          className="avatar-cb2"
        />
        <Stack className="px-4 my-auto">
          <h5 className="m-1">Aliansyah Firdaus</h5>
          <p className="m-1">
            <Icon name="circle" placement="online" />
            Online
          </p>
        </Stack>
        <Stack direction="horizontal" gap={4}>
          <h3 className="badge-level">
            <Badge pill>
              <Icon name="message" placement="header-chat-level" />
              Level 3
            </Badge>
          </h3>
          <Icon name="video" placement="header-chat" />
          <Icon name="ellipsis-vertical" placement="header-chat" />
        </Stack>
      </Col>
    </Row>
  );
}
