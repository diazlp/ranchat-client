import { Col, Row, Stack } from "react-bootstrap";
import Avatar from "../../Avatar/Avatar";
import BadgeLevel from "../../Badge/BadgeLevel";
import Icon from "../../Icon/Icon";
import IconAuthen from "../../Icon/IconAuthen";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
export default function ChatHeader({ level }) {
  const { friendHeaderName, friendHeaderPhoto } = useSelector(
    (state) => state.chat
  );

  const authLvl = (lvl) => (lvl > 4 ? true : false);
  return (
    <>
      {friendHeaderName && friendHeaderPhoto && (
        <Row className="chat-header d-flex align-items-center px-3 sticky-top">
          <Col className="d-flex align-items-center">
            <Avatar avatar={friendHeaderPhoto} size="lg" />
            <Stack className="px-4 my-auto">
              <h5 className="m-1">{friendHeaderName}</h5>
              {/* <p className="m-1">
                <Icon name="circle" placement="online-md" />
                Online
              </p> */}
            </Stack>
            <Stack direction="horizontal" gap={4}>
              <BadgeLevel level={level} size="lg" />
              <IconAuthen icon="video" auth={authLvl(level)} />
              <Icon
                name="ellipsis-vertical"
                placement="header-chat clickable"
              />
            </Stack>
          </Col>
        </Row>
      )}
    </>
  );
}
