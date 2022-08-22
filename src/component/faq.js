import { Container, Row, Col, Accordion } from "react-bootstrap";

function Faq() {
  return (
    <Container id="faq">
      <Row>
        <Col md={6} className="faq-left">
          <h1 className="faq-h1">Frequently Asked Question</h1>
          <p className="faq-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </Col>
        <Col md={6} className="faq-right mb-4 ">
          <Accordion>
            <Accordion.Item eventKey="0" className="mb-3">
              <Accordion.Header className="acording-header"> Apa saja syarat yang dibutuhkan?</Accordion.Header>
              <Accordion.Body>{/*  */}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="mb-3">
              <Accordion.Header className="acording-header">Berapa hari minimal sewa mobil lepas kunci?</Accordion.Header>
              <Accordion.Body>{/*  */}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="mb-3">
              <Accordion.Header className="acording-header"> Berapa hari sebelumnya sabaiknya booking sewa mobil?</Accordion.Header>
              <Accordion.Body>{/*  */}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="mb-3">
              <Accordion.Header className="acording-header"> Apakah Ada biaya antar-jemput?</Accordion.Header>
              <Accordion.Body>{/*  */}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className="mb-3">
              <Accordion.Header className="acording-header"> Bagaimana jika terjadi kecelakaan</Accordion.Header>
              <Accordion.Body>{/*  */}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}
export default Faq;
