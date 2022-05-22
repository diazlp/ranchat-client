import { Row } from "react-bootstrap";

export default function AboutMe({ about }) {
  return (
    <Row className="about-me px-5">
      <h1 className="abput-header mb-4">About Me</h1>
      <p className="about-paragraf">{about}</p>
    </Row>
  );
}
