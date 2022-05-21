import { CREATE_GUEST, DELETE_GUEST } from "../actions/actionTypes";

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
    default:
      return state;
  }
};

export default guestReducer;
