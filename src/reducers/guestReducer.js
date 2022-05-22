import { CREATE_GUEST, DELETE_GUEST, JOIN_ROOM } from "../actions/actionTypes";

const initialState = {
  guest: "",
  guestList: [],
  room: {},
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
    default:
      return state;
  }
};

export default guestReducer;
