import { Col, Container, Row, Stack } from "react-bootstrap";
import { getChatList } from "../actions/chatAction";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import ChatArea from "../components/Chat/ChatPersonal/ChatArea";
import ChatFooter from "../components/Chat/ChatPersonal/ChatFooters";
import ChatHeader from "../components/Chat/ChatPersonal/ChatHeaders";
import FriendList from "../components/SidebarMenus/SidebarFriend";
import Menus from "../components/SidebarMenus/Menus";
import SidebarChat from "../components/SidebarMenus/SidebarChat";
import PremiumModal from "../components/Premium/PremiumModals";

export default function ChatPage() {
  const [modalShow, setModalShow] = useState(false);
  const [premium, setPremium] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);
  // const lvl = 10;

  const [lvFriend, setLvFriend] = useState(100);
  const [listChat, setlistChat] = useState([]);

  const navigate = useNavigate();

  const { chatList, chatHistory, friendHeaderName } = useSelector(
    (state) => state.chat
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setlistChat(chatList);
  }, [chatList]);

  // useEffect(() => {
  //   setLvFriend(Math.floor(chatHistory.length / 10));
  // }, [chatHistory]);

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

  const premiumButtonHandler = () => {
    if (localStorage.getItem("isVerified") === "false") {
      navigate("/verification");
    } else {
      setModalShow(true);
    }
  };

  return (
    <Container fluid className="chat-page">
      <Row className="vh-100">
        <Menus isLogin={loginStatus} />

        {/* <SidebarChat
          premium={premium}
          data={data}
          listChat={listChat}
          setModalShow={premiumButtonHandler}
        />
        <Col className="bg-light">
          <ChatHeader level={lvFriend} />
          <ChatArea data={data} />
          <ChatFooter level={lvFriend} />
        </Col> */}

        <SidebarChat
          premium={premium}
          listChat={listChat}
          setModalShow={premiumButtonHandler}
        />

        {friendHeaderName && (
          <Col className="bg-light">
            <ChatHeader level={lvFriend} />
            <ChatArea />
            <ChatFooter level={lvFriend} />
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
                RanChat allows users to socialize with strangers without sharing
                personal information. It pairs random users in chat set-ups,
                identified as <strong>You</strong> and <strong>Stranger</strong>
                . You can also add stranger to your friend list and send them
                cute images.
              </p>
            </Stack>
          </Col>
        )}
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
