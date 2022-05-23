import { Col, Row } from "react-bootstrap";

import ButtonPrimary from "../Button/ButtonPrimary";
import InputComponent from "../Form/InputComponent";
import SidebarHeaders from "../Headers/SidebarHeaders";
import ListChats from "./ListChats";


export default function SidebarChat({ premium, listChat }) {
  const message = 20;
  console.log(listChat);
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
