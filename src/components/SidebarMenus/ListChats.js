import React from "react";

import ChatList from "../Chat/ChatPersonal/ChatList";
import { getHistoryChat, getLastHistoryChat } from "../../actions/chatAction";
import { getUser } from "../../actions/userAction";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function ListChats({ chat }) {
  const [user, setUser] = useState("");

  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.user);
  useEffect(() => {
    if (chat) {
      const friendId = chat.members.find((m) => m !== profile.UserId);
      getUser(friendId).then(({ data }) => {
        setUser(data);
      });
    }
  }, [chat]);

  return (
    <>
      {user && (
        <div
          onClick={() => {
            dispatch(getHistoryChat(chat._id));
          }}
        >
          <ChatList
            name={user.fullName}
            message="unknow"
            image={user.Profile.profilePicture}
          />
        </div>
      )}
    </>
  );
}
