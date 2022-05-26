import { Col, Row, Stack, Button } from "react-bootstrap";
import { getUser } from "../../../actions/userAction";
import { useEffect, useState } from "react";

import Avatar from "../../Avatar/Avatar";

export default function ChatBubble2({
  from,
  message,
  time,
  sender,
  image,
  type,
}) {
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
                    {type === "image" && (
                      <img src={image} className="image-message" />
                    )}
                    {type === "text" && (
                      <p className="m-0 p-1 chat-message">{message}</p>
                    )}
                    {type === "location" && (
                      <a
                        href={message}
                        target="_blank"
                        style={{
                          color: "white",
                          textDecoration: "none",
                        }}
                      >
                        <Stack className="text-center p-2 gap-3">
                          <img
                            src="https://i.ibb.co/pZM4ZS8/map.jpg"
                            alt="my-location"
                            className="image-location mt-2"
                          />
                          <p className="p-0 m-0">
                            <i className="fa-solid fa-location-crosshairs me-2"></i>
                            <strong>See My Location!</strong>
                          </p>
                        </Stack>
                      </a>
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
                    {type === "image" && (
                      <img src={image} className="image-message" />
                    )}
                    {type === "text" && (
                      <p className="m-0 p-1 chat-message">{message}</p>
                    )}
                    {type === "location" && (
                      <a
                        href={message}
                        target="_blank"
                        style={{
                          color: "white",
                          textDecoration: "none",
                        }}
                      >
                        <img
                          src="https://cdn.pixabay.com/photo/2016/03/22/04/23/map-1272165_960_720.png"
                          alt="my-location"
                          className="image-location"
                        />
                      </a>
                    )}
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
