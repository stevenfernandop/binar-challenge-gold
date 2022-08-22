import { Container, Card, Col, Button, Form, Row } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import HasilCard from "./hasilCard";

const ContentSearchCar = () => {
  const kategoriList = [
    { value: "2 - 4 orang", label: "2 - 4 orang" },
    { value: "4 - 6 orang", label: "4 - 6 orang" },
    { value: "6 - 8 orang", label: "6 - 8 orang" },
  ];
  const hargaList = [
    { value: "<400000", label: "<Rp.400.000" },
    { value: "400000-600000", label: "Rp.400.000 - Rp.600.000" },
    { value: ">600000", label: ">Rp.600.000" },
  ];
  // const status = [{ value: "disewa", label: "Disewa" }];
  const customStyles = {
    fontSize: "12px",
  };

  const hargaStyles = {
    fontSize: "12px",
    width: "319px",
    height: "36px",
  };

  const [name, setName] = useState("");
  const [kategori, setKategori] = useState("");
  const [harga, setHarga] = useState("");

  const [cars, setCars] = useState([]);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const callApi = async () => {
      const response = await axios.get("https://bootcamp-rent-car.herokuapp.com/admin/car");
      // console.log(response.data);
      setCars(response.data);
    };
    callApi();
  }, []);

  const search = (e) => {
    e.preventDefault();
    if (harga === "<400000") {
      let hasil = cars?.filter((e) => {
        return e.name?.toLowerCase().includes(name.toLowerCase()) && e.category?.toLowerCase().includes(kategori.toLowerCase()) && e.price < 400000;
      });
      if (hasil.length) {
        console.log(hasil);
        setResult(hasil);
      }
    } else if (harga === "400000-600000") {
      let hasil = cars?.filter((e) => {
        return e.name?.toLowerCase().includes(name.toLowerCase()) && e.category?.toLowerCase().includes(kategori.toLowerCase()) && e.price <= 600000 && e.price >= 400000;
      });
      if (hasil.length) {
        console.log(hasil);
        setResult(hasil);
      }
    } else if (harga === ">600000") {
      let hasil = cars?.filter((e) => {
        return e.name?.toLowerCase().includes(name.toLowerCase()) && e.category?.toLowerCase().includes(kategori.toLowerCase()) && e.price >= 600000;
      });
      if (hasil.length) {
        console.log(hasil);
        setResult(hasil);
      }
    }
    console.log("Ini hasil cari", result);
  };

  // console.log(cars);

  return (
    <>
      <Container id="Cari-Mobil" style={{ marginTop: "-50px", border: "1px", marginBottom: "108px" }}>
        <Card className="mb-3">
          <Card.Body style={customStyles}>
            <Row>
              <Form onSubmit={search} className="formList gap-3">
                <Col md className="colList">
                  <Form.Label>Nama Mobil</Form.Label>
                  <Form.Control type="text" placeholder="Ketik nama/tipe mobil.com" onChange={(e) => setName(e.target.value)} />
                </Col>
                <Col md className="colList">
                  <Form.Label>Kategori</Form.Label>
                  <Select options={kategoriList} placeholder="Masukan Kapasitas Mobil" onChange={(e) => setKategori(e.value)} />
                </Col>
                <Col md className="colList">
                  <Form.Label>Harga</Form.Label>
                  <Select options={hargaList} placeholder="Masukan Harga Sewa" onChange={(e) => setHarga(e.value)} />
                </Col>
                <Col md className="colList">
                  <Form.Label>Sewa</Form.Label>
                  <Select placeholder="Disewa" />
                </Col>
                <Col md className="colList d-flex align-items-end">
                  <Button className="w-80" type="submit">
                    Cari Mobil
                  </Button>
                </Col>
              </Form>
            </Row>
          </Card.Body>
        </Card>
      </Container>
      <Container>
      <Row>{result && result.map((item) => <HasilCard key={item.id} item={item} />)}</Row>
      </Container>
    </>
  );
};
export default ContentSearchCar;
