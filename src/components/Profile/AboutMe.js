import { Form, Row, Stack } from "react-bootstrap";

import InputComponent from "../Form/InputComponent";

export default function AboutMe({ about, edit }) {
  if (edit) {
    return (
      <div className="border p-3">
        <Form.Control as="textarea" rows={6} />
        <Stack direction="horizontal" gap={3} className="mt-3">
          <InputComponent
            type="text"
            placeholder="facebook: "
            placement="edit-sosmed-facebook"
          />
          <InputComponent
            type="text"
            placeholder="instagram: "
            placement="edit-sosmed-instagram"
          />
          <InputComponent
            type="text"
            placeholder="twitter: "
            placement="edit-sosmed-twitter"
          />
        </Stack>
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
