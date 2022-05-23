import { useState } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";

import ChatBox from "../components/Chat/ChatOnVideo/ChatBox";
import MainHeaders from "../components/Headers/MainHeaders";
import Menus from "../components/SidebarMenus/Menus";
import VideoBox from "../components/VideoPreview/VideoBox";
import PremiumModal from "../components/Premium/PremiumModals";

export default function HomePage() {
  const [modalShow, setModalShow] = useState(false);
  const [guest, setGuest] = useState(true);
  const [found, setFound] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  const premium = false;

  return (
    <Container fluid>
      <Row className="vh-100">
        <Menus isLogin={isLogin} />
        <Col>
          <MainHeaders
            isLogin={isLogin}
            premium={premium}
            setModalShow={setModalShow}
          />
          <Stack className="mx-1" gap={2}>
            <Stack direction="horizontal" gap={2} className="playground">
              <VideoBox guest={guest} isLogin={isLogin} found={found} />
              {/* <VideoBox /> */}
            </Stack>
            <ChatBox chat={"data"} />
          </Stack>
        </Col>
      </Row>

      <PremiumModal show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  );
}
