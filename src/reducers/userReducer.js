import { FETCH_USER, FETCH_PROFILE } from "../actions/actionTypes";

const initialState = {
  user: "",
  profile: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        user: action.payload,
      };
    case FETCH_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
