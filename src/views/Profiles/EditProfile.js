import { Col, Form, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getProfile } from "../../actions/userAction";

import ButtonPrimary from "../../components/Button/ButtonPrimary";
import AboutMe from "../../components/Profile/AboutMe";
import HeadSection from "../../components/Profile/HeadSection";
import ModalEdit from "../../components/Profile/ModalEdit";
import UserInfo from "../../components/Profile/UserInfo";

export default function EditProfile() {
  /**
   * disini nanti atur data nya yang di lempar dari masing2 icon
   */

  const [modalShow, setModalShow] = useState(false);
  const [profile, setProfile] = useState({
    fullName: "",
    avatar: "",
    banner: "",
    about: "",
    joined: "",
    birthday: "",
    place: "",
    gender: "",
    email: "",
  });

  useEffect(() => {
    getProfile().then(({ data }) => {
      setProfile({
        ...profile,
        fullName: data.User.fullName,
        email: data.User.email,
        avatar: data.profilePicture,
        banner: data.banner,
        about: data.bio,
        joined: new Date(data.createdAt).toDateString().slice(4),
        birthday: data.birthday,
        address: data.address,
        gender: data.gender?.charAt(0).toUpperCase() + data.gender?.slice(1),
      });
    });
  }, []);

  const sosmed = {
    facebook: "https://facebook.com/unknown",
    twitter: "https://twitter.com/unknown",
    instagram: "https://instagram.com/unknown",
  };
  const info = { birth: true, address: true, gender: true };

  return (
    <Col className="detail-page m-2">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("hai");
        }}
      >
        <HeadSection
          sosmed={sosmed}
          profileBanner={profile.banner}
          avatar={profile.avatar}
          name={profile.fullName}
          email={profile.email}
          edit={true}
          action={setModalShow}
        />
        <AboutMe
          about={profile.about}
          edit={true}
          action={setModalShow}
          sosmed={sosmed}
        />
        <Row className="user-info px-4 gap-5">
          {info.birth && (
            <UserInfo
              placement="Birthday"
              privacy={false}
              edit={true}
              birthday={profile.birthday}
            />
          )}
          {info.address && (
            <UserInfo
              placement="Live in"
              privacy={false}
              edit={true}
              address={profile.address}
            />
          )}
          {info.gender && (
            <UserInfo
              placement="Gender"
              privacy={false}
              edit={true}
              gender={profile.gender}
            />
          )}
        </Row>
        <Row className="button-edit-info-submit px-5 mt-5">
          <ButtonPrimary
            text="Submit"
            placement="edit-page"
            action={setModalShow}
          />
        </Row>
      </Form>
      <ModalEdit show={modalShow} onHide={() => setModalShow(false)} />
    </Col>
  );
}
