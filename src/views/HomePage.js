import { useContext, useEffect, useState } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { SocketContext } from "../context/SocketContext";

import ChatBox from "../components/Chat/ChatOnVideo/ChatBox";
import MainHeaders from "../components/Headers/MainHeaders";
import Menus from "../components/SidebarMenus/Menus";
import VideoBox from "../components/VideoPreview/VideoBox";
import PremiumModal from "../components/Premium/PremiumModals";

export default function HomePage() {
  const [modalShow, setModalShow] = useState(false);
  // const [guest, setGuest] = useState(true);
  const [isLogin, setIsLogin] = useState(true);
  const {
    me,
    callAccepted,
    setCallAccepted,
    myVideo,
    userVideo,
    answerCall,
    callEnded,
    callUser,
    stream,
    call,
  } = useContext(SocketContext);

  const premium = false;

  return (
    <Container fluid>
      <Row className="vh-100">
        <Menus isLogin={isLogin} />
        <Col>
          <MainHeaders
            isLogin={false}
            premium={premium}
            setModalShow={setModalShow}
          />
          <Stack className="mx-1" gap={2}>
            <Stack direction="horizontal" gap={2} className="playground">
              <VideoBox videoShow={userVideo} guest={true} isLogin={true} />
              <VideoBox videoShow={myVideo} />
            </Stack>
            <ChatBox chat={"data"} />
          </Stack>
        </Col>
      </Row>

      <PremiumModal show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  );
}
