import SingleMatrix from "./SingleMatrix";

const MatrixCards = (props) => {
  return props.matrixList.map((film) => {
    return <SingleMatrix key={film.imdbID} SingleMtx={film} />;
  });
};

export default MatrixCards;
