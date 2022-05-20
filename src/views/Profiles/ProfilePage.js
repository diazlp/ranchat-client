import { Col, Button, Stack } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import ButtonPrimary from "../../components/Button/ButtonPrimary";

export default function ProfilePage(params) {
  const profileMenus = [
    {
      id: 1,
      text: "Profile Page",
      page: "detail",
    },
    {
      id: 2,
      text: "Edit Profile",
      page: "edit",
    },
    {
      id: 3,
      text: "Password and Security",
      page: "security",
    },
  ];

  return (
    <Col>
      <h1>ProfilePage</h1>
      <Stack direction="horizontal" gap={3} className="justify-content-center">
        {profileMenus.map((el) => (
          <ButtonPrimary text={el.text} page={el.page} key={el.id} />
        ))}
      </Stack>
      <Outlet />
    </Col>
  );
}
