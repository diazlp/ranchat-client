import { FETCH_FRIEND, FETCH_FRIEND_REQUEST } from "../actions/actionTypes";

const initialState = {
  friendList: [],
  firendRequestList: [],
};

const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FRIEND:
      return {
        ...state,
        friendList: action.payload,
      };
    case FETCH_FRIEND_REQUEST:
      return {
        ...state,
        firendRequestList: action.payload,
      };
    default:
      return state;
  }
};

export default friendReducer;
