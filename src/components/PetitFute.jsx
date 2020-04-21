import React from "react";
import petitFuteImage from "../assets/logo-label-petit-fute.png";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import { FaQuoteLeft } from "react-icons/fa";
import { IconContext } from "react-icons";

const Styles = styled.div`
  .blockquote-custom {
    position: relative;
    font-size: 1.1rem;
  }

  .blockquote-custom-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -25px;
    left: 50px;
  }

  .block {
    width: 50%;
    @media (max-width: 576px) {
      width: 100%;
    }
  }

  a:hover,
  .div:hover,
  .p:hover {
    text-decoration: none;
    color: black;
  }
`;

export default class PetitFute extends React.Component {
  render() {
    return (
      <Styles>
        <Jumbotron>
          <Container>
            <Row className="justify-content-center">
              <div className="block shadowOnHover">
                <a
                  href="https://www.petitfute.com/v862-turckheim-68230/c1166-hebergement/c153-gite/1714469-residence-les-merisiers.html"
                  title="Petit Futé"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <blockquote className="blockquote blockquote-custom bg-white p-5 m-0 shadow rounded">
                    <div className="blockquote-custom-icon bg-info shadow-sm noHover">
                      <IconContext.Provider
                        value={{
                          color: "white",
                          className: "global-class-name",
                        }}
                      >
                        <FaQuoteLeft />
                      </IconContext.Provider>
                    </div>
                    <p className="mb-0 mt-2 font-italic" style={{ color: "black" }}>
                      Matériaux haut de gamme, mobilier design, chambres hyper
                      cosy, équipements de cuisine et sanitaires flambant neufs,
                      spa extérieur : la Résidence Les Merisiers tutoie
                      l'exception sans aucune faute de goût !
                    </p>
                    <footer className="blockquote-footer pt-4 mt-4 border-top">
                      <img
                        src={petitFuteImage}
                        className="pl-3"
                        alt="Petit Futé"
                        width="100"
                      />
                    </footer>
                  </blockquote>
                </a>
              </div>
            </Row>
          </Container>
        </Jumbotron>
      </Styles>
    );
  }
}
