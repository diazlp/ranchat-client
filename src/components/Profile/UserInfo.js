import { Col, Stack } from "react-bootstrap";
import Icon from "../Icon/Icon";

export default function UserInfo({ placement, privacy }) {
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
        <Stack direction="horizontal" gap={3}>
          <Icon name={icon(privacy)} placement="user-info-privacy clickable" />
          <p className="m-0 user-info-value">03 July 2021</p>
        </Stack>
      </Stack>
    </Col>
  );
}
