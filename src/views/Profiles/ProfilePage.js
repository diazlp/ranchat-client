import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import Menus from "../../components/SidebarMenus/Menus";
import SidebarProfile from "../../components/SidebarMenus/SidebarProfile";
import SidebarFriend from "../../components/SidebarMenus/SidebarFriend";

export default function ProfilePage() {
  const [premium, setPremium] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);
  const data = "data";

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

  return (
    <Container fluid>
      <Row className="vh-100">
        <Menus isLogin={loginStatus} />
        <SidebarProfile premium={premium} />
        <Col>
          <Outlet />
        </Col>
        <SidebarFriend data={data} />
      </Row>
    </Container>
  );
}
