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
  } else {
    return (
      <Link to={action}>
        <Button
          className={`btn-${placement}`}
          onClick={() => {
            console.log(action);
          }}
        >
          {placement === "premium-cta" && (
            <Icon name="crown" placement="premium" />
          )}
          {text}
        </Button>
      </Link>
    );
  }
}
