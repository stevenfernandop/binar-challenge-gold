import { Container, Row, Col, Card } from "react-bootstrap";
import icon_thumb1 from "../assets/img/icon_thumb.png";
import icon_thumb2 from "../assets/img/icon_price.png";
import icon_thumb3 from "../assets/img/icon_clock.png";
import icon_thumb4 from "../assets/img/icon_medali.png";

function WhyUs() {
  return (
    <Container id="whyus">
      <Row>
        <Col md={12} className="whyus-row1 my-auto ">
          <h1 className="text-h1-whyus ">Why Us?</h1>
          <p className="p-whyus ">Mengapa harus pilih Binar Car Rental?</p>
        </Col>
      </Row>

      <Row>
        <Col md={3} className="whyus-row2 my-auto">
          <Card >
            <Card.Body>
              <img className="mt-3 mb-3" width="32px" height="32px" variant="top" src={icon_thumb1} />
              <Card.Title className="whyusTitle mb-2">Mobil Lengkap</Card.Title>
              <Card.Text className="whyusDesc">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="whyus-row2 my-auto">
          <Card >
            <Card.Body>
              <img className="mt-3 mb-3" width="32px" height="32px" variant="top" src={icon_thumb2} />
              <Card.Title className="whyusTitle mb-2">Harga Murah</Card.Title>
              <Card.Text className="whyusDesc">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="whyus-row2 my-auto">
          <Card>
            <Card.Body>
              <img className="mt-3 mb-3" width="32px" height="32px" variant="top" src={icon_thumb3} />
              <Card.Title className="whyusTitle mb-2">Layanan 24 Jam</Card.Title>
              <Card.Text className="whyusDesc">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="whyus-row2 my-auto">
          <Card>
            <Card.Body>
              <img className="mt-3 mb-3" width="32px" height="32px" variant="top" src={icon_thumb4} />
              <Card.Title className="whyusTitle mb-2">Sopir Profesional</Card.Title>
              <Card.Text className="whyusDesc">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default WhyUs;
