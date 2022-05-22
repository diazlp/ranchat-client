import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";

export default function ButtonCTARan(params) {
  return (
    <Link to="/" className="text-center button-cta-ran">
      <button class="pushable">
        <span class="shadow"></span>
        <span class="edge"></span>
        <span class="front">
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
