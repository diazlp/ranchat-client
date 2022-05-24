import { useContext, useEffect, useState } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";

import ChatBox from "../components/Chat/ChatOnVideo/ChatBox";
import MainHeaders from "../components/Headers/MainHeaders";
import Menus from "../components/SidebarMenus/Menus";
import VideoBox from "../components/VideoPreview/VideoBox";
import PremiumModal from "../components/Premium/PremiumModals";
import { SocketContext } from "../context/SocketContext";

export default function HomePage() {
  const [modalShow, setModalShow] = useState(false);
  // const [guest, setGuest] = useState(true);
  const [loginStatus, setLoginStatus] = useState(false);
  const [premium, setPremium] = useState(false);
  const { myVideo, userVideo } = useContext(SocketContext);

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setLoginStatus(true);
    }

    if (localStorage.getItem("isPremium") === "true") {
      setPremium(true);
    }
  }, [loginStatus]);

  const premiumButtonHandler = () => {
    if (
      localStorage.getItem("access_token") &&
      localStorage.getItem("isPremium") === "false"
    ) {
      setModalShow(true);
    }
  };

  return (
    <Container fluid>
      <Row className="vh-100">
        <Menus isLogin={loginStatus} />
        <Col>
          <MainHeaders
            isLogin={loginStatus}
            premium={premium}
            modalShow={premiumButtonHandler}
          />
          <Stack className="mx-1" gap={2}>
            <Stack direction="horizontal" gap={2} className="playground">
              <VideoBox
                videoShow={userVideo}
                guest={true}
                isLogin={loginStatus}
              />
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
