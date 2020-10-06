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

export default (props) => {
  const { t, i18n } = useTranslation("home");

  const language = i18n.language.substring(0, 2);

  let pictureData;
  if (props.title === "Gîte 4 à 6 personnes") {
    pictureData = require(`../../assets/guides/${language}/pg/pg-photos.json`);
  } else if (props.title === "Gîte 8 à 10 personnes") {
    pictureData = require(`../../assets/guides/${language}/gg/gg-photos.json`);
  } else {
    pictureData = require(`../../assets/guides/${language}/mg/mg-photos.json`);
  }

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
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
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <div className="btn btn-large btn-outline-info my-4">{t("book")}</div>
        </a>
      </Modal.Footer>
    </>
  );
};
