import { Col, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import SidebarHeader from "../Headers/SidebarHeaders";

export default function SidebarProfile({ premium }) {
  const profileMenus = [
    {
      id: 1,
      text: "Profile Page",
      page: "detail",
    },
    {
      id: 2,
      text: "Edit Profile",
      page: "edit",
    },
    {
      id: 3,
      text: "Password and Security",
      page: "security",
    },
  ];

  return (
    <Col className="sidebar-profile col-3">
      <SidebarHeader text="Profile" premium={premium} color="white" />
      <Nav defaultActiveKey="/home" className="flex-column">
        {profileMenus.map((el) => (
          <Link to={el.page} className="nav-link mb-3 p-3" key={el.id}>
            {el.text}
          </Link>
        ))}
      </Nav>
    </Col>
  );
}
