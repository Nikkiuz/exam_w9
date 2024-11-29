import React from "react";
import { Container, Row, Col, Button, Dropdown, Form } from "react-bootstrap";

const EditProfile = () => {
  return (
    <>
      <Container className="mt-5">
        <h1 className="text-white text-center" style={{ fontSize: "2.5em" }}>
          Edit Profile
        </h1>
        <hr className="text-white" style={{ width: "100%" }} />
      </Container>

      <Container>
        <Row>
          <Col xs={5} md={4} className="ms-md-2 me-md-0">
            <img
              src="https://www.placedog.net/150/150"
              alt="Profile"
              className="img-fluid"
            />
          </Col>

          <Col xs={7} md={6}>
            <Row>
              <Col xs={12}>
                <div className="p-3" style={{ backgroundColor: "#666666" }}>
                  <p className="fs-2 text-white">Username</p>
                </div>
              </Col>

              <Col xs={12}>
                <h4 className="text-secondary mt-3">Language:</h4>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="dark"
                    className="text-white fw-bold mt-3"
                    style={{
                      borderRadius: "0%",
                      backgroundColor: "black",
                      border: "1px solid white",
                    }}
                  >
                    English
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ backgroundColor: "black" }}>
                    <Dropdown.Item className="text-white fw-bold">
                      Italian
                    </Dropdown.Item>
                    <Dropdown.Item className="text-white fw-bold">
                      French
                    </Dropdown.Item>
                    <Dropdown.Item className="text-white fw-bold">
                      Spanish
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>

              <hr className="text-white text-end mt-4 mb-4" />

              <Col xs={12}>
                <h4 className="text-secondary mt-3">Maturity Setting:</h4>
                <div className="p-2" style={{ backgroundColor: "#666666" }}>
                  <p
                    className="text-white fw-semibold"
                    style={{ fontSize: "15px" }}
                  >
                    ALL MATURITY RATINGS
                  </p>
                </div>
              </Col>

              <Col xs={12} className="mt-3">
                <Button
                  variant="outline-light"
                  className="ps-4 pe-4 fw-bold"
                  style={{
                    borderRadius: "0%",
                    color: "#666666",
                    border: "1px solid #666666",
                    letterSpacing: "0.2rem",
                  }}
                >
                  EDIT
                </Button>
              </Col>

              <hr className="text-white text-end mt-4 mb-4" />

              {/* Autoplay Controls */}
              <Col xs={12}>
                  <h4 className="text-secondary mt-3">Autoplay controls</h4>
                <Container className="d-flex flex-column">
                  <Form.Check
                    type="checkbox"
                    label="Autoplay next episode in a series on all devices."
                    className="text-white fs-6 mt-2"
                  />
                  <Form.Check
                    type="checkbox"
                    label="Autoplay previews while browsing on all devices."
                    className="text-white fs-6 mt-2"
                  />
                </Container>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Container className="mt-4 mb-4">
        <hr className="text-white mb-4" style={{ width: "100%" }} />
        <div className="text-center">
          <Row>
            <Col>
              <Button
                variant="outline-light"
                className="ps-3 pe-3 fw-bold"
                style={{
                  borderRadius: "0%",
                  color: "#666666",
                  border: "1px solid #666666",
                  letterSpacing: "0.2rem",
                }}
              >
                SAVE
              </Button>
            </Col>
            <Col>
              <Button
                variant="outline-light"
                className="ps-3 pe-3 fw-bold"
                style={{
                  borderRadius: "0%",
                  color: "#666666",
                  border: "1px solid #666666",
                  letterSpacing: "0.2rem",
                }}
              >
                CANCEL
              </Button>
            </Col>
            <Col>
              <Button
                variant="outline-light"
                className="fw-bold"
                style={{
                  borderRadius: "0%",
                  color: "#666666",
                  border: "1px solid #666666",
                }}
              >
                DELETE PROFILE
              </Button>
            </Col>
          </Row>
        </div>
        <hr className="text-white mb-4 mt-4" style={{ width: "100%" }} />
      </Container>
    </>
  );
};

export default EditProfile;
