import { Form } from "react-bootstrap";

export default function InputComponent({
  type,
  placeholder,
  inputHandler,
  value,
  name,
}) {
  return (
    <Form.Control
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        const value = e.target.value;
        inputHandler(value, name);
      }}
      className="mb-3"
    />
  );
}
