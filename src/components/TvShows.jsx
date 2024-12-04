import { useState, useEffect } from "react";
import { Container, ListGroup, Row, Spinner, Alert } from "react-bootstrap";
import TvCards from "./TvCards";

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
      <Row className="gy-2">
        <TvCards TvList={tvShows} />
      </Row>
    </Container>
  );
};

export default TvShows;
