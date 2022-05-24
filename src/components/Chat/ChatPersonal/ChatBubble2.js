import { Col, Row, Stack } from "react-bootstrap";
import { getUser } from "../../../actions/userAction";
import { useEffect, useState } from "react";

import Avatar from "../../Avatar/Avatar";

export default function ChatBubble2({ from, message, time, sender, image }) {
  const [user, setUser] = useState("");
  useEffect(() => {
    getUser(sender).then(({ data }) => {
      setUser(data);
    });
  }, [message]);
  if (from === "you") {
    return (
      <>
        {user && (
          <Row className="mt-auto w-50 ms-auto m-0">
            <Col className="d-flex justify-content-end mb-2">
              <Stack direction="horizontal">
                <Stack className="me-3" gap={2}>
                  <div className="cb1 chat-you px-3 py-2 d-flex align-items-center">
                    {image && <img src={image} className="image-message" />}
                    {!image && (
                      <p className="m-0 p-1 chat-message">{message}</p>
                    )}
                  </div>
                  <p className="align-self-end chat-time">{time}</p>
                </Stack>
                <div className="align-self-start">
                  <Avatar
                    avatar={user.Profile.profilePicture}
                    placement="cb2"
                    size="sm"
                  />
                </div>
              </Stack>
            </Col>
          </Row>
        )}
      </>
    );
  } else if (from === "guest") {
    return (
      <>
        {user && (
          <Row className="mt-auto w-50 me-auto">
            <Col className="d-flex justify-content-start mb-2">
              <Stack direction="horizontal">
                <div className="align-self-start">
                  <Avatar
                    avatar={user.Profile.profilePicture}
                    placement="cb2"
                    size="sm"
                  />
                </div>
                <Stack className="ms-3" gap={2}>
                  <div className="cb1 chat-guest px-3 py-1 d-flex align-items-center">
                    <p className="m-0 p-1 chat-message">{message}</p>
                  </div>
                  <p className="align-self-start chat-time">{time}</p>
                </Stack>
              </Stack>
            </Col>
          </Row>
        )}
      </>
    );
  }
}
