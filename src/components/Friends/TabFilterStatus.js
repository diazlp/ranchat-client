import { Nav, Row } from "react-bootstrap";

export default function TabFilterStatus({ online }) {
  const handleSelect = (eventKey) => {
    console.log(eventKey);
  };

  return (
    <Row className="tab-filter-online mx-auto">
      <Nav
        justify
        variant="pills"
        onSelect={handleSelect}
        defaultActiveKey="online"
        className="p-0"
      >
        <Nav.Item>
          <Nav.Link eventKey="online">Online ({online}) </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="offline">Offline</Nav.Link>
        </Nav.Item>
      </Nav>
    </Row>
  );
}
