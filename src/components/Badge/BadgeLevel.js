import { Badge } from "react-bootstrap";
import Icon from "../Icon/Icon";

export default function BadgeLevel({ level, size }) {
  const colorLvl = (level) => {
    if (level <= 5) {
      return "grey";
    }
    if (level <= 10) {
      return "yellow";
    }
    if (level <= 20) {
      return "green";
    }
    if (level <= 30) {
      return "red";
    } else {
      return "blue";
    }
  };

  if (size === "lg") {
    return (
      <h3 className={`badge-level-${size} badge-level-${colorLvl(level)}`}>
        <Badge pill>
          <Icon name="message" placement="header-chat-level" />
          Level {level}
        </Badge>
      </h3>
    );
  } else {
    return (
      <h6 className={`badge-level-${size} badge-level-${colorLvl(level)}`}>
        <Badge pill>Lvl {level}</Badge>
      </h6>
    );
  }
}
