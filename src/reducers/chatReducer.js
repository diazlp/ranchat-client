import { FETCH_FRIEND_ROOM } from "../actions/actionTypes";

const initialState = {
  chatList: [],
  firendRequestList: [],
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FRIEND_ROOM:
      return {
        ...state,
        chatList: action.payload,
      };
    default:
      return state;
  }
};

export default chatReducer;
