import { FETCH_FRIEND, FETCH_FRIEND_REQUEST } from "./actionTypes";
import axios from "axios";

const serverAppUrl =
  process.env.NODE_ENV === "production"
    ? "https://ranchat-app.herokuapp.com"
    : "http://localhost:4001";

const setFriend = (payload) => {
  return {
    type: FETCH_FRIEND,
    payload,
  };
};

const setFriendRequest = (payload) => {
  return {
    type: FETCH_FRIEND_REQUEST,
    payload,
  };
};

export const getFriend = () => {
  return (dispatch) => {
    return axios
      .get(`${serverAppUrl}/friends`, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
      .then(({ data }) => {
        dispatch(setFriend(data.friendList));
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
};

export const getFriendRequest = () => {
  return (dispatch) => {
    return axios
      .get(`${serverAppUrl}/friends/request`, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
      .then(({ data }) => {
        dispatch(setFriendRequest(data.friendRequestList));
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
};

export const addFriend = (id) => {
  return (dispatch) => {
    return axios
      .post(
        `${serverAppUrl}/friends/`,
        {
          userId: id,
        },
        {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        }
      )
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
};

export const acceptFriend = (data) => {
  return (dispatch) => {
    return axios
      .patch(
        `${serverAppUrl}/friends/${data.id}`,
        {},
        {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        }
      )
      .then(() => {
        dispatch(getFriendRequest());
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
};

export const rejectFriendRequest = (data) => {
  return (dispatch) => {
    return axios
      .delete(
        `${serverAppUrl}/friends/request/${data.id}`,
        {},
        {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        }
      )
      .then(() => {
        dispatch(getFriendRequest());
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
};

export const deleteFriend = (data) => {
  return (dispatch) => {
    return axios
      .delete(
        `${serverAppUrl}/friends/${data.id}`,
        {},
        {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        }
      )
      .then(() => {
        dispatch(getFriend());
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
};
