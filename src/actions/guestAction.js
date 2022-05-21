import { CREATE_GUEST, DELETE_GUEST } from "./actionTypes";
import axios from "axios";

const serverAppUrl = "http://localhost:4001";

const createGuestSuccess = (payload) => {
  return {
    type: CREATE_GUEST,
    payload,
  };
};

const deleteGuestSuccess = () => {
  return {
    type: DELETE_GUEST,
  };
};

export const createGuest = (socketId) => {
  return (dispatch) => {
    return axios
      .post(`${serverAppUrl}/guest/addGuest`, {
        socketId: socketId,
      })
      .then(({ data }) => {
        console.log(data, "<<< dari action");
        dispatch(createGuestSuccess(data));
      });
  };
};

export const deleteGuest = (mongoId) => {
  return (dispatch) => {
    return axios.post(`${serverAppUrl}/guest/${mongoId}`).then(({ data }) => {
      dispatch(deleteGuestSuccess());
    });
  };
};
