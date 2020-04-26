import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

const Image = styled.div`
  width: 100%;
  height: 100%;
  @media (max-width: 576px) {
    height: 300px;
  }

  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export default class GiteHomeIntro extends React.Component {
  render(props) {
    const isLeft = this.props.isLeft === "true" ? true : false;

    return (
      <Col className="col-12">
        <Card className="bg-white shadow mt-3">
          <Row className="h-100">
            <Col
              className={`col-12 col-md-4 ${
                isLeft ? "order-md-1" : "order-md-2"
              }`}
            >
              <Image
                className={`${isLeft ? "rounded-left" : "rounded-right"}`}
                image={this.props.image}
              />
            </Col>
            <Card.Body
              className={`col-12 col-md-8 px-5 ${
                isLeft ? "order-md-2" : "order-md-1"
              }`}
            >
              <h2 className="gradient-multiline mt-2">{this.props.title}</h2>
              <p className="text-justify">{this.props.children}</p>
              <div className="text-center">
                <a
                  href={this.props.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="btn btn-large btn-outline-info my-4 ">
                    Réserver
                  </div>
                </a>
              </div>
            </Card.Body>
          </Row>
        </Card>
      </Col>
    );
  }
}
