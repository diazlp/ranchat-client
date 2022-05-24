import {
  CREATE_GUEST,
  DELETE_GUEST,
  JOIN_ROOM,
  SEND_MESSAGE,
} from "./actionTypes";
import axios from "axios";

const serverAppUrl =
  process.env.NODE_ENV === "production"
    ? "https://ranchat-app.herokuapp.com"
    : "http://localhost:4001";

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

export const sendMessage = (payload) => {
  return {
    type: SEND_MESSAGE,
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
    console.log("joined room");

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

export const fetchRoomDetail = (roomId) => {
  return (dispatch) => {
    return axios.get(`${serverAppUrl}/guest/randomRoom`).then(({ data }) => {
      const roomDetail = data.find((el) => el._id === roomId);
      dispatch(joinRoomSuccess(roomDetail));
    });
  };
};
