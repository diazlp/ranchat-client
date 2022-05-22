import { FETCH_FRIEND_ROOM } from "./actionTypes";
import axios from "axios";

const serverAppUrl = "http://localhost:4001";

const setFriendRoom = (payload) => {
  return {
    type: FETCH_FRIEND_ROOM,
    payload,
  };
};

export const getChatList = () => {
  return (dispatch) => {
    return axios
      .get(`${serverAppUrl}/messages/roomfriend`, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
      .then(({ data }) => {
        dispatch(setFriendRoom(data));
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
};
