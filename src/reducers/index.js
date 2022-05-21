import { combineReducers } from "redux";
import guestReducer from "./guestReducer";
import userReducer from "./userReducer";

export default combineReducers({
  user: userReducer,
  guest: guestReducer,
});
