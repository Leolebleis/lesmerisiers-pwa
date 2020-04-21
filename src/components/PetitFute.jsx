import React from "react";
import petitFuteImage from "../assets/logo-label-petit-fute.png";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class PetitFute extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Jumbotron>
          <Container>
            <Row>
              <Col className="col-3">
                <a
                  href="https://www.petitfute.com/v862-turckheim-68230/c1166-hebergement/c153-gite/1714469-residence-les-merisiers.html"
                  title="Petit Futé"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={petitFuteImage} className="w-75" alt="Petit Futé" />
                </a>
              </Col>
              <Col className="col-9">
                <h1>Hello</h1>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </React.Fragment>
    );
  }
}
