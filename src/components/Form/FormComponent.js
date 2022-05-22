import { useEffect, useState } from "react";
import { Form, Stack } from "react-bootstrap";

import ButtonPrimary from "../Button/ButtonPrimary";
import InputComponent from "./InputComponent";

export default function FormComponent({ type, placement }) {
  const [counter, setCounter] = useState(60);
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
      case "verif":
        return [
          {
            type: "text",
            require: true,
          },
        ];
    }
  };

  useEffect(() => {
    if (counter < 61) {
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }
  }, [counter]);

  if (placement === "verif") {
    return (
      <Form>
        <Stack gap={3}>
          <Stack direction="horizontal" gap={3} className="mt-4">
            <Form.Control type="text" />
            <Form.Control type="text" />
            <Form.Control type="text" />
            <Form.Control type="text" />
            <Form.Control type="text" />
          </Stack>
          <p>00:{counter < 10 ? `0${counter}` : counter}</p>
          <Stack
            direction="horizontal"
            gap={2}
            className="d-flex justify-content-center mt-4"
          >
            <ButtonPrimary text="Verifcation" placement="verif" action="/" />
            <ButtonPrimary
              text="Send Again"
              placement="send-verif"
              action={setCounter}
            />
          </Stack>
        </Stack>
      </Form>
    );
  } else {
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
        <ButtonPrimary type="submit" text={type} action="/" placement="sign" />
      </Form>
    );
  }
}
