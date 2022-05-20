import { FETCH_TOKEN } from "./actionTypes";
import axios from "axios";

const serverAppUrl = "http://localhost:4001";

const setToken = (payload) => {
  return {
    type: FETCH_TOKEN,
    payload,
  };
};

const setProfile = (payload) => {
  return {
    type: FETCH_PROFILE,
    payload,
  };
};

export const getToken = (data) => {
  return (dispatch) => {
    return axios
      .post(`${serverAppUrl}/user/login`, {
        email: data.email,
        password: data.password,
      })
      .then(({ data }) => {
        dispatch(setToken(data.access_token));
      });
  };
};

export const register = (data) => {
  return axios
    .post(`${serverAppUrl}/user/register`, {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    })
    .then(({ data }) => {
      console.log(data);
    });
};

export const getProfile = () => {
  return (dispatch) => {
    return axios.get(`${serverAppUrl}/user/profile`).then(({ data }) => {
      dispatch(setProfile(data));
    });
  };
};

export const addProfile = (data) => {
  return axios
    .post(`${serverAppUrl}/user/profile`, {
      profilePicture: data.profilePicture,
      birthday: data.birthday,
      address: data.address,
      gender: data.gender,
      bio: data.bio,
      banner: data.banner,
      facebook: data.facebook,
      instagram: data.instagram,
      twitter: data.twitter,
    })
    .then(({ data }) => {
      console.log(data);
    });
};
