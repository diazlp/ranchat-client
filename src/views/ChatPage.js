import { Col, Container, Row } from "react-bootstrap";
import ChatArea from "../components/Chat/ChatPersonal/ChatArea";
import ChatFooter from "../components/Chat/ChatPersonal/ChatFooters";
import ChatHeader from "../components/Chat/ChatPersonal/ChatHeaders";
import FriendList from "../components/SidebarMenus/SidebarFriend";
import Menus from "../components/SidebarMenus/Menus";
import SidebarChat from "../components/SidebarMenus/SidebarChat";
import PremiumModal from "../components/Premium/PremiumModals";
import { getChatList } from "../actions/chatAction";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ChatPage() {
  const [modalShow, setModalShow] = useState(false);
  const [premium, setPremium] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);
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
    if (localStorage.getItem("access_token")) {
      setLoginStatus(true);
    }

    if (
      localStorage.getItem("access_token") &&
      localStorage.getItem("isPremium") === "true"
    ) {
      setPremium(true);
    }
  }, []);

  useEffect(() => {
    dispatch(getChatList());
  }, []);

  return (
    <Container fluid className="chat-page">
      <Row className="vh-100">
        <Menus isLogin={loginStatus} />
        <SidebarChat premium={premium} data={data} listChat={listChat} setModalShow={setModalShow}/>
        <Col className="bg-light">
          <ChatHeader level={lvFriend} />
          <ChatArea data={data} />
          <ChatFooter level={lvFriend} />
        </Col>
        <FriendList />
      </Row>

      <PremiumModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        onSuccess={setModalShow}
        premiumHandler={setPremium}
      />
    </Container>
  );
}
