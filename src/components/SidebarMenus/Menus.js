import { Button, Col, Nav, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import ButtonCTARun from "../Button/ButtonCTARan";
import Icon from "../Icon/Icon";

export default function Menus(params) {
  const menus = [
    {
      icon: "message",
      to: "/chat",
      disabled: false,
    },
    {
      icon: "user-group",
      to: "/profile",
      disabled: false,
    },
    {
      icon: "gear",
      to: "#",
      disabled: true,
    },
  ];

  return (
    <Col className="col-1 sidebar-menus d-flex align-items-center justify-content-center">
      <Nav defaultActiveKey="/home" className="flex-column">
        <ButtonCTARun />
        <Stack gap={5} className="my-auto text-center menus-sidebar-icon">
          {menus.map((el) => (
            <Link
              to={el.to}
              className={
                el.disabled === true ? "nav-link disabled" : "nav-link"
              }
            >
              <Icon name={el.icon} placement="menus" />
            </Link>
          ))}
        </Stack>
      </Nav>
    </Col>
  );
}
