import {
  FETCH_FRIEND_ROOM,
  FETCH_HISTORY_CHAT,
  FETCH_FRIEND_NAME,
} from "./actionTypes";
import axios from "axios";

const serverAppUrl = "http://localhost:4001";

const setFriendRoom = (payload) => {
  return {
    type: FETCH_FRIEND_ROOM,
    payload,
  };
};

export const friendHeader = (payload) => {
  return {
    type: FETCH_FRIEND_NAME,
    payload,
  };
};

const setHistoryCHat = (payload) => {
  return {
    type: FETCH_HISTORY_CHAT,
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

export const getHistoryChat = (roomfriendid) => {
  return (dispatch) => {
    return axios
      .get(`${serverAppUrl}/messages/findmessage/${roomfriendid}`, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
      .then(({ data }) => {
        const result = {
          data,
          roomfriendid,
        };
        dispatch(setHistoryCHat(result));
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};
export const getLastHistoryChat = ({ id }) => {
  return axios.get(`${serverAppUrl}/messages/findlastmessage/${id}`, {
    headers: {
      access_token: localStorage.getItem("access_token"),
    },
  });
};

export const addRoom = ({ receiverId, sender }) => {
  return (dispatch) => {
    return axios
      .post(
        `${serverAppUrl}/messages/roomfriend`,
        { receiverId, sender },
        {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        }
      )
      .then(({ data }) => {
        dispatch(getHistoryChat(data.insertedId));
        dispatch(getChatList());
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

export const sendMessage = ({ message, friendRoom, id }) => {
  return (dispatch) => {
    return axios
      .post(
        `${serverAppUrl}/messages/addmessage`,
        {
          roomfriendid: friendRoom,
          text: message,
          id,
        },
        {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        }
      )
      .then(() => {
        dispatch(getHistoryChat(friendRoom));
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};
