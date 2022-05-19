import { Form, Button } from "react-bootstrap";
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

      default:
        break;
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
      {type === "login" && (
        <Form.Group className="mb-5" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
      )}
      <Button variant="primary" type="submit" className="px-5 mb-4">
        Register
      </Button>
    </Form>
  );
}
