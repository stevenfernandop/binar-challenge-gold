import { Container, Row, Col, Button } from "react-bootstrap";
import imageGirl from "../assets/img/img_service.png";
import ceklis from "../assets/img/ceklis.png";

function OurService() {
  return (
    <Container id="ourservice">
      <Row>
        <Col md={6} className="service-left my-auto justify-content-evenly d-flex ">
          <img className="img-service" src={imageGirl}></img>
        </Col>
        <Col md={6} className="service-right my-auto">
          <h4 className="text-service-h4 fw-bold">Best Car Rental for any kind of trip in (Lokasimu)!</h4>
          <p className="text-service-p2 fw-bold">
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
          </p>
          <div className="servi fw-bold">
          <img className="img-service-ceklis" src={ceklis}></img>Sewa Mobil dengan Supir di Bali 12 Jam
          </div>
          <div className="servi fw-bold">
          <img className="img-service-ceklis" src={ceklis}></img>Sewa Mobil Lepas Kunci di Bali 24 Jam
          </div>
          <div className="servi fw-bold">
          <img className="img-service-ceklis" src={ceklis}></img>Sewa Mobil Jangka Panjang Bulanan
          </div>
          <div className="servi fw-bold">
          <img className="img-service-ceklis" src={ceklis}></img>Gratis Antar - Jemput Mobil di Bandara
          </div>
          <div className="servi fw-bold">
          <img className="img-service-ceklis" src={ceklis}></img>Layanan Airport Transfer / Drop in Out
          </div>
          
        </Col>
      </Row>
    </Container>
  );
}
export default OurService;
