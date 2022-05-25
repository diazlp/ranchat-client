import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { getProfile } from "../../actions/userAction";

import AboutMe from "../../components/Profile/AboutMe";
import HeadSection from "../../components/Profile/HeadSection";
import UserInfo from "../../components/Profile/UserInfo";

export default function DetailPage() {
  const sosmed = { facebook: true, twitter: true, instagram: true };
  const info = { birth: true, address: true, gender: true };

  const [profile, setProfile] = useState({
    fullName: "",
    avatar: "",
    banner: "",
    about: "",
    joined: "",
    birthday: "",
    place: "",
    gender: "",
  });

  useEffect(() => {
    getProfile().then(({ data }) => {
      console.log(data);
      setProfile({
        ...profile,
        fullName: data.User.fullName,
        avatar: data.profilePicture,
        banner: data.banner,
        about: data.bio,
        joined: new Date(data.createdAt).toDateString().slice(4),
        birthday: new Date(data.birthday).toDateString().slice(4),
        address: data.address,
        gender: data.gender?.charAt(0).toUpperCase() + data.gender?.slice(1),
      });
    });
  }, []);

  return (
    <Col className="detail-page m-2">
      <HeadSection
        sosmed={sosmed}
        profileBanner={profile.banner}
        avatar={profile.avatar}
        name={profile.fullName}
        joined={profile.joined}
      />
      <AboutMe about={profile.about} />
      <Row className="user-info px-5">
        {info.birth && (
          <UserInfo
            placement="Birthday"
            privacy={false}
            birthday={profile.birthday}
          />
        )}
        {info.address && (
          <UserInfo
            placement="Live in"
            privacy={false}
            address={profile.address}
          />
        )}
        {info.gender && (
          <UserInfo
            placement="Gender"
            privacy={false}
            gender={profile.gender}
          />
        )}
      </Row>
    </Col>
  );
}
