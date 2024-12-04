import { useState, useEffect } from "react";
import { Container, Row, ListGroup, Spinner, Alert } from "react-bootstrap";
import MatrixCards from "./MatrixCards";

const MatrixArea = () => {
  const [matrixFilms, setmatrixFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getMatrix = () => {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=f95122d7&s=matrix")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei dati");
        }
      })
      .then((arrayOfMatrix) => {
        console.log("Matrix Film", arrayOfMatrix.Search);
        setmatrixFilms(arrayOfMatrix.Search);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
  };

  useEffect(() => {
    getMatrix();
  }, []);

  return (
    <Container>
      <h4 className="text-white mt-4 mb-3 text-start">The Matrix Saga</h4>
      {error && <Alert variant="danger">Qualcosa è andato storto!</Alert>}
      {loading && (
        <Spinner animation="border" role="status" variant="secondary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {!loading && !error && matrixFilms === 0 && (
        <ListGroup>
          <ListGroup.Item>Non ci sono film con questo nome!</ListGroup.Item>
        </ListGroup>
      )}
      <Row className="gy-2">
        <MatrixCards matrixList={matrixFilms} />
      </Row>
    </Container>
  );
};

export default MatrixArea;
