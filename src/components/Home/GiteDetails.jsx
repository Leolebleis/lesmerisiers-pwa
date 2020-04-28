import React from "react";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default class GiteDetails extends React.Component {
  render() {
    let pictureData = "";
    if (this.props.title === "Gîte 4 à 6 personnes") {
      pictureData = require("../../assets/pg-photos.json");
    } else if (this.props.title === "Gîte 8 à 10 personnes") {
      pictureData = require("../../assets/gg-photos.json");
    } else {
      pictureData = require("../../assets/mg-photos.json");
    }

    return (
      <React.Fragment>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {pictureData.photos.map((photo) => {
            return (
              <Row className="mb-3">
                <Col className="col-12 col-md-5">
                  <p className="text-right lead mr-3">{photo.title}</p>
                </Col>
                <Col className="col-12 col-md-7">
                  <img
                    style={{ width: "100%" }}
                    src={require(`../../assets/photos/${photo.photo}`)}
                    alt={`${photo.photo}`}
                  />
                </Col>
              </Row>
            );
          })}
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <a href={this.props.link} target="_blank" rel="noopener noreferrer">
            <div className="btn btn-large btn-outline-info my-4">Réserver</div>
          </a>
        </Modal.Footer>
      </React.Fragment>
    );
  }
}
