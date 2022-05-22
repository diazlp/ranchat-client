import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import Icon from "../Icon/Icon";

export default function ButtonPrimary({ text, action, placement }) {
  if (placement === "send-verif") {
    return (
      <Button className={`btn-${placement}`} onClick={() => action(60)}>
        {text}
      </Button>
    );
  } else if (placement === "premium-cta") {
    return (
      <Button className={`btn-${placement}`} onClick={() => action(true)}>
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
