import SingleHarryPotter from "./SingleHarryPotter";

const HarryPotterCards = (props) => {
  return props.hpList.map((film) => {
    return <SingleHarryPotter key={film.imdbID} singleHp={film} />;
  });
};

export default HarryPotterCards;
