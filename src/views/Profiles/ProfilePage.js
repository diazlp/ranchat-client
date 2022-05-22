import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import Menus from "../../components/SidebarMenus/Menus";
import SidebarProfile from "../../components/SidebarMenus/SidebarProfile";

export default function ProfilePage() {
  const login = true;
  const premium = true;

  return (
    <Container fluid>
      <Row className="vh-100">
        <Menus isLogin={login} />
        <SidebarProfile premium={premium} />
        <Col>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}
