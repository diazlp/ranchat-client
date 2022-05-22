import { Button, Col, Row, Stack } from "react-bootstrap";

import SidebarHeaders from "../Headers/SidebarHeaders";
import Icon from "../Icon/Icon";
import FriendListItem from "../Friends/FriendListItem";
import InputComponent from "../Form/InputComponent";
import TabFilterStatus from "../Friends/TabFilterStatus";

export default function SidebarFriend({ data }) {
  const badge = 100;
  const online = 6;

  return (
    <Col className="col-3 sidebar-friend">
      <SidebarHeaders text="Friend" badge={badge} />
      <InputComponent type="search" placement="search" />

      <Stack gap={4} className="mt-5">
        <TabFilterStatus online={online} />

        <div className="friend-list">
          <FriendListItem
            username="Meadow Cochran"
            status="online"
            avatar="https://dummyimage.com/500x500/e6e6e6/080808&text=A"
            level={3}
          />
          <FriendListItem
            username="Boris Burn"
            status="offline"
            avatar="https://dummyimage.com/500x500/e6e6e6/080808&text=A"
            level={30}
          />
          <FriendListItem
            username="Lorenzo Clemons"
            status="online"
            avatar="https://dummyimage.com/500x500/e6e6e6/080808&text=A"
            level={10}
          />
          <FriendListItem
            username="Luna Farmer"
            status="online"
            avatar="https://dummyimage.com/500x500/e6e6e6/080808&text=A"
            level={6}
          />
          <FriendListItem
            username="Subhaan Acosta"
            status="offline"
            avatar="https://dummyimage.com/500x500/e6e6e6/080808&text=A"
            level={20}
          />
          <FriendListItem
            username="Hajrah Rich"
            status="online"
            avatar="https://dummyimage.com/500x500/e6e6e6/080808&text=A"
            level={3}
          />
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
