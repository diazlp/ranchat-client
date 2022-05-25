import { Col, Form, Row, Stack } from "react-bootstrap";

import InputComponent from "../Form/InputComponent";

export default function AboutMe({ about, edit, action, sosmed }) {
  if (edit) {
    return (
      <div className="border p-3">
        <Col className="d-flex gap-3">
          <Form.Control as="textarea" rows={6} value={about} />
          <Stack gap={4}>
            <Form.Control
              type="text"
              placeholder="facebook"
              value={sosmed.facebook}
            />
            <Form.Control
              type="text"
              placeholder="instagram"
              value={sosmed.instagram}
            />
            <Form.Control
              type="text"
              placeholder="twitter"
              value={sosmed.twitter}
            />
          </Stack>
        </Col>
      </div>
    );
  } else {
    return (
      <Row className="about-me px-5">
        <h1 className="abput-header mb-4">About Me</h1>
        <p className="about-paragraf">{about}</p>
      </Row>
    );
  }
}
