import { Col, Container, Nav, Navbar, Row, Stack } from "react-bootstrap";
import ButtonPrimary from "../Button/ButtonPrimary";
import Icon from "../Icon/Icon";

export default function MainHeaders(params) {
  return (
    <Row className="bg-ligth main-headers d-flex align-items-center">
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
          <Nav className="me-auto">
            <Stack direction="horizontal" gap={2}>
              <ButtonPrimary
                text="login"
                page="login"
                className="button-sign"
              />
              <ButtonPrimary
                text="register"
                page="register"
                className="button-sign"
              />
            </Stack>
          </Nav>
          <Stack direction="horizontal" gap={3}>
            <div className="avatars">
              <img
                class="item"
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt=""
              />
              <img
                class="item"
                src="https://randomuser.me/api/portraits/men/25.jpg"
                alt=""
              />
              <img
                class="item"
                src="https://randomuser.me/api/portraits/women/25.jpg"
                alt=""
              />
              <img
                class="item"
                src="https://randomuser.me/api/portraits/men/55.jpg"
                alt=""
              />
              <img
                class="item"
                src="https://via.placeholder.com/500/09f/fff.png"
                alt=""
              />
            </div>
            <h1 className="m-0 total-user-online">1.000.000</h1>
            <Icon name="circle" from="online" />
            <h3 className="m-0 subheading">Online User</h3>
          </Stack>
        </Navbar.Collapse>
      </Navbar>
    </Row>
  );
}
