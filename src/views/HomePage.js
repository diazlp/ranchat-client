import { useContext, useEffect, useState } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { SocketContext } from "../context/SocketContext";

import ChatBox from "../components/Chat/ChatOnVideo/ChatBox";
import MainHeaders from "../components/Headers/MainHeaders";
import Menus from "../components/SidebarMenus/Menus";
import VideoBox from "../components/VideoPreview/VideoBox";
import PremiumModal from "../components/Premium/PremiumModals";

import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [modalShow, setModalShow] = useState(false);
  const [premium, setPremium] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);
  const { myVideo, userVideo } = useContext(SocketContext);

  const navigate = useNavigate();

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

  const premiumButtonHandler = () => {
    if (localStorage.getItem("isVerified") === "false") {
      navigate("/verification");
    } else {
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
            setModalShow={premiumButtonHandler}
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
            <ChatBox />
          </Stack>
        </Col>
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
