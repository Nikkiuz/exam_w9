import { useState, useEffect } from "react";
import {
  Container,
  ListGroup,
  Row,
  Spinner,
  Alert,
  Card,
  Col,
} from "react-bootstrap";

const TvShows = () => {
  const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getShow = (props) => {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=f95122d7&s=family")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei dati");
        }
      })
      .then((arrayOfTvShow) => {
        console.log("Tv Show", arrayOfTvShow.Search);
        setTvShows(arrayOfTvShow.Search);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
  };

  useEffect(() => {
    getShow();
  }, []);

  return (
    <Container>
      <h4 className="text-white mt-4 mb-3 text-start">Tv Shows</h4>
      {error && <Alert variant="danger">Qualcosa è andato storto!</Alert>}
      {loading && (
        <Spinner animation="border" role="status" variant="secondary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {!loading && !error && tvShows.length === 0 && (
        <ListGroup>
          <ListGroup.Item>Non ci sono film con questo nome!</ListGroup.Item>
        </ListGroup>
      )}
      {tvShows.map((show) => {
        return (
          <Row className="gy-2" key={show.imdbID}>
            <Col sm={4} md={6} lg={2}>
              <Card className="bg-dark h-100">
                <Card.Img
                  className="img-fluid"
                  variant="top"
                  src={show.Poster}
                  alt={show.Title + " cover"}
                />
                <Card.Body className="text-white d-flex flex-column">
                  <Card.Title className="fs-5">{show.Title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};

export default TvShows;
