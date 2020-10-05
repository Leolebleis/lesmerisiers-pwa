import React from "react";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 530px;
  @media (max-width: 576px) {
    height: 33vh;
  }
`;

export default () => {
  const { t } = useTranslation("home");

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
                <p className="text-right lead pt-3 sticky-top">{photo.title}</p>
              </Col>
              <Col className="col-12 col-md-7">
                <Image
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
          <div className="btn btn-large btn-outline-info my-4">{t("book")}</div>
        </a>
      </Modal.Footer>
    </React.Fragment>
  );
};
