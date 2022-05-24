import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { getProfile } from "./actions/userAction";

import HomePage from "./views/HomePage";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import VerificationPage from "./views/VerificationPage";
import ChatPage from "./views/ChatPage";

import ProfilePage from "./views/Profiles/ProfilePage";
import DetailPage from "./views/Profiles/DetailPage";
import EditProfile from "./views/Profiles/EditProfile";
import Security from "./views/Profiles/Security";

/* DUMMY PAGE */
import DummyHomepage from "./DummyPage/DummyHomepage";
import DummyVideoPage from "./DummyPage/DummyVideoPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      dispatch(getProfile());
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/testchat" element={<DummyHomepage />} />
        <Route path="/testvideo" element={<DummyVideoPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/verification" element={<VerificationPage />} />
        <Route path="/profile" element={<ProfilePage />}>
          <Route path="detail" element={<DetailPage />} />
          <Route path="edit" element={<EditProfile />} />
          <Route path="security" element={<Security />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
