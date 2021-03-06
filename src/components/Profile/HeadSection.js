import { Col, Form, Row, Stack } from "react-bootstrap";

import Icon from "../../components/Icon/Icon";

export default function HeadSection({
  sosmed,
  profileBanner,
  avatar,
  fullName,
  joined,
  edit,
  email,
  action,
  setProfile,
  profile,
}) {
  const onChangeHandler = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <Row className="head-detail">
      <img
        src={profileBanner}
        className={`background-profile${edit ? "-edit" : ""} p-0`}
        height={300}
      />
      {/* {edit && (
        <Icon
          name="square-pen"
          placement="edit-user-info icon-edit-profile-banner clickable"
          action={action}
        />
      )} */}
      <Col className="d-flex px-5">
        <div>
          <img
            src={avatar}
            className={`avatar${edit ? "-edit" : ""} avatar-header`}
          />
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
            {!edit && <h1>{fullName}</h1>}
            {edit && (
              <Form.Control
                type="text"
                placeholder="Username"
                value={fullName}
                className="mb-3 w-50"
                name="fullName"
                onChange={(e) => onChangeHandler(e)}
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
