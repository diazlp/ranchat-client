import { Col, Container, Row, Stack } from "react-bootstrap";
import ChatBox from "../components/Chat/ChatOnVideo/ChatBox";
import MainHeaders from "../components/Headers/MainHeaders";
import Menus from "../components/SidebarMenus/Menus";
import VideoBox from "../components/VideoPreview/VideoBox";

export default function HomePage(params) {
  return (
    <Container fluid>
      <Row className="vh-100">
        <Menus />
        <Col>
          <MainHeaders />
          <Stack className="mx-1" gap={2}>
            <Stack direction="horizontal" gap={2} className="playground">
              <VideoBox guest={true} />
              <VideoBox />
            </Stack>
            <ChatBox />
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}
