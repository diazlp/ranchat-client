import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import OnBoarding from "../components/OnBoarding/OnBoarding";
import FormComponent from "../components/Form/FormComponent";
import Headline from "../components/Text/Headline";
import Menus from "../components/SidebarMenus/Menus";

export default function LoginPage(params) {
  return (
    <Container fluid>
      <Row className="vh-100">
        <Menus />
        <Col className="d-flex align-items-center justify-content-center">
          <Row id="login-form">
            <Headline text="Login" />
            <FormComponent type="login" />
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </Row>
        </Col>
        <OnBoarding />
      </Row>
    </Container>
  );
}
