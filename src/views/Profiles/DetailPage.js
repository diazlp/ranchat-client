import { Col, Row } from "react-bootstrap";
import AboutMe from "../../components/Profile/AboutMe";
import HeadSection from "../../components/Profile/HeadSection";
import UserInfo from "../../components/Profile/UserInfo";

export default function DetailPage() {
  const sosmed = { facebook: true, twitter: true, instagram: true };
  const info = { birth: true, address: true, gender: true };
  const profileBanner = "https://dummyimage.com/1300x400/000/fff";
  const avatar = "https://dummyimage.com/400x400/000/fff";
  const about =
    "Tanta petere igitur, ne sineres memini fieri etiam aliquam inclinationem ad consequendum minima. Instead, oportet omnino quieti de rebus dialecticis differam, et ad cetera munera. Quodsi haberent magnalia inter potentiam et divitias, et non illam quidem haec eo spectant haec quoque vos omnino desit illud quo solo felicitatis libertatisque";
  const joined = "Joined at, 26 July 2021";
  const name = "Aliansyah Firdaus";

  return (
    <Col className="detail-page m-2">
      <HeadSection
        sosmed={sosmed}
        profileBanner={profileBanner}
        avatar={avatar}
        name={name}
        joined={joined}
      />
      <AboutMe about={about} />
      <Row className="user-info px-5">
        {info.birth && <UserInfo placement="Birthday" privacy={false} />}
        {info.address && <UserInfo placement="Live in" privacy={false} />}
        {info.gender && <UserInfo placement="Gender" privacy={false} />}
      </Row>
    </Col>
  );
}
