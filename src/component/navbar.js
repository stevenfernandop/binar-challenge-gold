import { Navbar, Nav, Offcanvas, Container } from "react-bootstrap";
import "../App.css";
function NavbarCar() {
  return (
    <Navbar key={"md"} expand={"md"} style={{ backgroundColor: "#F1F3FF" }}>
      <Container>
        <Navbar.Brand href="#" className="logo"></Navbar.Brand>

        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
        <Navbar.Offcanvas style={{ width: "50%" }} id={`offcanvasNavbar-expand-md`} aria-labelledby={`offcanvasNavbarLabel-expand-md`} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>BCR</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className=" justify-content-end flex-grow-1 ">
              <Nav.Link className="item-nav" href="#ourservice">
                Our Services
              </Nav.Link>
              <Nav.Link href="#whyus">Why Us</Nav.Link>
              <Nav.Link href="#testimoni">Testimonial</Nav.Link>
              <Nav.Link href="#faq">FAQ</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavbarCar;
