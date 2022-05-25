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
  // const friend = 100;
  // const online = 6;
  const [totalFriends, setTotalFriends] = useState(0);

  const [totalOnline, setTotalOnline] = useState(0);
  // const [onlineUsers, setOnlineUsers] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);
  const { friendList } = useSelector((state) => state.friend);
  const { onlineUsers } = useContext(SocketContext);
  // const { profile } = useSelector((state) => state.user);
  const disptach = useDispatch();

  // useEffect(() => {
  //   if (profile) {
  //     socket.emit("adduser", profile.UserId);

  //     socket.on("getUsers", (data) => {
  //       setOnlineUsers(data);
  //     });
  //   }
  // }, [profile]);

  useEffect(() => {
    disptach(getFriend());
  }, []);
  useEffect(() => {
    setTotalFriends(friendList.length);
    setOnlineFriends(
      friendList.filter((friend) =>
        onlineUsers.find((online) => online.userId === friend.FriendId)
      )
    );
    setTotalOnline(onlineFriends.length);
  }, [friendList, onlineUsers]);

  useEffect(() => {
    setTotalOnline(onlineFriends.length);
  }, [onlineFriends]);

  return (
    <Col className="col-3 sidebar-friend">
      <SidebarHeaders text="Friend" num={totalFriends} />
      <InputComponent type="search" placement="search" />
      <Stack gap={4} className="mt-5">
        <TabFilterStatus online={totalOnline} />

        <div className="friend-list">
          {onlineFriends &&
            onlineFriends.map((friends, i) => (
              <ListFriend key={i} friends={friends} />
            ))}
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
