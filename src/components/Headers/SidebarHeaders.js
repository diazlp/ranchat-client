import { Col, Form, Row, Stack } from "react-bootstrap";
import BadgeComponent from "../Badge/BadgeComponent";

export default function SidebarHeaders({ text, badge }) {
  return (
    <Row className="header">
      <Col className="d-flex align-items-center justify-content-between">
        <h2>{text}</h2>
        <BadgeComponent number={badge} />
      </Col>
    </Row>
  );
}
