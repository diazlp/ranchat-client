import {
  FETCH_FRIEND,
  FETCH_FRIEND_REQUEST,
  FEATCH_ONLINE_FRIEND,
} from "../actions/actionTypes";

const initialState = {
  friendList: [],
  firendRequestList: [],
  onelineFriendList: [],
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
    case FEATCH_ONLINE_FRIEND:
      return {
        ...state,
        onelineFriendList: action.payload,
      };
    default:
      return state;
  }
};

export default friendReducer;
