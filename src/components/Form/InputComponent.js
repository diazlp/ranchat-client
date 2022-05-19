import { Form } from "react-bootstrap";

export default function InputComponent({ type, placeholder }) {
  return (
    <Form.Control type={type} placeholder={placeholder} className="mb-3" />
  );
}
