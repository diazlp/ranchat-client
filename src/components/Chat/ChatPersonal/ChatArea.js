import { Col, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { format } from "timeago.js";
import { useEffect, useState, useContext } from "react";
import { SocketContext } from "../../../context/SocketContext";
import { getChatList } from "../../../actions/chatAction";

import ScrollToBottom from "react-scroll-to-bottom";
import ChatBubble2 from "./ChatBubble2";

export default function ChatArea() {
  const dispatch = useDispatch();

  const { socket } = useContext(SocketContext);
  const { friendRoom } = useSelector((state) => state.chat);
  const { chatHistory } = useSelector((state) => state.chat);
  const [friendrommid, setFirendRoomId] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("getMessage", (data) => {
      setFirendRoomId(data.friendRoom);
      setArrivalMessage({
        fromSelf: "guest",
        message: data.text,
        senderId: data.senderId,
        time: Date.now(),
        // photo: "asasaswewvdaccqwqc",
      });
      if (data.friendRoom !== friendRoom) {
        dispatch(getChatList());
      }
    });
  }, []);

  useEffect(() => {
    if (friendrommid === friendRoom) {
      arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
    }
  }, [arrivalMessage]);

  useEffect(() => {
    setMessages(chatHistory);
    console.log(window.scrollTo(0, 200));
  }, [chatHistory]);
  return (
    <Row className="chat-area">
      <ScrollToBottom className="chat-area">
        <Col>
          {messages.length > 0 &&
            messages.map((chat, i) => (
              <ChatBubble2
                key={i}
                from={chat.fromSelf}
                message={chat.message}
                time={format(chat.time)}
                sender={chat.senderId}
                image="https://dummyimage.com/600x400/000/fff"
              />
            ))}
        </Col>
      </ScrollToBottom>
    </Row>
  );
}
