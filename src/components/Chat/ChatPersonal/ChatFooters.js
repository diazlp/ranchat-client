import { Col, Container, Form, Row, Stack } from "react-bootstrap";
import InputComponent from "../../Form/InputComponent";
import Icon from "../../Icon/Icon";
import IconAuthen from "../../Icon/IconAuthen";
import { useSelector, useDispatch } from "react-redux";
import { useState, useContext } from "react";
import { sendMessage, sendImage } from "../../../actions/chatAction";
import { SocketContext } from "../../../context/SocketContext";

export default function ChatFooter({ level }) {
  const [position, setPosition] = useState("");

  console.log(level, "<<<<<");

  const authLvl = (lvl) => (lvl > 4 ? true : false);
  const { socket, profile } = useContext(SocketContext);
  // const [arrivalMessage, setArrivalMessage] = useState(null);

  const [message, setMessage] = useState("");
  const { friendRoom, chatList } = useSelector((state) => state.chat);
  // const { profile } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const sendMesssage = () => {
    if (message && friendRoom) {
      const chatListById = chatList.filter((list) => list._id === friendRoom);
      const receiverId = chatListById[0].members.find(
        (member) => member !== profile.UserId
      );

      dispatch(sendMessage({ message, friendRoom, id: profile.UserId }));
      socket.emit("sendMessage", {
        friendRoom,
        senderId: profile.UserId,
        receiverId,
        text: message,
        type: "text",
      });
      setMessage("");
    }
  };

  const sendingImage = (e) => {
    if (e.target.files && friendRoom) {
      const image = e.target.files[0];
      const chatListById = chatList.filter((list) => list._id === friendRoom);
      const receiverId = chatListById[0].members.find(
        (member) => member !== profile.UserId
      );
      const formData = new FormData();
      console.log("image: ", image);
      formData.append("image", image);
      formData.append("friendRoom", friendRoom);
      formData.append("id", profile.UserId);

      dispatch(sendImage({ formData, id: profile.UserId })).then(({ data }) => {
        console.log(data);
        socket.emit("sendMessage", {
          friendRoom,
          senderId: profile.UserId,
          receiverId,
          text: null,
          photo: data.imgUrl,
          type: "image",
        });
      });
    }
  };

  const sendLocation = () => {
    const chatListById = chatList.filter((list) => list._id === friendRoom);

    const receiverId = chatListById[0].members.find(
      (member) => member !== profile.UserId
    );

    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        dispatch(
          sendMessage({
            location: `https://www.google.com/maps/@${latitude},${longitude},30z`,
            friendRoom,
            id: profile.UserId,
          })
        );

        socket.emit("sendMessage", {
          friendRoom,
          senderId: profile.UserId,
          receiverId,
          text: `https://www.google.com/maps/@${latitude},${longitude},30z`,
          type: "location",
        });
        // setPosition();
      }
    );
  };

  const inputMessage = (value) => {
    setMessage(value);
  };
  return (
    <Container fluid>
      <Row className="sticky-bottom">
        <Col>
          <InputComponent
            type="text"
            placement="friend-chat"
            chat
            value={message}
            inputMessage={inputMessage}
            sendMesssage={sendMesssage}
          />
        </Col>
        <Col className="col-2 d-flex justify-content-center">
          <Stack direction="horizontal" gap={4}>
            {/* <Icon name="note-sticky" placement="send-gif clickable" /> */}
            <IconAuthen
              icon="image"
              auth={authLvl(level)}
              action={sendingImage}
            />
            <IconAuthen
              icon="street-view"
              auth={authLvl(level)}
              action={sendLocation}
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}
