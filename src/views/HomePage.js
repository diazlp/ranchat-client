import { useState } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";

import ChatBox from "../components/Chat/ChatOnVideo/ChatBox";
import MainHeaders from "../components/Headers/MainHeaders";
import Menus from "../components/SidebarMenus/Menus";
import VideoBox from "../components/VideoPreview/VideoBox";
import PremiumModal from "../components/Premium/PremiumModals";
import { useEffect } from "react";

export default function HomePage() {
  const [modalShow, setModalShow] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);

  const premium = false;
  const found = false;

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setLoginStatus(true);
    }
  }, []);
  return (
    <Container fluid>
      <Row className="vh-100">
        <Menus isLogin={loginStatus} />
        <Col>
          <MainHeaders
            isLogin={loginStatus}
            premium={premium}
            setModalShow={setModalShow}
          />
          <Stack className="mx-1" gap={2}>
            <Stack direction="horizontal" gap={2} className="playground">
              <VideoBox guest={true} isLogin={loginStatus} found={found} />
              <VideoBox />
            </Stack>
            <ChatBox chat={"data"} />
          </Stack>
        </Col>
      </Row>

      <PremiumModal show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  );
}
