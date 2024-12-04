import { useState, useEffect } from "react";
import HarryPotterCards from "./HarryPotterCards";
import { Container, Row, ListGroup, Spinner, Alert } from "react-bootstrap";

const HarryPotterArea = (props) => {
  const [harryPotterFilms, setHarryPotterFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getHp = () => {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=f95122d7&s=Harry Potter")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei dati");
        }
      })
      .then((arrayOfHp) => {
        console.log("Hp Film", arrayOfHp.Search);
        setHarryPotterFilms(arrayOfHp.Search);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
  };

  useEffect(() => {
    getHp();
  }, []);

  return (
    <Container>
      <h4 className="text-white mt-4 mb-3 text-start">Harry Potter Saga</h4>
      {error && <Alert variant="danger">Qualcosa è andato storto!</Alert>}
      {loading && (
        <Spinner animation="border" role="status" variant="secondary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {!loading && !error && harryPotterFilms.length === 0 && (
        <ListGroup>
          <ListGroup.Item>Non ci sono film con questo nome!</ListGroup.Item>
        </ListGroup>
      )}
      <Row className="gy-2">
        <HarryPotterCards hpList={harryPotterFilms} />
      </Row>
    </Container>
  );
};

export default HarryPotterArea;
