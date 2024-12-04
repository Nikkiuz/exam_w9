import SingleEvangelion from "./SingleEvangelion";

const EvangelionCards = (props) => {
  return props.evaList.map((film) => {
    return <SingleEvangelion key={film.imdbID} SingleEva={film} />;
  });
};

export default EvangelionCards;
