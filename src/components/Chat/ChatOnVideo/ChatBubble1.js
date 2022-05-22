import { Col, Stack } from "react-bootstrap";
import TextForChat from "../../Text/TextForChat";

export default function ChatBubble({ who, message, time, username }) {
  const usernameTruncate = (username) => {
    let usernameView = "";
    for (const i in username) {
      if (usernameView.length < 18) usernameView += username[i];
    }

    if (username.length >= 18) usernameView += "...";
    return usernameView;
  };

  return (
    <Col className="my-2">
      <Stack gap={3}>
        <div>
          <TextForChat
            placement="username"
            from={who}
            text={usernameTruncate(username)}
          />
          <TextForChat placement="message" text={message} />
        </div>
        <TextForChat placement="time" text={time} />
      </Stack>
    </Col>
  );
}
