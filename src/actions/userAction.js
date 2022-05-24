import axios from "axios";

const serverAppUrl =
  process.env.NODE_ENV === "production"
    ? "https://ranchat-app.herokuapp.com"
    : "http://localhost:4001";

export const getToken = (data) => {
  return axios
    .post(`${serverAppUrl}/user/login`, {
      email: data.email,
      password: data.password,
    })
    .then(({ data }) => {
      localStorage.setItem("UserId", data.id);
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("email", data.profile?.email);
      localStorage.setItem("fullName", data.profile?.fullName);
      localStorage.setItem("isVerified", data.profile?.isVerified);
      localStorage.setItem("isPremium", data.profile?.isPremium);
    });
};

export const registerUser = (data) => {
  return axios.post(`${serverAppUrl}/user/register`, {
    fullName: data.fullName,
    email: data.email,
    password: data.password,
  });
};

export const getProfile = () => {
  return axios.get(`${serverAppUrl}/user/profile`, {
    headers: {
      access_token: localStorage.getItem("access_token"),
    },
  });
};

export const getUser = (data) => {
  return axios.post(
    `${serverAppUrl}/user`,
    { id: data },
    {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    }
  );
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

// MIDTRANS ACTION PAYMENT
export const getPaymentToken = () => {
  return axios
    .post(
      `${serverAppUrl}/payment`,
      {},
      {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      }
    )
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};
//////
