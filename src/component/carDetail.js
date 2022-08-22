import { Container, Card, Col, Button, Form, Row, CardGroup, Accordion } from "react-bootstrap";
import Select from "react-select";
import NavbarCar from "./navbar";

const customStyles = {
  fontSize: "12px",
};
const hargaStyles = {
  fontSize: "12px",
  width: "319px",
  height: "36px",
};

const styleJudul = {
  fontSize: "14px",
  fontWeight: "700",
  lineHeight: "20px",
};

const styleP1 = {
  fontSize: "14px",
  fontWeight: "700",
  lineHeight: "175%",
};

const styleul = {
  fontSize: "14px",
  fontWeight: "700",
  lineHeight: "175%",
};
const acbody = {
  paddingLeft: "0px",
};

const CarDetails = ({ mobil }) => {
  return (
    <Container style={{ marginTop: "-70px", marginBottom: "152px" }}>
      <Card className=" mb-3">
        <Card.Body style={customStyles}>
          <h5 className="mb-2 mt-1" style={styleJudul}>
            Pencarianmu
          </h5>
          <Row className="d-flex formList  justify-content-evenly">
            <Col md>
              <Form.Label>Nama Mobil</Form.Label>
              <Form.Control type="email" disabled />
            </Col>
            <Col md>
              <Form.Label>Kategori</Form.Label>
              <Select isDisabled />
            </Col>
            <Col md style={hargaStyles} className="w-100">
              <Form.Label>Harga</Form.Label>
              <Select isDisabled  />
            </Col>
            <Col md >
              <Form.Label>Sewa</Form.Label>
              <Select isDisabled />
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Row>
        <Col lg={7}>
          <Card>
            <Card.Body>
              <Card.Title className="mb-3" style={styleJudul}>
                Tentang Paket
              </Card.Title>

              <h3 style={styleJudul}>Include</h3>
              <ul style={styleP1}>
                <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                <li>Sudah termasuk bensin selama 12 jam</li>
                <li>Sudah termasuk Tiket Wisata</li>
                <li>Sudah termasuk pajak</li>
              </ul>
              <h3 style={styleJudul}>Exclude</h3>
              <ul style={styleP1}>
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                <li>Tidak termasuk akomodasi penginapan</li>
              </ul>

              <Accordion>
                <Accordion.Item>
                  <Accordion.Header>
                    <h6>Refund, Reschedule, Overtime</h6>
                  </Accordion.Header>
                  <Accordion.Body style={acbody}>
                    <ul style={styleul}>
                      <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                      <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                      <li>Tidak termasuk akomodasi penginapan</li>
                      <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                      <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                      <li>Tidak termasuk akomodasi penginapan</li>
                      <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                      <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                      <li>Tidak termasuk akomodasi penginapan</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={5}>
          <Card className="mb-3">
            <Card.Img className="p-4" variant="top" src={mobil.image} alt="Gambar tidak tersedia" />
            <Card.Body>
              <Card.Title>{mobil.name}</Card.Title>
              <Card.Subtitle style={styleP1}>{mobil.category}</Card.Subtitle>

              <Col className="d-flex justify-content-between fw-bold mt-3">
                <Card.Text className="start-0">Total </Card.Text>
                <Card.Text className="end-0">Rp {mobil.price} </Card.Text>
              </Col>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default CarDetails;
