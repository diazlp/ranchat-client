import { Badge, Button, Col, Row } from "react-bootstrap";

export default function FriendList(params) {
  return (
    <Col className="col-3 sidebar-friend px-4">
      <Row className="header">
        <Col className="d-flex align-items-center justify-content-between">
          <h2>Friend</h2>
          <h5 className="badge-friend">
            <Badge pill>90+</Badge>
          </h5>
        </Col>
      </Row>
    </Col>
  );
}
