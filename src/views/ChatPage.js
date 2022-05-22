import { Col, Container, Row } from "react-bootstrap";

import ChatArea from "../components/Chat/ChatPersonal/ChatArea";
import ChatFooter from "../components/Chat/ChatPersonal/ChatFooters";
import ChatHeader from "../components/Chat/ChatPersonal/ChatHeaders";
import FriendList from "../components/SidebarMenus/SidebarFriend";
import Menus from "../components/SidebarMenus/Menus";
import SidebarChat from "../components/SidebarMenus/SidebarChat";
import { getProfile } from "../actions/userAction";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function ChatPage() {
  const login = true;
  const premium = false;
  const lvl = 3;
  const data = "data";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, []);
  return (
    <Container fluid className="chat-page">
      <Row className="vh-100">
        <Menus isLogin={login} />
        <SidebarChat premium={premium} data={data} />
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
