import { useState } from "react";
import { Col, Row } from "react-bootstrap";

import ButtonPrimary from "../../components/Button/ButtonPrimary";
import AboutMe from "../../components/Profile/AboutMe";
import HeadSection from "../../components/Profile/HeadSection";
import ModalEdit from "../../components/Profile/ModalEdit";
import UserInfo from "../../components/Profile/UserInfo";

export default function EditProfile() {
  const [modalShow, setModalShow] = useState(false);

  /**
   * disini nanti atur data nya yang di lempar dari masing2 icon
   */

  const sosmed = {
    facebook: "https://facebook.com/unknown",
    twitter: "https://twitter.com/unknown",
    instagram: "https://instagram.com/unknown",
  };
  const info = { birth: true, address: true, gender: true };
  const profileBanner = "https://dummyimage.com/1300x400/000/fff";
  const avatar = "https://dummyimage.com/400x400/000/fff";
  const about =
    "Tanta petere igitur, ne sineres memini fieri etiam aliquam inclinationem ad consequendum minima. Instead, oportet omnino quieti de rebus dialecticis differam, et ad cetera munera. Quodsi haberent magnalia inter potentiam et divitias, et non illam quidem haec eo spectant haec quoque vos omnino desit illud quo solo felicitatis libertatisque";
  const gender = "Female";
  const joined = "Joined at, 26 July 2021";
  const name = "Aliansyah Firdaus";
  const email = "aliansyah.mm@gmail.com";

  return (
    <Col className="detail-page m-2">
      <HeadSection
        sosmed={sosmed}
        profileBanner={profileBanner}
        avatar={avatar}
        name={name}
        joined={joined}
        email={email}
        edit={true}
        action={setModalShow}
      />
      <AboutMe
        about={about}
        edit={true}
        action={setModalShow}
        sosmed={sosmed}
      />
      <Row className="user-info px-5">
        {info.birth && (
          <UserInfo placement="Birthday" privacy={false} edit={true} />
        )}
        {info.address && (
          <UserInfo placement="Live in" privacy={false} edit={true} />
        )}
        {info.gender && (
          <UserInfo
            placement="Gender"
            privacy={false}
            edit={true}
            gender={gender}
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
      <ModalEdit show={modalShow} onHide={() => setModalShow(false)} />
    </Col>
  );
}
