import { Component } from "react";
import { Col, Card } from "react-bootstrap";

class SingleMatrix extends Component {
  render() {
    return (
      <Col sm={4} md={6} lg={2}>
        <Card className="bg-dark h-100">
          <Card.Img
            className="img-fluid"
            variant="top"
            src={this.props.SingleMtx.Poster}
            alt={this.props.SingleMtx.Title + " cover"}
          />
          <Card.Body className="text-white d-flex flex-column">
            <Card.Title className="fs-5">
              {this.props.SingleMtx.Title}
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleMatrix;
