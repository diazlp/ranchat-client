import { Badge } from "react-bootstrap";

export default function BadgeComponent({ fill, premium }) {
  const numberShorten = (num) => {
    if (num > 99) return "99+";
    return num;
  };

  const colorBadge = (value) => {
    switch (value) {
      case true:
        return "premium";
      case false:
        return "free";
      default:
        return "default";
    }
  };

  const generateStatus = (val) => {
    return !val ? "Free" : "Premium";
  };

  return (
    <h5 className={`badge-header badge-header-${colorBadge(premium)}`}>
      <Badge pill>
        {fill === true || fill === false
          ? generateStatus(fill)
          : numberShorten(fill)}
      </Badge>
    </h5>
  );
}
