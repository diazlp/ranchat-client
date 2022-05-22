import { CREATE_GUEST, DELETE_GUEST, JOIN_ROOM } from "./actionTypes";
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

const joinRoomSuccess = (payload) => {
  return {
    type: JOIN_ROOM,
    payload,
  };
};

export const createGuest = (socketId) => {
  return (dispatch) => {
    return axios
      .post(`${serverAppUrl}/guest/addGuest`, {
        socketId: socketId,
      })
      .then(({ data }) => {
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

export const joinRoom = (socketId) => {
  return (dispatch) => {
    return axios
      .post(`${serverAppUrl}/guest/randomRoom`, {
        socketId: socketId,
      })
      .then(({ data }) => {
        if (data.insertedId) {
          dispatch(joinRoomSuccess(data.insertedId));
        } else if (data.guestCaller) {
          dispatch(joinRoomSuccess(data));
        }
      });
  };
};
