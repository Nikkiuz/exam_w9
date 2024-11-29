import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import MatrixCards from "./MatrixCards";

class MatrixArea extends Component {
  state = {
    matrixFilms: [],
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
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.getMatrix();
  }

  render() {
    return (
      <Container>
        <h4 className="text-white mt-4 mb-3 text-start">The Matrix Saga</h4>
        <Row className="gy-2">
          <MatrixCards matrixList={this.state.matrixFilms} />
        </Row>
      </Container>
    );
  }
}

export default MatrixArea;
