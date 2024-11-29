import { Component } from "react";
import { Container, Row, ListGroup, Spinner, Alert } from "react-bootstrap";
import MatrixCards from "./MatrixCards";

class MatrixArea extends Component {
  state = {
    matrixFilms: [],
    isLoading: true,
    isError: false,
  };

  getMatrix = () => {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=f95122d7&s=Matrix")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei dati");
        }
      })
      .then((arrayOfMatrix) => {
        console.log("Matrix Films", arrayOfMatrix.Search);
        this.setState({
          matrixFilms: arrayOfMatrix.Search,
          isLoading: false,
        });
      })
      .catch((err) => {
        this.setState({
          isLoading: false,
          isError: true,
        });
      });
  };
  componentDidMount() {
    this.getMatrix();
  }

  render() {
    return (
      <Container>
        <h4 className="text-white mt-4 mb-3 text-start">The Matrix Saga</h4>
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
          this.state.matrixFilms === 0 && (
            <ListGroup>
              <ListGroup.Item>Non ci sono film con questo nome!</ListGroup.Item>
            </ListGroup>
          )}
        <Row className="gy-2">
          <MatrixCards matrixList={this.state.matrixFilms} />
        </Row>
      </Container>
    );
  }
}

export default MatrixArea;
