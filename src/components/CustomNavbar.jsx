import { Navbar, Nav, Container, Form } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const CustomNavbar = () => {
  const location = useLocation();
  console.log("location navbar", location);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="black"
      data-bs-theme="black"
      className="text-white "
    >
      <Container fluid className="bg-black">
        <Navbar.Brand>
          <Link to={"/"}>
            <img src="assets/netflix_logo.png" alt="" width={100} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="text-white bg-black"
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="bg-black">
          <Nav className="ms-auto d-flex align-items-center bg-black">
            <Link
              to={"/"}
              className={location.pathname === "/" ? "nav-link" : "nav-link"}
            >
              <div className="text-white fs-5">Home</div>
            </Link>
            <Link
              to="/tvShows"
              className={
                location.pathname === "/tvShows"
                  ? "nav-link active fs-5 text-white"
                  : "nav-link fs-5 text-white"
              }
            >
              <div>Tv Shows</div>
            </Link>
            <Nav.Link className="text-white fs-5">Movies</Nav.Link>
            <Nav.Link className="text-white fs-5">Recently Added</Nav.Link>
            <Nav.Link className="text-white fs-5">My List</Nav.Link>
            <Nav.Link className="text-white fs-5">
              <Form>
                <Form.Group
                  className="d-flex rounded"
                  controlId="formBasicEmail"
                >
                  <Form.Control placeholder="Search" className="me-2" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    fill="currentColor"
                    className="bi bi-search me-2 "
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </Form.Group>
              </Form>
            </Nav.Link>
            <Nav.Link className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                fill="currentColor"
                className="bi bi-bell ms-2 me-2"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
              </svg>
            </Nav.Link>
            <Navbar.Brand className="text-warning">
              <Link to={"/profile"}>
                <img
                  src="assets/profile.jpeg"
                  alt="profile pic"
                  width={50}
                  height={50}
                  className="object-fit-contain border rounded"
                />
              </Link>
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
