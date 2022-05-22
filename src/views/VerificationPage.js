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
              We have sent an email to cs.nomads@gmail.com. Please click the
              link in the email to verify your account or enter the email
              activation code below.
            </p>
            <FormComponent type="verif" placement="verif" />
          </Row>
        </Col>
        <OnBoarding />
      </Row>
    </Container>
  );
}
