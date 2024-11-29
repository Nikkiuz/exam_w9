import { Component } from "react";
import SingleMatrix from "./SingleMatrix";

class MatrixCards extends Component {
  render() {
    return this.props.matrixList.map((film) => {
      return <SingleMatrix key={film.imdbID} SingleMtx={film} />;
    });
  }
}

export default MatrixCards;
