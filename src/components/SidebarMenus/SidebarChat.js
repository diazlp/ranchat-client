import { Button, Col, Row } from "react-bootstrap";

import ButtonPrimary from "../Button/ButtonPrimary";
import ChatList from "../Chat/ChatPersonal/ChatList";
import InputComponent from "../Form/InputComponent";
import SidebarHeaders from "../Headers/SidebarHeaders";

export default function SidebarChat({ premium, data }) {
  const message = 20;

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
        <div onClick={() => console.log("1")}>
          <ChatList
            name="Aliansyah Firdaus"
            image="https://dummyimage.com/500x500/e6e6e6/080808&text=A"
            message="Oy! Bayar utang! Parah banget"
          />
        </div>
        <div onClick={() => console.log("2")}>
          <ChatList
            name="Aliansyah Firdaus"
            image="https://dummyimage.com/500x500/e6e6e6/080808&text=A"
            message="Oy! Bayar utang! Parah banget"
          />
        </div>
      </Row>
    </Col>
  );
}
