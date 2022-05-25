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
  const [filterStatus, setFilterStatus] = useState("online");

  const [totalFriends, setTotalFriends] = useState(0);
  const [totalOnline, setTotalOnline] = useState(0);
  // const [onlineUsers, setOnlineUsers] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);
  const [offineFriends, setOfflineFriends] = useState([]);

  const { friendList } = useSelector((state) => state.friend);
  const { onlineUsers } = useContext(SocketContext);
  // const { profile } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (profile) {
  //     socket.emit("adduser", profile.UserId);

  //     socket.on("getUsers", (data) => {
  //       setOnlineUsers(data);
  //     });
  //   }
  // }, [profile]);

  // console.log(friendList, "ini friendlist");
  // console.log(onlineUsers, "<<<<ini onlineusers");
  // console.log(onlineUsers.filter((online) => friendList));

  // console.log(
  //   onlineUsers.filter((online) =>
  //     friendList.find((friend) => online.userId === friend.FriendId)
  //   ),
  //   "<<<< apakah ini berhasil"
  // );

  // console.log(
  //   friendList.filter(
  //     (friend) =>
  //       !onlineUsers.find((online) => online.userId === friend.FriendId)
  //   ),

  //   "<<<< ini yang offline"
  // );

  // console.log(
  //   friendList.filter((friend) =>
  //     onlineUsers.find((online) => online.userId === friend.FriendId)
  //   ),
  //   "<<< ini yang online"
  // );

  useEffect(() => {
    dispatch(getFriend());
  }, []);
  useEffect(() => {
    setTotalFriends(friendList.length);
    setOnlineFriends(
      friendList.filter((friend) =>
        onlineUsers.find((online) => online.userId === friend.FriendId)
      )
    );
    setOfflineFriends(
      friendList.filter(
        (friend) =>
          !onlineUsers.find((online) => online.userId === friend.FriendId)
      )
    );
  }, [friendList, onlineUsers]);

  useEffect(() => {
    setTotalOnline(onlineFriends.length);
  }, [onlineFriends]);

  const tabFilterChange = (status) => {
    setFilterStatus(status);
  };

  return (
    <Col className="col-3 sidebar-friend">
      <SidebarHeaders text="Friend" num={totalFriends} />
      <InputComponent type="search" placement="search" />
      <Stack gap={4} className="mt-5">
        <TabFilterStatus online={totalOnline} tabChange={tabFilterChange} />

        <div className="friend-list">
          {filterStatus === "online" &&
            onlineFriends &&
            onlineFriends.map((friends, i) => (
              <ListFriend key={i} friends={friends} status={filterStatus} />
            ))}
          {filterStatus === "offline" &&
            offineFriends &&
            offineFriends.map((friends, i) => (
              <ListFriend key={i} friends={friends} status={filterStatus} />
            ))}
        </div>

        {/* <Row className="m-0">
          <Button className="p-3 create-room-video">
            <Icon name="plus" placement="create-room-video" /> Create Video Room
          </Button>
        </Row> */}
      </Stack>
    </Col>
  );
}
