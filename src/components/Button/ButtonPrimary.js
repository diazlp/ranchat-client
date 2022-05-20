import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ButtonPrimary({ text, page }) {
  return (
    <Link to={page}>
      <Button
        onClick={() => {
          console.log(page);
        }}
      >
        {text}
      </Button>
    </Link>
  );
}
