import { Row, Col, Card, Container } from "react-bootstrap";
import { useState } from "react";

const Details = () => {
  const [data, setData] = useState([]);
    const getData = () =>{
        // fetch("http://www.omdbapi.com/?apikey=f95122d7&i=" + selectedShow );
    }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Details;
