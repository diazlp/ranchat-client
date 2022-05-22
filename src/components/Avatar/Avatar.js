import { Col } from "react-bootstrap";

export default function Avatar({ avatar, size, w, placement }) {
  if (!size)
    return (
      <img
        src={avatar}
        alt="Run-Chat-Icon"
        width={w}
        className={`avatar ${placement}`}
      />
    );
  switch (size) {
    case "lg":
      return (
        <img
          src={avatar}
          alt="Run-Chat-Icon"
          width="60"
          className={`avatar ${placement}`}
        />
      );
    case "md":
      return (
        <img
          src={avatar}
          alt="Run-Chat-Icon"
          width="53"
          className={`avatar ${placement}`}
        />
      );
    case "sm":
      return (
        <img
          src={avatar}
          alt="Run-Chat-Icon"
          width="40"
          className={`avatar ${placement}`}
        />
      );
  }
}
