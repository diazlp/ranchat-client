import { OverlayTrigger, Popover } from "react-bootstrap";

import Icon from "./Icon";

export default function IconAuthen({ icon, auth, action }) {
  if (auth) {
    if (icon === "image") {
      return <Icon name={icon} placement="authen-true image" action={action} />;
    }
    return (
      <Icon name={icon} placement="authen-true location" action={action} />
    );
  } else {
    return (
      <OverlayTrigger
        trigger="hover"
        placement="top"
        overlay={
          <Popover>
            <Popover.Body>You are not a premium user</Popover.Body>
          </Popover>
        }
      >
        <div className="me-2">
          <i className={`icon-authen-false fa-solid fa-${icon}`} />
          <i className="fa-solid fa-lock" />
        </div>
      </OverlayTrigger>
    );
  }
}
