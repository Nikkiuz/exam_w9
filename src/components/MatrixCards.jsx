import { Component } from "react";
import SingleMatrix from "./SingleMatrix";

class HarryPotterCards extends Component {
  render() {
    return this.props.matrixList.map((film) => {
      return <SingleMatrix key={film.imdbID} SingleMatrix={film} />;
    });
  }
}

export default HarryPotterCards;
