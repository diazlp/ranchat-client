import { Col, Row, Stack } from "react-bootstrap";

import Icon from "../../components/Icon/Icon";
import InputComponent from "../Form/InputComponent";

export default function HeadSection({
  sosmed,
  profileBanner,
  avatar,
  name,
  joined,
  edit,
  email,
  action,
}) {
  return (
    <Row className="head-detail">
      <div>
        <img
          src={profileBanner}
          className={`background-profile-${edit ? "edit" : ""} img-fluid p-0`}
        />
        {edit && (
          <Icon
            name="square-pen"
            placement="edit-user-info icon-edit-profile-banner clickable"
            action={action}
          />
        )}
      </div>
      <Col className="d-flex px-5">
        <div>
          <img src={avatar} className={`avatar${edit ? "-edit" : ""}`} />
          {edit && (
            <Icon
              name="square-pen"
              placement="edit-user-info icon-edit-avatar clickable"
              action={action}
            />
          )}
        </div>
        <Stack className="username p-3">
          <div className="d-flex gap-3 align-items-center">
            {!edit && <h1>{name}</h1>}
            {edit && (
              <InputComponent
                type="text"
                placeholder="Username"
                placement="head-section-edit"
                value={name}
              />
            )}
          </div>
          {!edit && <p>{joined}</p>}
          {edit && <p>{email}</p>}
        </Stack>
        {!edit && (
          <Stack
            className="social-media d-flex align-items-start"
            direction="horizontal"
            gap={3}
          >
            {sosmed.facebook && <Icon name="facebook-f" sosmed={true} />}
            {sosmed.twitter && <Icon name="twitter" sosmed={true} />}
            {sosmed.instagram && <Icon name="instagram" sosmed={true} />}
          </Stack>
        )}
      </Col>
    </Row>
  );
}
