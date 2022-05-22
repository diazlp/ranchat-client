import { Col, Form, Row, Stack } from "react-bootstrap";

import BadgeComponent from "../Badge/BadgeComponent";

export default function SidebarHeaders({ text, premium, color, num }) {
  return (
    <Row className="header">
      <Col className="d-flex align-items-center justify-content-between">
        <h2 className={color === "white" ? "text-light" : "text-dark"}>
          {text}
        </h2>
        <BadgeComponent
          fill={premium === true || premium === false ? premium : num}
          premium={premium}
        />
      </Col>
    </Row>
  );
}
