import { Col, Container, Row, Stack } from "react-bootstrap";
import ChatBox from "../components/Chat/ChatOnVideo/ChatBox";
import MainHeaders from "../components/Headers/MainHeaders";
import Menus from "../components/SidebarMenus/Menus";
import VideoBox from "../components/VideoPreview/VideoBox";

export default function HomePage(params) {

  const login = true;
  const premium = false;
  const found = true;

  return (
    <Container fluid>
      <Row className="vh-100">
        <Menus isLogin={login} />
        <Col>
          <MainHeaders isLogin={login} premium={premium} />
          <Stack className="mx-1" gap={2}>
            <Stack direction="horizontal" gap={2} className="playground">
              <VideoBox guest={true} isLogin={login} found={found} />
              <VideoBox />
            </Stack>
            <ChatBox chat={"data"} />
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}
