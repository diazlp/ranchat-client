import { Col, Nav, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

import ButtonCTARun from "../Button/ButtonCTARan";
import Icon from "../Icon/Icon";

export default function Menus({ isLogin }) {
  const menus = [
    {
      icon: "message",
      to: "/chat",
      disabled: isLogin,
    },
    {
      icon: "user-group",
      to: "/profile/detail",
      disabled: isLogin,
    },
    {
      icon: "gear",
      to: "#",
      disabled: false,
    },
  ];

  return (
    <Col className="col-1 sidebar-menus d-flex align-items-center justify-content-center">
      <Nav defaultActiveKey="/home" className="flex-column">
        <ButtonCTARun />
        <Stack gap={5} className="my-auto text-center menus-sidebar-icon">
          {menus.map((el, i) => (
            <Link
              key={i}
              to={el.to}
              className={
                el.disabled === true ? "nav-link" : "nav-link disabled"
              }
            >
              <Icon
                name={el.icon}
                placement={el.disabled === true ? "menus" : "disabled"}
              />
            </Link>
          ))}
        </Stack>
      </Nav>
    </Col>
  );
}
