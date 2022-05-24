import { Col, Row } from "react-bootstrap";

import Avatar from "../../Avatar/Avatar";
import TextForChat from "../../Text/TextForChat";

export default function ChatList({ name, message, image }) {
  // const messageTruncate = (message) => {
  //   let messageView = "";
  //   for (const i in message) {
  //     if (messageView.length < 20) messageView += message[i];
  //   }
  //   if (message.length >= 20) messageView += "...";
  //   return messageView;
  // };

  const usernameTruncate = (username) => {
    let usernameView = "";
    for (const i in username) {
      if (usernameView.length < 18) usernameView += username[i];
    }

    if (username.length >= 18) usernameView += "...";
    return usernameView;
  };

  return (
    <Row className="m-0 cb2 py-2">
      <Col className="col-3 text-e align-self-center">
        <Avatar avatar={image} size="md" />
      </Col>
      <Col className="col-9 text-truncate">
        <Row className="gap-2">
          <TextForChat placement="username" text={usernameTruncate(name)} />
          {/* <TextForChat placement="message" text={messageTruncate(message)} /> */}
        </Row>
      </Col>
    </Row>
  );
}
