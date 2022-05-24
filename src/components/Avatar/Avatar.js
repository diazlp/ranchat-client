import { Col } from "react-bootstrap";

export default function Avatar({ avatar, size, w, placement }) {
  if (!size)
    return (
      <img src={avatar} alt="pp" width={w} className={`avatar ${placement}`} />
    );
  switch (size) {
    case "lg":
      return (
        <img
          src={avatar}
          alt="pp"
          width={60}
          height={60}
          className={`avatar avatar-${placement}`}
        />
      );
    case "md":
      return (
        <img
          src={avatar}
          alt="pp"
          width={53}
          height={53}
          className={`avatar avatar-${placement}`}
        />
      );
    case "sm":
      return (
        <img
          src={avatar}
          alt="pp"
          width={40}
          height={40}
          className={`avatar avatar-${placement}`}
        />
      );
  }
}
