import { Col, Container, Row } from "react-bootstrap";

import OnBoarding from "../components/OnBoarding/OnBoarding";
import FormComponent from "../components/Form/FormComponent";
import Headline from "../components/Text/Headline";
import Menus from "../components/SidebarMenus/Menus";

export default function VerificationPage() {
  return (
    <Container fluid>
      <Row className="vh-100 text-center">
        <Menus />
        <Col className="d-flex align-items-center justify-content-center">
          <Row id="login-form">
            <Headline text="Check your Email!" />
            <p>
              We have sent an email to{" "}
              <strong>{localStorage.getItem("email")}</strong>. Please click the
              link in the email to verify your account or enter the email
              activation code below.
            </p>
            <FormComponent type="Verify" />
          </Row>
        </Col>
        <OnBoarding />
      </Row>
    </Container>
  );
}
