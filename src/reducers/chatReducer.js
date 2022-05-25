import {
  FETCH_FRIEND_ROOM,
  FETCH_HISTORY_CHAT,
  FETCH_FRIEND_NAME,
  SET_NEW_MESSAGE,
} from "../actions/actionTypes";

const initialState = {
  chatList: [],
  chatHistory: [],
  friendRoom: "",
  friendHeaderName: "",
  friendHeaderPhoto: "",
  newMessage: {},
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
      return {
        ...state,
        friendHeaderName: action.payload.name,
        friendHeaderPhoto: action.payload.photoProfile,
      };
    case SET_NEW_MESSAGE:
      return {
        ...state,
        newMessage: action.payload,
      };
    default:
      return state;
  }
};

export default chatReducer;
