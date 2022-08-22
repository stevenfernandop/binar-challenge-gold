import { Container, Row, Col, Nav } from "react-bootstrap";
import icon1 from "../assets/img/icon_facebook.png";
import icon2 from "../assets/img/icon_instagram.png";
import icon3 from "../assets/img/icon_twitter.png";
import icon4 from "../assets/img/icon_mail.png";
import icon5 from "../assets/img/icon_twitch.png";
import logo from "../assets/img/logo.png";
function Footer() {
  return (
    <Container>
      <Row className="footerrow">
        <Col>
          <p className="fw-bold">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p className="fw-bold ">binarcarrental@gmail.com</p>
          <p className="fw-bold">081-233-334-808</p>
        </Col>
        <Col className="d-flex flex-column fw-bold">
          <Nav.Link className="navbtm " href="#ourservice">
            Our services
          </Nav.Link>
          <Nav.Link className="navbtm" href="#whyus">
            Why Us
          </Nav.Link>
          <Nav.Link className="navbtm" href="#testimoni">
            Testimonial
          </Nav.Link>
          <Nav.Link className="navbtm" href="faq">
            FAQ
          </Nav.Link>
        </Col>
        <Col>
          <p className="fw-bold">Connect with us</p>
          <img className="icon m-1" src={icon1}></img>
          <img className="icon m-1" src={icon2}></img>
          <img className="icon m-1" src={icon3}></img>
          <img className="icon m-1" src={icon4}></img>
          <img className="icon m-1" src={icon5}></img>
        </Col>
        <Col>
          <p className="fw-bold">Copyright Binar 2022</p>
          <img className="icon" src={logo}></img>
        </Col>
      </Row>
    </Container>
  );
}
export default Footer;
