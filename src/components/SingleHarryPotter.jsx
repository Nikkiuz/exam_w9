import { Col, Card,} from "react-bootstrap";

const SingleHarryPotter = (props) => {
    return (
      <Col sm={4} md={6} lg={2}>
        <Card className="bg-dark w-100 h-100">
          <Card.Img
            className="img-fluid"
            variant="top"
            src={props.singleHp.Poster}
            alt={props.singleHp.Title + " cover"}
          />
          <Card.Body className="text-white d-flex flex-column">
            <Card.Title className="fs-5">
              {props.singleHp.Title}
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  }


export default SingleHarryPotter;
