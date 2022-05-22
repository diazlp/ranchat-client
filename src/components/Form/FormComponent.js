import { Form, Button } from "react-bootstrap";
import ButtonPrimary from "../Button/ButtonPrimary";
import InputComponent from "./InputComponent";

export default function FormComponent({ type }) {
  const input = (type) => {
    switch (type) {
      case "login":
        return [
          {
            type: "email",
            placeholder: "Enter your email",
            require: true,
          },
          {
            type: "password",
            placeholder: "Enter your password",
            require: true,
          },
        ];
      case "register":
        return [
          {
            type: "text",
            placeholder: "Enter your Firstname",
            require: true,
          },
          {
            type: "text",
            placeholder: "Enter your Lastname",
            require: true,
          },
          {
            type: "email",
            placeholder: "Enter your Email",
            require: true,
          },
          {
            type: "password",
            placeholder: "Enter your Password",
            require: true,
          },
        ];
    }
  };

  return (
    <Form>
      {input(type).map((el) => (
        <InputComponent
          type={el.type}
          placeholder={el.placeholder}
          key={el.placeholder}
        />
      ))}
      {type === "register" && (
        <Form.Group className="mb-5" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Saya setuju dengan syarat & ketentuan yang berlaku"
          />
        </Form.Group>
      )}
      <ButtonPrimary text={type} action="/" placement="sign" />
    </Form>
  );
}
