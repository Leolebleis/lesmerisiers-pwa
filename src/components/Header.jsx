import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import Jumbotron from "react-bootstrap/Jumbotron";

// Image imports
import GGExterieur from "../assets/photos/GG/GG-exterieur.jpg";
import PGSalon from "../assets/photos/PG/PG-salon.jpg";
import GGSalon from "../assets/photos/GG/GG-salon.jpg";
import banner from "../assets/banner.svg";

const Styles = styled.div`
  .banner {
    object-fit: cover;
    height: 100% !important;
  }

  .jumbotron {
    position: relative;
    padding: 0px;
    height: 75vh;
    width: 100%;
  }

  .carousel,
  .carousel-inner,
  .carousel-item {
    height: 100%;
  }

  .carousel-control-prev,
  .carousel-control-next {
    z-index: 10;
  }

  .overlay {
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
    position: absolute;
    overflow: hidden;
  }

  .lesmerisiers {
    position: absolute;
    max-width: 50%;
    height: auto;
    z-index: 100;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
`;

export default class Header extends React.Component {
  render() {
    return (
      <Styles>
        <Jumbotron className="mb-4">
          <div className="overlay" />
          <div className="position-absolute h-100 w-100 d-flex align-items-center">
            <img className="lesmerisiers" src={banner} alt="Les Merisiers" />
          </div>
          <Carousel interval="5000">
            <Carousel.Item className="text-center">
              <img
                className="d-block w-100 banner"
                src={GGExterieur}
                alt="First slide"
              />
              <Carousel.Caption>
                <p className="lead">
                  Gîtes haut-de-gamme au cœur du vignoble Alsacien
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 banner"
                src={GGSalon}
                alt="Third slide"
              />
              <Carousel.Caption>
                <p className="lead">
                  Un intérieur d'exception dans un cadre d'exception
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 banner"
                src={PGSalon}
                alt="Third slide"
              />
              <Carousel.Caption>
                <p className="lead">
                  Offrez-vous les vacances que vous méritez
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Jumbotron>
      </Styles>
    );
  }
}
