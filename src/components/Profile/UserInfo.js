import { Button, Col, Form, Stack } from "react-bootstrap";
import InputComponent from "../Form/InputComponent";

import Icon from "../Icon/Icon";

export default function UserInfo({
  placement,
  privacy,
  edit,
  gender,
  birthday,
  address,
  setProfile,
  profile,
}) {
  const onChangeHandler = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };
  const icon = (val) => {
    switch (val) {
      case "Birthday":
        return "cake-candles";
      case "Live in":
        return "location-dot";
      case "Gender":
        return "mars-and-venus";
      case true:
        return "user-lock";
      case false:
        return "earth-asia";
    }
  };

  return (
    <Col className="user-info">
      <Stack gap={2}>
        <Stack direction="horizontal" gap={3}>
          <Icon name={icon(placement)} placement="user-info-headline" />
          <p className="m-0 user-info-headline">{placement}</p>
        </Stack>

        {placement === "Gender" && edit && (
          <Stack direction="horizontal" gap={3}>
            <Icon
              name={icon(privacy)}
              placement="user-info-privacy clickable"
            />
            <Button size="sm" className="px-3">
              Male <Icon name="mars" />
            </Button>
            <Button size="sm" className="px-3">
              Female <Icon name="venus" />
            </Button>
          </Stack>
        )}

        {placement === "Gender" && !edit && (
          <Stack direction="horizontal" gap={3}>
            <Icon
              name={icon(privacy)}
              placement="user-info-privacy clickable"
            />
            <Button size="sm" className="px-3" disabled>
              {gender} <Icon name={gender === "Male" ? "mars" : "venus"} />
            </Button>
          </Stack>
        )}

        {/* DIAZ CODE */}
        {placement === "Birthday" && (
          <Stack direction="horizontal" gap={3}>
            <Icon
              name={icon(privacy)}
              placement="user-info-privacy clickable"
            />
            {!edit && <p className="m-0 user-info-value">{birthday}</p>}
            {edit && (
              <Form.Control
                name="birthday"
                type="date"
                value={birthday}
                onChange={(e) => onChangeHandler(e)}
              />
            )}
          </Stack>
        )}

        {placement === "Live in" && (
          <Stack direction="horizontal" gap={3}>
            <Icon
              name={icon(privacy)}
              placement="user-info-privacy clickable"
            />

            {!edit && <p className="m-0 user-info-value">{address}</p>}
            {edit && (
              <Form.Control
                type="text"
                value={address}
                name="address"
                onChange={(e) => onChangeHandler(e)}
              />
            )}
          </Stack>
        )}
      </Stack>
    </Col>
  );
}
