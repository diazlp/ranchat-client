import { Col, Container, Row } from "react-bootstrap";
import ChatArea from "../components/Chat/ChatPersonal/ChatArea";
import ChatFooter from "../components/Chat/ChatPersonal/ChatFooters";
import ChatHeader from "../components/Chat/ChatPersonal/ChatHeaders";
import FriendList from "../components/SidebarMenus/SidebarFriend";
import Menus from "../components/SidebarMenus/Menus";
import SidebarChat from "../components/SidebarMenus/SidebarChat";
import { getChatList } from "../actions/chatAction";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ChatPage() {
  const login = true;
  const premium = false;
  const lvl = 0;
  const data = "data";
  const [lvFriend, setLvFriend] = useState(0);
  const [listChat, setlistChat] = useState([]);

  const { chatList, chatHistory } = useSelector((state) => state.chat);
  const dispatch = useDispatch();

  useEffect(() => {
    setlistChat(chatList);
  }, [chatList]);

  useEffect(() => {
    setLvFriend(Math.floor(chatHistory.length / 10));
  }, [chatHistory]);

  useEffect(() => {
    dispatch(getChatList());
  }, []);
  return (
    <Container fluid className="chat-page">
      <Row className="vh-100">
        <Menus isLogin={login} />
        <SidebarChat premium={premium} data={data} listChat={listChat} />
        <Col className="bg-light">
          <ChatHeader level={lvFriend} />
          <ChatArea data={data} />
          <ChatFooter level={lvFriend} />
        </Col>
        <FriendList />
      </Row>
    </Container>
  );
}
