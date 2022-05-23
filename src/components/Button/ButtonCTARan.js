import { Link } from "react-router-dom";

export default function ButtonCTARan(params) {
  return (
    <Link to="/" className="text-center button-cta-ran">
      <button className="pushable">
        <span className="shadow"></span>
        <span className="edge"></span>
        <span className="front">
          <img
            src="https://i.ibb.co/0nC0wBx/Run-Chat-Icon.png"
            alt="Run-Chat-Icon"
            width="40"
          />
        </span>
      </button>
    </Link>
  );
}
