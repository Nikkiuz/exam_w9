import { Component } from "react";
import SingleHarryPotter from "./SingleHarryPotter";

class HarryPotterCards extends Component {
  render() {
    return this.props.hpList.map((film) => {
      return <SingleHarryPotter key={film.imdbID} singleHp={film} />;
    });
  }
}

export default HarryPotterCards;
