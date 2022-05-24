import { createContext, useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";
import Peer from "simple-peer";
import { useSelector, useDispatch } from "react-redux";
import {
  createGuest,
  deleteGuest,
  fetchRoomDetail,
  receiveMessage,
} from "../actions/guestAction";
import { sendMessage } from "../actions/guestAction";
const SocketContext = createContext();

const socket = io(
  process.env.NODE_ENV === "production"
    ? "https://ranchat-app.herokuapp.com"
    : "http://localhost:4001"
);

const ContextProvider = ({ children }) => {
  const [stream, setStream] = useState(null);
  const [me, setMe] = useState("");
  const [call, setCall] = useState({});
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const guest = useSelector((state) => state.guest.guest);
  const roomId = useSelector((state) => state.guest.room);
  const messageHistory = useSelector((state) => state.guest.messageHistory);

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);

        myVideo.current.srcObject = currentStream;
      });

    socket.on("me", (id) => {
      setMe(id);
      dispatch(createGuest(id));
    });

    socket.on("calluser", ({ from, name: callerName, signal }) => {
      setCall({ isReceivedCall: true, from, name: callerName, signal });
    });

    // socket.on("receiveMessageFromVideo", (data) => {
    //   console.log(data);
    //   dispatch(receiveMessage(data));
    // });
  }, []);

  useEffect(() => {
    socket.on("receiveMessageFromVideo", (data) => {
      dispatch(receiveMessage(data));
    });
    return () => socket.off("receiveMessageFromVideo");
  }, [messageHistory]);

  useEffect(() => {
    socket.on("disconnected", () => {
      dispatch(deleteGuest(guest.mongoId));
    });
  }, [socket]);

  const answerCall = () => {
    setCallAccepted(true);

    // const peer = new Peer({ initiator: false, trickle: false, stream });
    const peer = new Peer({
      config: {
        iceServers: [
          { url: "stun:stun.l.google.com:19302" },
          {
            url: "turn:numb.viagenie.ca",
            credential: "muazkh",
            username: "webrtc@live.com",
          },
        ],
      },
      initiator: false,
      trickle: false,
      stream,
    });

    peer.on("signal", (data) => {
      socket.emit("answercall", { signal: data, to: call.from });
    });
    dispatch(fetchRoomDetail(roomId)); //room id di line 26

    peer.on("stream", (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
  };
  const callUser = (id) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });
    // const peer = new Peer({
    //   config: {
    //     iceServers: [
    //       { url: "stun:stun.l.google.com:19302" },
    //       {
    //         url: "turn:numb.viagenie.ca",
    //         credential: "muazkh",
    //         username: "webrtc@live.com",
    //       },
    //     ],
    //   },
    //   initiator: false,
    //   trickle: false,
    //   stream,
    // });

    peer.on("signal", (data) => {
      socket.emit("calluser", {
        userToCall: id,
        signalData: data,
        from: me,
        name,
      });
    });

    peer.on("stream", (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    socket.on("callaccepted", (signal) => {
      setCallAccepted(true);

      peer.signal(signal);
    });

    connectionRef.current = peer;
  };
  const leaveCall = () => {
    setCallEnded(true);
    connectionRef.current.destroy();

    window.location.reload();
  };

  const socketSendMessage = (payload) => {
    dispatch(sendMessage(payload));
    socket.emit("sendMessageFromVideo", payload);
  };

  return (
    <SocketContext.Provider
      value={{
        call,
        callAccepted,
        myVideo,
        userVideo,
        stream,
        name,
        setName,
        callEnded,
        me,
        callUser,
        leaveCall,
        answerCall,
        setCallAccepted,
        socket,
        socketSendMessage,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { ContextProvider, SocketContext };
