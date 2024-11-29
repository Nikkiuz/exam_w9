import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import EvangelionCards from "./EvangelionCards";

class EvangelionArea extends Component {
  state = {
    evangelionFilms: [],
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
        });
      })
      .catch((err) => {
        console.log(err);
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
        <Row className="gy-2">
          <EvangelionCards evaList={this.state.evangelionFilms} />
        </Row>
      </Container>
    );
  }
}

export default EvangelionArea;
