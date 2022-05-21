import { OverlayTrigger, Popover } from "react-bootstrap";
import Icon from "./Icon";

export default function IconAuthen({ icon, auth }) {
  if (auth) {
    return <Icon name={icon} />;
  } else {
    return (
      <OverlayTrigger
        trigger="hover"
        placement="top"
        overlay={
          <Popover>
            <Popover.Body>Level mu belum memenuhi</Popover.Body>
          </Popover>
        }
      >
        <div>
          <i class={`icon-lock fa-solid fa-${icon} fs-5`} />
          <i class="fa-solid fa-lock" />
        </div>
      </OverlayTrigger>
    );
  }
}
