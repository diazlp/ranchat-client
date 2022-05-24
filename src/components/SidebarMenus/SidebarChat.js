import { Col, Row } from "react-bootstrap";

import ButtonPrimary from "../Button/ButtonPrimary";
import InputComponent from "../Form/InputComponent";
import SidebarHeaders from "../Headers/SidebarHeaders";
import ListChats from "./ListChats";
import { useEffect, useState } from "react";

export default function SidebarChat({ premium, listChat, setModalShow }) {
  const message = listChat.length;

  const [totalMessage, setTotalMessage] = useState(0);

  useEffect(() => {
    setTotalMessage(listChat.length);
  }, [listChat]);

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
              action={setModalShow}
              placement="premium-cta"
              customClass="premium-btn"
            />
          )}
        </Col>
      </Row>
      <SidebarHeaders text="Message" num={totalMessage} />
      <InputComponent type="search" placement="search" />
      <Row className="gap-2 chat-list d-flex align-items-start mt-4">
        {listChat.length > 0 &&
          listChat.map((chat, i) => <ListChats key={i} chat={chat} />)}
      </Row>
    </Col>
  );
}
