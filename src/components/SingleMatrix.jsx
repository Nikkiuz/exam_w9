import { Col, Card } from "react-bootstrap";

const SingleMatrix = (props) => {
  return (
    <Col sm={4} md={6} lg={2}>
      <Card className="bg-dark h-100">
        <Card.Img
          className="img-fluid"
          variant="top"
          src={props.SingleMtx.Poster}
          alt={props.SingleMtx.Title + " cover"}
        />
        <Card.Body className="text-white d-flex flex-column">
          <Card.Title className="fs-5">{props.SingleMtx.Title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleMatrix;
