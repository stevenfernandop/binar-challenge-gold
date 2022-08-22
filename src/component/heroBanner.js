import { Container, Row, Col, Button } from "react-bootstrap";
import carImg from "../assets/img/hero-img-car.png";
import { Link } from "react-router-dom";
// import * as React from "react";

function HeroBanner() {
  return (
    <Container fluid style={{ backgroundColor: "#F1F3FF" }}>
      <Row>
        <Col md={6} className="hero-left my-auto">
          <h2 className="text-h2" style={{ paddingLeft:"100px" }} >Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h2>
          <p className="text-p1" style={{ paddingLeft:"100px" }}>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
          <Link to="/search" >
            <Button type="button" className="tbl-banner tbl-banner" style={{ marginLeft:"100px" }}>
              Mulai Sewa Mobil
            </Button>
          </Link>
        </Col>
        <Col md={3} className="hero-right my-auto">
          <img className="img-banner" src={carImg}></img>
        </Col>
      </Row>
    </Container>
  );
}
export default HeroBanner;
