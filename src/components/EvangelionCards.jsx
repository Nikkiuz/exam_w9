import { Component } from "react";
import SingleEvangelion from "./SingleEvangelion";

class EvangelionCards extends Component {
  render() {
    return this.props.evaList.map((film) => {
      return <SingleEvangelion key={film.imdbID} SingleEva={film} />;
    });
  }
}

export default EvangelionCards;
