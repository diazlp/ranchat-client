import FriendListItem from "../Friends/FriendListItem";
import { useDispatch } from "react-redux";
import { addRoom } from "../../actions/chatAction";
export default function ListFriend({ friends, status }) {
  const dispatch = useDispatch();
  const makeRoomFriend = () => {
    dispatch(
      addRoom({
        receiverId: friends.FriendData.id,
        sender: friends.FriendData.fullName,
      })
    );
  };

  return (
    <div
      className="clickable"
      onClick={() => {
        makeRoomFriend();
      }}
    >
      <FriendListItem
        username={friends.FriendData.fullName}
        status={status}
        avatar={friends.FriendData.Profile.profilePicture}
        level={3}
      />
    </div>
  );
}
