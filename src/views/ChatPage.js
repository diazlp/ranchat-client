import { Col, Container, Row } from "react-bootstrap";

import ChatArea from "../components/Chat/ChatPersonal/ChatArea";
import ChatFooter from "../components/Chat/ChatPersonal/ChatFooters";
import ChatHeader from "../components/Chat/ChatPersonal/ChatHeaders";
import FriendList from "../components/SidebarMenus/SidebarFriend";
import Menus from "../components/SidebarMenus/Menus";
import SidebarChat from "../components/SidebarMenus/SidebarChat";
import { getChatList } from "../actions/chatAction";
import { useEffect, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SocketContext } from "../context/SocketContext";

export default function ChatPage() {
  const login = true;
  const premium = false;
  const lvl = 3;
  const data = "data";
  const [listChat, setlistChat] = useState([]);

  const { socket } = useContext(SocketContext);
  const { profile } = useSelector((state) => state.user);
  const { chatList } = useSelector((state) => state.chat);
  const disptach = useDispatch();

  useEffect(() => {
    setlistChat(chatList);
  }, [chatList]);

  useEffect(() => {
    socket.on("getUsers", (data) => {
      console.log(data);
    });
    if (profile) {
      console.log(socket);
      socket.emit("adduser", profile.UserId);
    }
  }, [profile]);
  useEffect(() => {
    disptach(getChatList());
  }, []);
  return (
    <Container fluid className="chat-page">
      <Row className="vh-100">
        <Menus isLogin={login} />
        <SidebarChat premium={premium} data={data} listChat={listChat} />
        <Col className="bg-light">
          <ChatHeader level={lvl} />
          <ChatArea data={data} />
          <ChatFooter level={lvl} />
        </Col>
        <FriendList />
      </Row>
    </Container>
  );
}
