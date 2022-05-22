import { Col, Row, Stack } from "react-bootstrap";

import Icon from "../../components/Icon/Icon";

export default function HeadSection({
  sosmed,
  profileBanner,
  avatar,
  name,
  joined,
}) {
  return (
    <Row className="head-detail">
      <img src={profileBanner} className="background-profile img-fluid p-0" />
      <Col className="d-flex px-5">
        <img src={avatar} className="avatar" />
        <Stack className="username p-3">
          <h1>{name}</h1>
          <p>{joined}</p>
        </Stack>
        <Stack
          className="social-media d-flex align-items-start"
          direction="horizontal"
          gap={3}
        >
          {sosmed.facebook && <Icon name="facebook-f" sosmed={true} />}
          {sosmed.twitter && <Icon name="twitter" sosmed={true} />}
          {sosmed.instagram && <Icon name="instagram" sosmed={true} />}
        </Stack>
      </Col>
    </Row>
  );
}
