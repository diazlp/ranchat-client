import { Col, Container, Row } from "react-bootstrap";
import ChatFooter from "../components/Chat/ChatPersonal/ChatFooters";
import ChatHeader from "../components/Chat/ChatPersonal/ChatHeaders";
import ChatList from "../components/Chat/ChatPersonal/ChatList";
import FriendList from "../components/Friends/FriendList";
import SidebarChat from "../components/SidebarChat";
import Menus from "../components/SidebarMenus/Menus";

export default function ChatPage(params) {
  return (
    <Container fluid>
      <Row className="vh-100">
        <Menus />
        <SidebarChat />
        <Col className="bg-light">
          <ChatHeader />
          <Row className="chat-area d-flex align-items-end p-4">
            <Col>
              <ChatList
                from="guest"
                message="Lorem Ipsum is simply dummy text of the printing"
                time="15.37"
              />
              <ChatList
                from="you"
                message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                time="15.40"
              />
              <ChatList
                from="guest"
                message="Lorem Ipsum is simply dummy text of the printing"
                time="15.37"
              />
              <ChatList
                from="you"
                message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                time="15.40"
              />
              <ChatList
                from="guest"
                message="Lorem Ipsum is simply dummy text of the printing"
                time="15.37"
              />
              <ChatList
                from="you"
                message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                time="15.40"
              />
              <ChatList
                from="guest"
                message="Lorem Ipsum is simply dummy text of the printing"
                time="15.37"
              />
              <ChatList
                from="you"
                message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                time="15.40"
              />
            </Col>
          </Row>
          <ChatFooter />
        </Col>
        <FriendList />
      </Row>
    </Container>
  );
}
