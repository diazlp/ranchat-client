import { Form, Button } from "react-bootstrap";
import ButtonPrimary from "../Button/ButtonPrimary";
import InputComponent from "./InputComponent";
import {
  getToken,
  registerUser,
  emailVerification,
} from "../../actions/userAction";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SocketContext } from "../../context/SocketContext";

export default function FormComponent({ type }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [status, setStatus] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const { socket, setOnlineUsers } = useContext(SocketContext);
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
      .then((data) => {
        socket.emit("adduser", data.profile.id);
        socket.on("getUsers", (data) => {
          setOnlineUsers(data);
        });
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const register = () => {
    registerUser({ email, password, fullName: `${firstname} ${lastname}` })
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const verifyEmail = async () => {
    try {
      const response = await emailVerification({ verificationCode });

      if (!response) {
        throw "error";
      } else {
        localStorage.setItem("isVerified", "true");
        navigate("/chat");
      }
    } catch (err) {
      setErrorMessage(err.response?.data?.message);
    }
  };

  const submit = () => {
    switch (type) {
      case "login":
        login();
        break;
      case "register":
        register();
        break;
      case "Verify":
        verifyEmail();
        break;
      default:
        break;
    }
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
      case "verificationCode":
        setVerificationCode(value);
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
      case "Verify":
        setVerificationCode("");
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
      case "Verify":
        return [
          {
            type: "text",
            placeholder: "Verification Code",
            name: "verificationCode",
            value: verificationCode,
            require: true,
          },
        ];

      default:
        break;
    }
  };

  return (
    <Form>
      {input(type)?.map((el) => (
        <InputComponent
          type={el.type}
          placeholder={el.placeholder}
          key={el.placeholder}
          value={el.value}
          name={el.name}
          inputHandler={inputHandler}
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
      {errorMessage && (
        <div
          style={{
            color: "red",
            fontSize: "15px",
            fontWeight: "bold",
          }}
        >
          {errorMessage}
        </div>
      )}
      <ButtonPrimary
        text={type.charAt(0).toUpperCase() + type.slice(1)}
        action="LR"
        placement="sign"
        submit={submit}
      />
    </Form>
  );
}
