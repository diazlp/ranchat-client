import { Col, Container, Row, Stack } from "react-bootstrap";
import { getChatList } from "../actions/chatAction";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ChatArea from "../components/Chat/ChatPersonal/ChatArea";
import ChatFooter from "../components/Chat/ChatPersonal/ChatFooters";
import ChatHeader from "../components/Chat/ChatPersonal/ChatHeaders";
import FriendList from "../components/SidebarMenus/SidebarFriend";
import Menus from "../components/SidebarMenus/Menus";
import SidebarChat from "../components/SidebarMenus/SidebarChat";

export default function ChatPage() {
  const login = true;
  const premium = false;
  const lvl = 10;

  const [listChat, setlistChat] = useState([]);

  const { chatList, friendHeaderName } = useSelector((state) => state.chat);
  const dispatch = useDispatch();

  useEffect(() => {
    setlistChat(chatList);
  }, [chatList]);

  useEffect(() => {
    dispatch(getChatList());
  }, []);

  return (
    <Container fluid className="chat-page">
      <Row className="vh-100">
        <Menus isLogin={login} />
        <SidebarChat premium={premium} listChat={listChat} />

        {friendHeaderName && (
          <Col className="bg-light chat-area-selected">
            <ChatHeader level={lvl} />
            <ChatArea />
            <ChatFooter level={lvl} />
          </Col>
        )}

        {!friendHeaderName && (
          <Col className="bg-light">
            <Stack className="chat-area-default text-center" gap={4}>
              <img
                src="https://i.ibb.co/0FxwDHQ/Run-Chat-Transparent.png"
                alt="Run-Chat"
                width="300"
                className="mb-5"
              />
              <h1>Welcome to RanChat!</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s Lorem Ipsum is simply dummy text of
                the printing and
              </p>
            </Stack>
          </Col>
        )}

        <FriendList />
      </Row>
    </Container>
  );
}
