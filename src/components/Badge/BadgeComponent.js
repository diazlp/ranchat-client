import { Badge } from "react-bootstrap";

export default function BadgeComponent({ number }) {
  const numberShorten = (num) => {
    if (num > 99) return "99+";
    return num;
  };

  return (
    <h5 className="badge-message">
      <Badge pill>{numberShorten(number)}</Badge>
    </h5>
  );
}
