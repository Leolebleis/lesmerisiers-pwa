import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import styled, { createGlobalStyle } from "styled-components";
import GiteDetails from "./GiteDetails";
import { IconContext } from "react-icons";
import { AiOutlineFullscreen } from "react-icons/ai";
import { FaSwimmingPool, FaBath, FaBed, FaTree, FaHome } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Global = createGlobalStyle`
  .modal-90w {
    width: 95%;
    max-width: 100%;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  @media (max-width: 576px) {
    height: 30vh;
  }

  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const Styles = styled.div`
  .details-button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 1%;
    right: 5%;
  }

  .image {
    cursor: pointer;
  }
`;

export default (props) => {
  let [show, setShow] = useState(false);

  const { t } = useTranslation("home");

  const isLeft = props.isLeft === "true" ? true : false;

  let metrics = [
    {
      icon: FaBath,
      label: `${props.bathrooms} ${t("metrics.bathrooms")}`,
    },
    {
      icon: FaBed,
      label: `${props.bedrooms} ${t("metrics.bedrooms")}`,
    },
    {
      icon: FaTree,
      label: `${props.garden}m\u00b2`,
    },
    {
      icon: FaHome,
      label: `${props.interior}m\u00b2`,
    },
  ];

  if (props.jacuzzi) {
    metrics.push({
      icon: FaSwimmingPool,
      label: t("metrics.spa"),
    });
  }

  let handleOpen = () => {
    setShow(true);
  };

  let handleClose = () => {
    setShow(false);
  };

  return (
    <Styles>
      <Global />
      <Col className="col-12">
        <Card className="bg-white shadow mt-4">
          <Row className="h-100">
            <Col
              className={`col-12 col-md-4 ${
                isLeft ? "order-md-1" : "order-md-2"
              }`}
            >
              <div className="w-100 h-100 image" onClick={handleOpen}>
                <Image
                  className={`${isLeft ? "rounded-left" : "rounded-right"}`}
                  image={props.image}
                />
                <button className="details-button btn-info">
                  <IconContext.Provider value={{ size: "2em" }}>
                    <AiOutlineFullscreen />
                  </IconContext.Provider>
                </button>
              </div>
            </Col>
            <Card.Body
              className={`col-12 col-md-8 px-5 ${
                isLeft ? "order-md-2 pl-md-3" : "order-md-1 pr-md-3"
              }`}
            >
              <h2 className="gradient-multiline mt-2">{props.title}</h2>
              <p className="text-justify">{props.children}</p>
              <Row className="justify-content-center">
                {metrics.map((metric) => {
                  let CustomIcon = metric.icon;
                  return (
                    <Col key={metric.label} className="col-auto">
                      <div className="label d-inline-flex align-items-center">
                        <IconContext.Provider value={{ size: "1.5em" }}>
                          <CustomIcon />
                        </IconContext.Provider>
                        <span className="pl-2">{metric.label}</span>
                      </div>
                    </Col>
                  );
                })}
              </Row>
              <div className="text-center">
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                  <div className="btn btn-large btn-outline-info my-4">
                    {t("book")}
                  </div>
                </a>

                <Modal
                  dialogClassName="modal-90w"
                  show={show}
                  onHide={handleClose}
                >
                  <GiteDetails title={props.title} link={props.link} />
                </Modal>
              </div>
            </Card.Body>
          </Row>
        </Card>
      </Col>
    </Styles>
  );
};
