import { Component } from "react";
import HarryPotterCards from "./HarryPotterCards";
import { Container, Row } from "react-bootstrap";

class HarryPotterArea extends Component {
  state = {
    harryPotterFilms: [],
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
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.getHp();
  }

  render() {
    return (
      <Container>
        <h4 className="text-white mt-4 mb-3 text-start">Harry Potter Saga</h4>
        <Row className="gy-2">
          <HarryPotterCards hpList={this.state.harryPotterFilms} />
        </Row>
      </Container>
    );
  }
}

export default HarryPotterArea;
