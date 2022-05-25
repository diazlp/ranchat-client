import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Icon from "../Icon/Icon";

export default function ButtonPrimary({
  text,
  action,
  placement,
  submit,
  customClass, //diaz made this
  sendFriendRequest,
}) {
  const [seconds, setSeconds] = useState(0);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  });

  if (customClass === "premium-btn") {
    return (
      <Button className={`btn-${placement}`} onClick={() => action(true)}>
        {placement === "premium-cta" && (
          <Icon name="crown" placement="premium" />
        )}
        {text}
      </Button>
    );
  } else if (action === "LR") {
    return (
      <Button
        className={`btn-${placement}`}
        onClick={(e) => {
          e.preventDefault();
          submit();
        }}
      >
        {placement === "premium-cta" && (
          <Icon name="crown" placement="premium" />
        )}
        {text}
      </Button>
    );
  }

  //// KEMUNGKINAN CONFLICT
  else if (placement === "edit-page") {
    return (
      <Button className={`btn-${placement}`} type="submit">
        {placement === "premium-cta" && (
          <Icon name="crown" placement="premium" />
        )}
        {text}
      </Button>
    );
  } else if (placement === "video-action btn-request") {
    return (
      <Button
        className={`btn-${placement}`}
        onClick={() => sendFriendRequest()}
      >
        {placement === "premium-cta" && (
          <Icon name="crown" placement="premium" />
        )}
        {text}
      </Button>
    );
  } else if (placement === "video-action btn-stop") {
    return (
      <Button className={`btn-${placement}`} onClick={() => action()}>
        {placement === "premium-cta" && (
          <Icon name="crown" placement="premium" />
        )}
        {text}
      </Button>
    );
  } else if (placement === "video-action btn-ran") {
    return (
      <Button
        className={`btn-${placement}`}
        disabled={disabled}
        onClick={() => {
          action();
          setSeconds(15);
        }}
      >
        {placement === "premium-cta" && (
          <Icon name="crown" placement="premium" />
        )}
        {text + " "} {seconds !== 0 && `( ${seconds} )`}
      </Button>
    );
  } else {
    return (
      <Link to={action}>
        <Button className={`btn-${placement}`} onClick={() => action}>
          {placement === "premium-cta" && (
            <Icon name="crown" placement="premium" />
          )}
          {text}
        </Button>
      </Link>
    );
  }
}
