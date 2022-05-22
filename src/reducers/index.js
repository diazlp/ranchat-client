import { combineReducers } from "redux";
import userReducer from "./userReducer";
import friendReducer from "./friendReduces";
import chatReducer from "./chatReducer";

export default combineReducers({
  user: userReducer,
  friend: friendReducer,
  chat: chatReducer,
});
