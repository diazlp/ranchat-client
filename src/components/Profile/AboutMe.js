import { Col, Form, Row, Stack } from "react-bootstrap";

import InputComponent from "../Form/InputComponent";

export default function AboutMe({ about, edit, action, sosmed }) {
  if (edit) {
    return (
      <div className="border p-3">
        <Col className="d-flex gap-3">
          <Form.Control as="textarea" rows={6} value={about} />
          <Stack>
            <InputComponent
              type="text"
              placeholder="facebook"
              placement="edit-sosmed-facebook"
              value={sosmed.facebook}
            />
            <InputComponent
              type="text"
              placeholder="instagram"
              placement="edit-sosmed-instagram"
              value={sosmed.twitter}
            />
            <InputComponent
              type="text"
              placeholder="twitter"
              placement="edit-sosmed-twitter"
              value={sosmed.instagram}
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
