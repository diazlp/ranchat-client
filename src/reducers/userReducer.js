import { FETCH_TOKEN, FETCH_PROFILE } from "../actions/actionTypes";

const initialState = {
  token: "",
  profile: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOKEN:
      return {
        ...state,
        token: action.payload,
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
