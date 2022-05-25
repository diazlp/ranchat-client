import { Button, Col, Stack } from "react-bootstrap";

import Icon from "../Icon/Icon";

export default function UserInfo({
  placement,
  privacy,
  edit,
  gender,
  birthday,
  address,
}) {
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
            <Button size="sm" className="px-3">
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
            <p className="m-0 user-info-value">{birthday}</p>
            {edit && (
              <Icon
                name="square-pen"
                placement="edit-user-info icon-edit-profile-info clickable"
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
            <p className="m-0 user-info-value">{address}</p>
            {edit && (
              <Icon
                name="square-pen"
                placement="edit-user-info icon-edit-profile-info clickable"
              />
            )}
          </Stack>
        )}
      </Stack>
    </Col>
  );
}
