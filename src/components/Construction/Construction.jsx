import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactGoogleSlides from "react-google-slides";

export default () => {
  return (
    <Container>
      <Row className="mb-3">
        <Col>
          <p>
            <b>Les Merisiers</b> sont le résultat de deux années de travail, de
            questionnements, de problèmes (résolus) avec pour seul objectif :{" "}
            <i>vous offrir un séjour qui réponde à vos attentes.</i> Il est bien
            sûr impossible de plaire à tout le monde, mais j’ose espérer que le
            résultat ne vous décevra pas.
          </p>
          <p>
            Vous pouvez admirer ci-dessous la progression des travaux et la
            transformation qui en a résulté.
          </p>
          <blockquote className="blockquote m-0 text-info d-flex justify-content-center">
            <p>« On peut toujours faire mieux »</p>
          </blockquote>
          <p className="d-flex justify-content-end">
            — Richard Le Bleis, votre hôte
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="col-10 text-center m-auto">
          <ReactGoogleSlides
            width="100%"
            slidesLink="https://docs.google.com/presentation/d/1JCkiFGOHxMvyP-iN_a6rf9Q1W7DCmqa3CL1wViZfQKg"
            slideDuration={5}
            showControls
            loop
          />
        </Col>
      </Row>
    </Container>
  );
};
