import {
  CREATE_GUEST,
  DELETE_GUEST,
  JOIN_ROOM,
  SEND_MESSAGE,
} from "../actions/actionTypes";

const initialState = {
  guest: "",
  guestList: [],
  room: {},
  messageHistory: [],
};

const guestReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_GUEST:
      return {
        ...state,
        guest: action.payload,
      };
    case DELETE_GUEST:
      return {
        ...state,
        guest: "",
      };
    case JOIN_ROOM:
      return {
        ...state,
        room: action.payload,
      };
    case SEND_MESSAGE:
      return {
        ...state,
        messageHistory: [...state.messageHistory, action.payload],
      };
    default:
      return state;
  }
};

export default guestReducer;
