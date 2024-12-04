import { useState, useEffect } from "react";
import { Container, Row, ListGroup, Spinner, Alert } from "react-bootstrap";
import EvangelionCards from "./EvangelionCards";

const EvangelionArea = () => {
  const [evangelionFilms, setEvangelionFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  // state = {
  //   evangelionFilms: [],
  //   isLoading: true,
  //   isError: false,
  // };

  const getEva = () => {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=f95122d7&s=evangelion")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei dati");
        }
      })
      .then((arrayOfEva) => {
        console.log("Evangelion Films", arrayOfEva.Search);
        setEvangelionFilms(arrayOfEva.Search);
        setLoading(false);
        // this.useState({
        //   evangelionFilms: arrayOfEva.Search,
        //   loading: false,
        // });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
        // this.useState({
        //   loading: false,
        //   error: true,
        // });
      });
  };

  useEffect(() => {
    getEva();
  }, []);

  return (
    <Container>
      <h4 className="text-white mt-4 mb-3 text-start">
        Neon Genesis Evangelion
      </h4>
      {error && <Alert variant="danger">Qualcosa è andato storto!</Alert>}
      {loading && (
        <Spinner animation="border" role="status" variant="secondary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {!loading && !error && evangelionFilms.length === 0 && (
        <ListGroup>
          <ListGroup.Item>Non ci sono film con questo nome!</ListGroup.Item>
        </ListGroup>
      )}
      <Row className="gy-2">
        <EvangelionCards evaList={evangelionFilms} />
      </Row>
    </Container>
  );
};

export default EvangelionArea;
