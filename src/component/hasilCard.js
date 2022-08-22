import { Card, Button, Col } from "react-bootstrap";
import React from "react";
import { useHistory } from "react-router-dom";

const HasilCard = ({ item }) => {
  const navigate = useHistory();
  const handleKlik = () => {
    navigate.push(`/Detail/${item.id}`);
  };
  return (
    <Col md={4}>
      <Card className="mb-3" style={{ minHeight: "478px" }}>
        <Card.Img className="p-3" variant="top" src={item.image} alt="Gambar tidak tersedia" />
        <Card.Body className="d-grid align-items-end">
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Card.Text>
          <Button className="w-100 " onClick={handleKlik}>
            Pilih Mobil
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default HasilCard;
