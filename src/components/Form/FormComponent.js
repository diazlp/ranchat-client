import { Form, Button } from "react-bootstrap";
import InputComponent from "./InputComponent";
import { getToken, registerUser } from "../../actions/userAction";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function FormComponent({ type }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [status, setStatus] = useState(false);

  const navigate = useNavigate();

  const login = () => {
    if (status) {
      localStorage.setItem("email_login", email);
    } else {
      if (localStorage.getItem("email_login")) {
        localStorage.removeItem("email_login");
      }
      setStatus(false);
    }

    getToken({ email, password })
      .then(() => {
        navigate("/chat");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const register = () => {
    registerUser({ email, password, fullname: `${firstname} ${lastname}` })
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const inputHandler = (value, name) => {
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "firstname":
        setFirstname(value);
        break;
      case "lastname":
        setLastname(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    switch (type) {
      case "login":
        if (localStorage.getItem("email_login")) {
          setEmail(localStorage.getItem("email_login"));
        }
        break;
      case "register":
        setEmail("");
        setPassword("");
        setFirstname("");
        setLastname("");
        break;
      default:
        break;
    }
  }, [type]);

  useEffect(() => {
    switch (type) {
      case "login":
        if (localStorage.getItem("email_login")) {
          setEmail(localStorage.getItem("email_login"));
        }
        break;
      case "register":
        setEmail("");
        setPassword("");
        setFirstname("");
        setLastname("");
        break;
      default:
        break;
    }
  }, [type]);

  const input = (type) => {
    switch (type) {
      case "login":
        return [
          {
            type: "email",
            placeholder: "Enter your email",
            name: "email",
            value: email,
            require: true,
          },
          {
            type: "password",
            placeholder: "Enter your password",
            value: password,
            name: "password",
            require: true,
          },
        ];
      case "register":
        return [
          {
            type: "text",
            placeholder: "Enter your FirstName",
            name: "firstname",
            value: firstname,
            require: true,
          },
          {
            type: "text",
            placeholder: "Enter your Lastname",
            name: "lastname",
            value: lastname,
            require: true,
          },
          {
            type: "email",
            placeholder: "Enter your Email",
            name: "email",
            value: email,
            require: true,
          },
          {
            type: "password",
            placeholder: "Enter your Password",
            name: "password",
            value: password,
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
          value={el.value}
          name={el.name}
          inputHandler={inputHandler}
          key={el.placeholder}
        />
      ))}
      {type === "login" && (
        <Form.Group className="mb-5" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            defaultChecked={status ? true : false}
            label="Check me out"
            onChange={(e) => {
              const value = e.target.checked;
              setStatus(value);
            }}
          />
        </Form.Group>
      )}
      {type === "login" ? (
        <Button
          variant="primary"
          type="submit"
          className="px-5 mb-4"
          onClick={(e) => {
            e.preventDefault();
            login();
          }}
        >
          Login
        </Button>
      ) : (
        <Button
          variant="primary"
          type="submit"
          className="px-5 mb-4"
          onClick={(e) => {
            e.preventDefault();
            register();
          }}
        >
          Register
        </Button>
      )}
    </Form>
  );
}
