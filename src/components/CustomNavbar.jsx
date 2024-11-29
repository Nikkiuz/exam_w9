import { Navbar, Nav, Container } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      className="text-white"
    >
      <Container fluid>
        <Navbar.Brand href="#home" className="text-warning">
          <img src="assets/netflix_logo.png" alt="" width={100} />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="text-white"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-white">
              About
            </Nav.Link>
            <Nav.Link href="#deets" className="text-white">
              Browse
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
