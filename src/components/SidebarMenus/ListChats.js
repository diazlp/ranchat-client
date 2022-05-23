import React from "react";

import ChatList from "../Chat/ChatPersonal/ChatList";
import { getHistoryChat, getLastHistoryChat } from "../../actions/chatAction";
import { getUser } from "../../actions/userAction";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function ListChats({ chat }) {
  const [user, setUser] = useState("");
  const [lastMessage, seLastMessage] = useState("");

  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.user);
  useEffect(() => {
    console.log(chat._id);
    if (profile && chat) {
      const friendId = chat.members.find((m) => m !== profile.UserId);
      getUser(friendId).then(({ data }) => {
        setUser(data);
      });
      getLastHistoryChat({ id: chat._id })
        .then(({ data }) => {
          seLastMessage(data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  }, [chat]);

  return (
    <>
      {lastMessage && user && (
        <div
          onClick={() => {
            console.log(chat._id);
            dispatch(getHistoryChat(chat._id));
          }}
        >
          <ChatList
            name={user.fullName}
            image={user.Profile.profilePicture}
            message={lastMessage}
          />
        </div>
      )}
    </>
  );
}
