import { Badge, Button, Col, Nav, Row, Stack } from "react-bootstrap";
import Icon from "../Icon/Icon";

export default function FriendListItem(params) {
  return (
    <Row className="m-0 p-3 friend-list-item mb-2">
      <Col className="col-3">
        <img
          src="https://dummyimage.com/500x500/e6e6e6/080808&text=A"
          alt="pp"
          width="50"
          height="50"
          className="avatar-cb2"
        />
      </Col>
      <Col className="text-truncate">
        <Row>
          <h6>Aliansyah Firdaus</h6>
          <p className="m-0">
            <Icon name="circle" placement="online" /> Online
          </p>
        </Row>
      </Col>
      <Col className="col-3">
        <h6 className="m-0">
          <Badge pill>Lvl12</Badge>
        </h6>
      </Col>
    </Row>
  );
}
