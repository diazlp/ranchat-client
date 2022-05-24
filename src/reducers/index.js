import { combineReducers } from "redux";
import guestReducer from "./guestReducer";
import userReducer from "./userReducer";
import friendReducer from "./friendReducer";
import chatReducer from "./chatReducer";

export default combineReducers({
  user: userReducer,
  guest: guestReducer,
  friend: friendReducer,
  chat: chatReducer,
});
