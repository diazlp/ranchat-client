import { FETCH_PROFILE } from "../actions/actionTypes";

const initialState = {
  profile: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
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
