import { Container, Row, Col, Button } from "react-bootstrap";

function CardSewa() {
  return (
    <Container id="cardsewa">
      <Row>
        <Col md={12} className="card-sewa my-auto text-center ">
          <h2 className="text-sewa-h2">Sewa Mobil di (Lokasimu) Sekarang</h2>
          <p className="text-sewa-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <Button type="button" class="tbl-sewa">
            Mulai Sewa Mobil
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
export default CardSewa;
