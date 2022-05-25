import ChatList from "../Chat/ChatPersonal/ChatList";
import React from "react";

import { getHistoryChat, friendHeader } from "../../actions/chatAction";

import { getUser } from "../../actions/userAction";
import { useEffect, useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { SocketContext } from "../../context/SocketContext";

export default function ListChats({ chat }) {
  const dispatch = useDispatch();

  const [user, setUser] = useState("");
  const { profile } = useContext(SocketContext);

  // const { profile } = useSelector((state) => state.user);
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
            dispatch(
              friendHeader({
                name: user.fullName,
                photoProfile: user.Profile.profilePicture,
              })
            );
          }}
        >
          <ChatList
            name={user.fullName}
            // message=""
            image={user.Profile.profilePicture}
          />
        </div>
      )}
    </>
  );
}
