import { Nav, Navbar, Row, Stack } from "react-bootstrap";

import ButtonPrimary from "../Button/ButtonPrimary";
import Icon from "../Icon/Icon";

export default function MainHeaders({ isLogin, premium, setModalShow }) {
  const btnHeaders = (isLogin, premium) => {
    if (!isLogin) {
      return (
        <Stack direction="horizontal" gap={2}>
          <ButtonPrimary text="login" action="login" placement="sign" />
          <ButtonPrimary text="register" action="register" placement="sign" />
        </Stack>
      );
    } else if (!premium) {
      return (
        <ButtonPrimary
          text="Premium Now"
          action={setModalShow}
          placement="premium-cta"
          customClass="premium-btn"
        />
      );
    }
  };

  return (
    <Row className="bg-ligth headers d-flex align-items-center">
      <Navbar className="px-5">
        <Navbar.Brand href="#home">
          <img
            src="https://i.ibb.co/0FxwDHQ/Run-Chat-Transparent.png"
            alt="Run-Chat"
            width="200"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">{btnHeaders(isLogin, premium)}</Nav>
          <Stack direction="horizontal" gap={3}>
            <div className="avatars">
              <img
                className="item"
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt=""
              />
              <img
                className="item"
                src="https://randomuser.me/api/portraits/men/25.jpg"
                alt=""
              />
              <img
                className="item"
                src="https://randomuser.me/api/portraits/women/25.jpg"
                alt=""
              />
              <img
                className="item"
                src="https://randomuser.me/api/portraits/men/55.jpg"
                alt=""
              />
              <img
                className="item"
                src="https://via.placeholder.com/500/09f/fff.png"
                alt=""
              />
            </div>
            <h1 className="m-0 total-user-online">1.000.000</h1>
            <Icon name="circle" placement="online-lg" />
            <h3 className="m-0 subheading">Online User</h3>
          </Stack>
        </Navbar.Collapse>
      </Navbar>
    </Row>
  );
}
