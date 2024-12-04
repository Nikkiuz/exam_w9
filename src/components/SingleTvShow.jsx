import { Col, Card } from "react-bootstrap";

const SingleTvShow = (props) => {
  return (
    <Col sm={4} md={6} lg={2}>
      <Card className="bg-dark h-100">
        <Card.Img
          className="img-fluid"
          variant="top"
          src={props.SingleTv.Poster}
          alt={props.SingleTv.Title + " cover"}
        />
        <Card.Body className="text-white d-flex flex-column">
          <Card.Title className="fs-5">{props.SingleTv.Title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleTvShow;
