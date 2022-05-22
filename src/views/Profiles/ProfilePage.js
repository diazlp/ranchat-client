import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import Menus from "../../components/SidebarMenus/Menus";
import SidebarProfile from "../../components/SidebarMenus/SidebarProfile";
import SidebarFriend from "../../components/SidebarMenus/SidebarFriend";

export default function ProfilePage() {
  const login = true;
  const premium = true;
  const data = "data";

  return (
    <Container fluid>
      <Row className="vh-100">
        <Menus isLogin={login} />
        <SidebarProfile premium={premium} />
        <Col>
          <Outlet />
        </Col>
        <SidebarFriend data={data} />
      </Row>
    </Container>
  );
}
