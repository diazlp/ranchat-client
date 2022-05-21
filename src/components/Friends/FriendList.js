import { Badge, Button, Col, Form, Nav, Row, Stack } from "react-bootstrap";
import Icon from "../Icon/Icon";
import FriendListItem from "./FriendListItem";

export default function FriendList(params) {
  const handleSelect = (eventKey) => {
    console.log(eventKey);
  };

  return (
    <Col className="col-3 sidebar-friend">
      <Row className="header">
        <Col className="d-flex align-items-center justify-content-between">
          <h2>Friend</h2>
          <h5 className="badge-friend">
            <Badge pill>90+</Badge>
          </h5>
        </Col>
      </Row>

      <Row className="m-0">
        <Form.Control type="email" placeholder="name@example.com" />
      </Row>

      <Stack gap={4} className="mt-5">
        <Row className="tab-filter-online mx-auto">
          <Nav
            justify
            variant="pills"
            onSelect={handleSelect}
            defaultActiveKey="online"
            className="p-0"
          >
            <Nav.Item>
              <Nav.Link eventKey="online">Online (4) </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="offline">Offline</Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>

        <div className="friend-list">
          <FriendListItem />
          <FriendListItem />
          <FriendListItem />
          <FriendListItem />
          <FriendListItem />
          <FriendListItem />
        </div>

        <Row className="m-0">
          <Button className="p-3 create-room-video">
            <Icon name="plus" /> Create Video Room
          </Button>
        </Row>
      </Stack>
    </Col>
  );
}
