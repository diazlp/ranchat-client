import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import OnBoarding from "../components/OnBoarding/OnBoarding";
import FormComponent from "../components/Form/FormComponent";
import Headline from "../components/Text/Headline";
import Menus from "../components/SidebarMenus/Menus";

export default function RegisterPage(params) {
  return (
    <Container fluid>
      <Row className="vh-100">
        <Menus />
        <Col className="d-flex align-items-center justify-content-center">
          <Row id="register-form">
            <Headline text="Register" />
            <FormComponent type="register" />
            <p>
              Don't have an account? <Link to="/login">Login</Link>
            </p>
          </Row>
        </Col>
        <Col className="bg-secondary d-flex align-items-center justify-content-center">
          <OnBoarding />
        </Col>
      </Row>
    </Container>
  );
}
