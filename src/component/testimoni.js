import { Container, Row, Col, Card, Button } from "react-bootstrap";
import imgTesti1 from "../assets/img/john.png";
import imgStars from "../assets/img/stars.png";
import arrowleft from "../assets/img/Vector.svg";
import arrowright from "../assets/img/Vector-1.svg";


function Testimonial() {
  return (
    <Container fluid id="testimoni">
      <Row>
        <Col md={12} className="my-auto text-center ">
          <h2 className="text-testi-h2">Testimonial</h2>
          <p className="text-testi-p">Berbagai review positif dari para pelanggan kami </p>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card className="d-flex justify-content-evenly">
            <Card.Body>
              <Row>
                <Col md={3} className="my-auto">
                  <Card.Img className="img-testi" variant="start" src={imgTesti1} />
                </Col>
                <Col md={9}>
                  <img src={imgStars}></img>
                  <Card.Text className="testi-desc">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                  </Card.Text>
                  <p>
                    <small className="testi-nama">John Dee 32, Bromo</small>
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="d-flex justify-content-evenly">
            <Card.Body>
              <Row>
                <Col md={3} className="my-auto">
                  <Card.Img className="img-testi" variant="start" src={imgTesti1} />
                </Col>
                <Col md={9}>
                  <img src={imgStars}></img>
                  <Card.Text className="testi-desc">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                  </Card.Text>
                  <p>
                    <small class="testi-nama">John Dee 32, Bromo</small>
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="d-flex justify-content-evenly">
            <Card.Body>
              <Row>
                <Col md={3} className="my-auto">
                  <Card.Img className="img-testi" variant="start" src={imgTesti1} />
                </Col>
                <Col md={9}>
                  <img src={imgStars}></img>
                  <Card.Text className="testi-desc">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                  </Card.Text>
                  <p>
                    <small class="testi-nama">John Dee 32, Bromo</small>
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Row>
          <Col md={12} className=" text-center ">
            <Button type="button" className="btn-testi btn btn-outline-light rounded-circle ">
              <img src={arrowleft}></img>
            </Button>
            <Button type="button" className="btn-testi btn btn-primary-outline-light rounded-circle">
              <img src={arrowright}></img>
            </Button>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}
export default Testimonial;
