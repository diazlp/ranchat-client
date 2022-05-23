import { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io.connect(
  process.env.NODE_ENV === "production"
    ? "https://ranchat-app.herokuapp.com"
    : "http://localhost:4001"
);

export default function HomePage() {
  const [room, setRoom] = useState("");

  const [message, setMessage] = useState("");

  // /* DIBAWAH INI ADALAH CODINGAN DIAZ */
  //   const [myMessages, setMyMessages] = useState([]);
  //   const [messageFromOther, setMessageFromOther] = useState([]);

  //   const sendMessage = async () => {
  //     socket.emit("send_message", { message, room });
  //     setMyMessages([...myMessages, message]);
  //   };

  //   useEffect(() => {
  //     socket.on("receive_message", (data) => {
  //       // console.log(data, "<<<ini dari sebelah");
  //       setMessageFromOther([...messageFromOther, data.message]);
  //       console.log(messageFromOther);
  //     });
  //   }, [socket, messageFromOther]);

  ////////////////////////////

  const [messageList, setMessageList] = useState([]);
  const [username, setUsername] = useState("");

  const sendMessage = async () => {
    socket.emit("send_message", { username, message, room });
    setMessageList([...messageList, { sender: "you", message }]);
  };

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      // console.log(data, "<<<ini dari sebelah");
      let obj = {
        sender: data.username,
        message: data.message,
      };
      setMessageList([...messageList, obj]);
    });
  }, [socket, messageList]);

  /* BELUM ADA GUNANYA */
  const findStrangerHandler = async () => {
    console.log("gaada routernya sob");
  };

  return (
    <>
      <div
        style={{
          marginBottom: 10,
        }}
      >
        <input
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          placeholder="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>send message</button>
        <br />
        <input
          placeholder="room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <button onClick={joinRoom}>Join room</button>
      </div>

      {messageList.map((data, i) => {
        return (
          <div key={i}>
            <p style={{ color: "red" }}>{data.sender}</p>
            <p>{data.message}</p>
          </div>
        );
      })}

      <button onClick={findStrangerHandler}>Find stranger</button>
    </>
  );
}
