import { Col, Row } from "react-bootstrap";

import BadgeLevel from "../Badge/BadgeLevel";
import Icon from "../Icon/Icon";
import Avatar from "../Avatar/Avatar";

export default function FriendListItem({ username, status, avatar, level }) {
  const usernameTruncate = (username) => {
    let usernameView = "";
    for (const i in username) {
      if (usernameView.length < 12) usernameView += username[i];
    }

    if (username.length >= 12) usernameView += "...";
    return usernameView;
  };

  return (
    <Row className="m-0 p-3 friend-list-item mb-2">
      <Col className="col-3">
        <Avatar avatar={avatar} size="md" />
      </Col>
      <Col className="text-truncate">
        <Row>
          <h6>{usernameTruncate(username)}</h6>
          <p className="m-0">
            <Icon name="circle" placement={`${status}-sm`} /> {status}
          </p>
        </Row>
      </Col>
      <Col className="col-3">
        <BadgeLevel level={level} size="sm" />
      </Col>
    </Row>
  );
}
