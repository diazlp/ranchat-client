import { Button, Col, Row, Stack } from "react-bootstrap";

import SidebarHeaders from "../Headers/SidebarHeaders";
import Icon from "../Icon/Icon";
import ListFriend from "./ListFriend";
import InputComponent from "../Form/InputComponent";
import TabFilterStatus from "../Friends/TabFilterStatus";
import { getFriend } from "../../actions/friendAction";
import { useEffect, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SocketContext } from "../../context/SocketContext";

export default function SidebarFriend({ data }) {
  const friend = 100;
  const online = 6;
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);

  const { friendList } = useSelector((state) => state.friend);
  const { socket } = useContext(SocketContext);
  const { profile } = useSelector((state) => state.user);
  const disptach = useDispatch();

  useEffect(() => {
    if (profile) {
      socket.emit("adduser", profile.UserId);

      socket.on("getUsers", (data) => {
        setOnlineUsers(data);
      });
    }
  }, [profile]);

  useEffect(() => {
    disptach(getFriend());
  }, []);
  useEffect(() => {
    setOnlineFriends(
      friendList.filter((friend) =>
        onlineUsers.find((online) => online.userId === friend.FriendId)
      )
    );
  }, [friendList, onlineUsers]);
  return (
    <Col className="col-3 sidebar-friend">
      <SidebarHeaders text="Friend" num={friend} />
      <InputComponent type="search" placement="search" />

      <Stack gap={4} className="mt-5">
        <TabFilterStatus online={online} />

        <div className="friend-list">
          {onlineFriends &&
            onlineFriends.map((friends) => <ListFriend friends={friends} />)}
        </div>

        <Row className="m-0">
          <Button className="p-3 create-room-video">
            <Icon name="plus" placement="create-room-video" /> Create Video Room
          </Button>
        </Row>
      </Stack>
    </Col>
  );
}
