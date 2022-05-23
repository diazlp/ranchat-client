import { Col, Row } from "react-bootstrap";
import ChatBubble2 from "./ChatBubble2";
import { useSelector, useDispatch } from "react-redux";
import { format } from "timeago.js";
import { useEffect, useState, useContext } from "react";
import { SocketContext } from "../../../context/SocketContext";

export default function ChatArea({ data }) {
  const { socket } = useContext(SocketContext);
  const { friendRoom } = useSelector((state) => state.chat);
  const [friendrommid, setFirendRoomId] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [messages, setMessages] = useState([]);

  const { chatHistory } = useSelector((state) => state.chat);

  useEffect(() => {
    socket.on("getMessage", (data) => {
      setFirendRoomId(data.friendRoom);
      setArrivalMessage({
        fromSelf: "guest",
        message: data.text,
        senderId: data.senderId,
        time: Date.now(),
        photo: "asasaswewvdaccqwqc",
      });
    });
  }, []);

  useEffect(() => {
    if (friendrommid === friendRoom) {
      arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
    }
  }, [arrivalMessage]);

  useEffect(() => {
    setMessages(chatHistory);
  }, [chatHistory]);
  return (
    <Row className="chat-area d-flex align-items-end p-4">
      <Col>
        {messages.length > 0 &&
          messages.map((chat) => (
            <ChatBubble2
              from={chat.fromSelf}
              message={chat.message}
              time={format(chat.time)}
              sender={chat.senderId}
            />
          ))}
      </Col>
    </Row>
  );
}
