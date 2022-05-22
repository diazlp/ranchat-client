import { Col, Row } from "react-bootstrap";

import ButtonPrimary from "../Button/ButtonPrimary";
import InputComponent from "../Form/InputComponent";
import SidebarHeaders from "../Headers/SidebarHeaders";
import ListChats from "./ListChats";
import { getChatList } from "../../actions/chatAction";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SidebarChat({ premium, data }) {
  const message = 20;
  const [listChat, setlistChat] = useState([]);
  const disptach = useDispatch();
  const { chatList } = useSelector((state) => state.chat);

  useEffect(() => {
    disptach(getChatList());
  }, []);

  useEffect(() => {
    setlistChat(chatList);
  }, [chatList]);
  return (
    <Col className="col-3 sidebar-chat">
      <Row className="header d-flex align-items-center">
        <Col className="col-3">
          <img
            src="https://i.ibb.co/0nC0wBx/Run-Chat-Icon.png"
            alt="Run-Chat-Icon"
            width="50"
          />
        </Col>
        <Col className="d-flex align-items-center justify-content-end">
          {!premium && (
            <ButtonPrimary
              text="Premium Now"
              action="login"
              placement="premium-cta"
            />
          )}
        </Col>
      </Row>
      <SidebarHeaders text="Message" num={message} />
      <InputComponent type="search" placement="search" />
      <Row className="gap-2 chat-list d-flex align-items-start">
        {listChat.length > 0 &&
          listChat.map((chat) => <ListChats chat={chat} />)}
      </Row>
    </Col>
  );
}
