import { Component } from "react";
import { Container, Row, ListGroup, Spinner, Alert } from "react-bootstrap";
import EvangelionCards from "./EvangelionCards";

class EvangelionArea extends Component {
  state = {
    evangelionFilms: [],
    isLoading: true,
    isError: false,
  };

  getEva = () => {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=f95122d7&s=Evangelion")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei dati");
        }
      })
      .then((arrayOfEva) => {
        console.log("Evangelion Films", arrayOfEva.Search);
        this.setState({
          evangelionFilms: arrayOfEva.Search,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          isLoading: false,
          isError: true,
        });
      });
  };
  componentDidMount() {
    this.getEva();
  }

  render() {
    return (
      <Container>
        <h4 className="text-white mt-4 mb-3 text-start">
          Neon Genesis Evangelion
        </h4>
        {this.state.isError && (
          <Alert variant="danger">Qualcosa è andato storto!</Alert>
        )}
        {this.state.isLoading && (
          <Spinner animation="border" role="status" variant="secondary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {!this.state.isLoading &&
          !this.state.isError &&
          this.state.evangelionFilms === 0 && (
            <ListGroup>
              <ListGroup.Item>Non ci sono film con questo nome!</ListGroup.Item>
            </ListGroup>
          )}
        <Row className="gy-2">
          <EvangelionCards evaList={this.state.evangelionFilms} />
        </Row>
      </Container>
    );
  }
}

export default EvangelionArea;
