import { Modal, Button, Col, Row, Table } from "react-bootstrap";
import Icon from "../Icon/Icon";

import { useNavigate } from "react-router-dom";
import { getPaymentToken } from "../../actions/userAction";

export default function PremiumModal(props) {
  const navigate = useNavigate();

  const payment = async () => {
    const response = await getPaymentToken();

    await window.snap.pay(response.token, {
      onSuccess: (result) => {
        localStorage.setItem("isPremium", "true");
        props.onSuccess(false);
        props.premiumHandler(true);
        navigate("/");
      },
      onPending: (result) => {
        navigate("/");
      },
      onError: (result) => {
        navigate("/");
      },
    });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      id="modal-premium"
    >
      <Modal.Header closeButton className="modal-premium-header">
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="d-flex justify-content-center text-center"
        >
          Upgrade to Premium
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-premium-body d-flex gap-3">
        <Col className="bg-light col-5 text-center free">
          <h2 className="mb-4">Free</h2>
          <div className="table-price mb-5">
            <Table borderless hover>
              <tbody>
                <tr>
                  <td>
                    <div className="me-2">
                      <Icon name="xmark" placement="table-price-exclude" />
                    </div>
                  </td>
                  <td className="text-start">Bisa video call teman</td>
                </tr>
                <tr>
                  <td>
                    <div className="me-2">
                      <Icon name="xmark" placement="table-price-exclude" />
                    </div>
                  </td>
                  <td className="text-start">Bisa video call teman</td>
                </tr>
                <tr>
                  <td>
                    <div className="me-2">
                      <Icon name="xmark" placement="table-price-exclude" />
                    </div>
                  </td>
                  <td className="text-start">Bisa video call teman</td>
                </tr>
                <tr>
                  <td>
                    <div className="me-2">
                      <Icon name="xmark" placement="table-price-exclude" />
                    </div>
                  </td>
                  <td className="text-start">Bisa video call teman</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <h5 className="free-footer">Current Package</h5>
        </Col>
        <Col className="bg-light text-center premium">
          <h2 className="mb-4">Premium</h2>
          <div className="table-price mb-3">
            <Table borderless hover responsive="sm">
              <tbody>
                <tr>
                  <td>
                    <div className="me-5">
                      <Icon name="check" placement="table-price-include" />
                    </div>
                  </td>
                  <td className="text-start">Bisa video call teman</td>
                </tr>
                <tr>
                  <td>
                    <div className="me-5">
                      <Icon name="check" placement="table-price-include" />
                    </div>
                  </td>
                  <td className="text-start">Bisa bisa kirim GIF sesukanya</td>
                </tr>
                <tr>
                  <td>
                    <div className="me-5">
                      <Icon name="check" placement="table-price-include" />
                    </div>
                  </td>
                  <td className="text-start">Kirim lokasi terkini kamu!</td>
                </tr>
                <tr>
                  <td>
                    <div className="me-5">
                      <Icon name="check" placement="table-price-include" />
                    </div>
                  </td>
                  <td className="text-start">Kirim lokasi terkini kamu!</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="d-flex justify-content-between px-3 align-items-center premium-footer">
            <h2 className="text-secondary m-0">Rp150.000 </h2>
            <Button
              onClick={() => payment()}
              className="btn btn-premium-payment btn-lg"
            >
              Premium Now
            </Button>
          </div>
        </Col>
      </Modal.Body>
      {/* <Modal.Footer className="modal-premium-footer">
        <Button onClick={props.onHide}>Premium Now</Button>
      </Modal.Footer> */}
    </Modal>
  );
}
