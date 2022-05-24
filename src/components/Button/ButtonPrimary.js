import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import Icon from "../Icon/Icon";

export default function ButtonPrimary({
  text,
  action,
  placement,
  setModalShow,
  submit,
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

  if (action === "premium") {
    return (
      <Button className={`btn-${placement}`} onClick={() => setModalShow(true)}>
        {placement === "premium-cta" && (
          <Icon name="crown" placement="premium" />
        )}
        {text}
      </Button>
    );
  } else if (action === "LR") {
    //Login and Register bukan Left and Right
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
  } else if (placement === "edit-page") {
    return (
      <Button className={`btn-${placement}`} type="submit">
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
          setSeconds(10);
        }}
      >
        {placement === "premium-cta" && (
          <Icon name="crown" placement="premium" />
        )}
        {text}
        {seconds !== 0 && `( ${seconds} )`}
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
