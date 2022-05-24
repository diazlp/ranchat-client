import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import Icon from "../Icon/Icon";

export default function ButtonPrimary({
  text,
  action,
  placement,
  submit,
  customClass, //diaz made this
}) {
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
      <Button className={`btn-${placement}`} onClick={() => action(true)}>
        {placement === "premium-cta" && (
          <Icon name="crown" placement="premium" />
        )}
        {text}
      </Button>
    );
  }
  ///////

  //// APAKAH CONFLICT?
  // if (placement === "send-verif") {
  //   return (
  //     <Button className={`btn-${placement}`} onClick={() => action(60)}>
  //       {text}
  //     </Button>
  //   );
  // } else if (placement === "premium-cta") {
  //   return (
  //     <Button className={`btn-${placement}`} onClick={() => action(true)}>
  //       {placement === "premium-cta" && (
  //         <Icon name="crown" placement="premium" />
  //       )}
  //       {text}
  //     </Button>
  //   );
  ////
  else if (placement === "video-action btn-ran") {
    return (
      <Button className={`btn-${placement}`} onClick={() => action()}>
        {placement === "premium-cta" && (
          <Icon name="crown" placement="premium" />
        )}
        {text}
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
