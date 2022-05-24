import {
  FETCH_FRIEND_ROOM,
  FETCH_HISTORY_CHAT,
  FETCH_FRIEND_NAME,
} from "../actions/actionTypes";

const initialState = {
  chatList: [],
  chatHistory: [],
  friendRoom: "",
  friendHeaderName: "",
  friendHeaderPhoto: "",
  friendHeaderStatus: "",
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
    case FETCH_FRIEND_NAME:
      console.log(action.payload);
      return {
        ...state,
        friendHeaderName: action.payload.name,
        friendHeaderPhoto: action.payload.photoProfile,
        friendHeaderStatus: action.payload.status,
      };
    default:
      return state;
  }
};

export default chatReducer;
