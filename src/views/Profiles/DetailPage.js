import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import AboutMe from "../../components/Profile/AboutMe";
import HeadSection from "../../components/Profile/HeadSection";
import UserInfo from "../../components/Profile/UserInfo";
import { getProfile } from "../../actions/userAction";

export default function DetailPage() {
  const sosmed = { facebook: true, twitter: true, instagram: true };
  const info = { birth: true, address: true, gender: true };
  // const profileBanner = "https://dummyimage.com/1300x400/000/fff";
  // const avatar = "https://dummyimage.com/400x400/000/fff";
  // const about =
  //   "Tanta petere igitur, ne sineres memini fieri etiam aliquam inclinationem ad consequendum minima. Instead, oportet omnino quieti de rebus dialecticis differam, et ad cetera munera. Quodsi haberent magnalia inter potentiam et divitias, et non illam quidem haec eo spectant haec quoque vos omnino desit illud quo solo felicitatis libertatisque";
  // const joined = "Joined at, 26 July 2021";
  // const name = "Aliansyah Firdaus";

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
      setProfile({
        ...profile,
        fullName: localStorage.getItem("fullName"),
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
