import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import io from "socket.io-client";
import axios from "axios";

const socket = io.connect("http://localhost:4001/chat");

function HomePage() {
  const [room, setRoom] = useState("");

  const [message, setMessage] = useState("");
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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
