import { combineReducers } from "redux";
import guestReducer from "./guestReducer";
import friendReducer from "./friendReducer";
import chatReducer from "./chatReducer";

export default combineReducers({
  guest: guestReducer,
  friend: friendReducer,
  chat: chatReducer,
});
