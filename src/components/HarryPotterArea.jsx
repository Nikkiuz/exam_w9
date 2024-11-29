import { Component } from "react";
import HarryPotterCards from "./HarryPotterCards";
import { Container, Row, ListGroup, Spinner, Alert } from "react-bootstrap";

class HarryPotterArea extends Component {
  state = {
    harryPotterFilms: [],
    isLoading: true,
    isError: false,
  };

  getHp = () => {
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
        this.setState({
          harryPotterFilms: arrayOfHp.Search,
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
    this.getHp();
  }

  render() {
    return (
      <Container>
        <h4 className="text-white mt-4 mb-3 text-start">Harry Potter Saga</h4>
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
          this.state.harryPotterFilms === 0 && (
            <ListGroup>
              <ListGroup.Item>Non ci sono film con questo nome!</ListGroup.Item>
            </ListGroup>
          )}
        <Row className="gy-2">
          <HarryPotterCards hpList={this.state.harryPotterFilms} />
        </Row>
      </Container>
    );
  }
}

export default HarryPotterArea;
