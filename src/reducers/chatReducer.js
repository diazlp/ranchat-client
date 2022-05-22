import { FETCH_FRIEND_ROOM, FETCH_HISTORY_CHAT } from "../actions/actionTypes";

const initialState = {
  chatList: [],
  chatHistory: [],
  friendRoom: "",
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FRIEND_ROOM:
      return {
        ...state,
        chatList: action.payload,
      };
    case FETCH_HISTORY_CHAT:
      return {
        ...state,
        chatHistory: action.payload.data,
        friendRoom: action.payload.roomfriendid,
      };
    default:
      return state;
  }
};

export default chatReducer;
