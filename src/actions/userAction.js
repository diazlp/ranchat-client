import { FETCH_PROFILE } from "./actionTypes";
import axios from "axios";

const serverAppUrl = "http://localhost:4001";

const setProfile = (payload) => {
  return {
    type: FETCH_PROFILE,
    payload,
  };
};

export const getToken = (data) => {
  return axios
    .post(`${serverAppUrl}/user/login`, {
      email: data.email,
      password: data.password,
    })
    .then(({ data }) => {
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("profile", data.profile);
    });
};

export const registerUser = (data) => {
  console.log(data);
  return axios
    .post(`${serverAppUrl}/user/register`, {
      fullName: data.fullname,
      email: data.email,
      password: data.password,
    })
    .then(() => {
      localStorage.removeItem("email_login");
    });
};

export const getProfile = () => {
  return (dispatch) => {
    return axios
      .get(`${serverAppUrl}/user/profile`, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
      .then(({ data }) => {
        dispatch(setProfile(data));
      });
  };
};

export const addProfile = (data) => {
  return axios
    .post(
      `${serverAppUrl}/user/profile`,
      {
        profilePicture: data.profilePicture,
        birthday: data.birthday,
        address: data.address,
        gender: data.gender,
        bio: data.bio,
        banner: data.banner,
        facebook: data.facebook,
        instagram: data.instagram,
        twitter: data.twitter,
      },
      {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      }
    )
    .then(({ data }) => {
      console.log(data);
    });
};
