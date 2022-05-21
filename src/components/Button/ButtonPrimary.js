import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";

export default function ButtonPrimary({ text, action, placement }) {
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
