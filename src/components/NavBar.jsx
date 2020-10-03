import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

// Image imports
import logo from "../assets/photos/logo192.png";

const collapseColor = window.innerWidth < 576 ? "white" : "transparent";

const Styles = styled.div`
  .navbar-link {
    &:hover {
      color: black;
    }
  }
`;

const ImageWrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.22) 5px 5px 5px;
`;

export default () => {
  const { t } = useTranslation("utils");

  let [navBackground, setNavBackground] = useState("transparent");
  let [textColor, setTextColor] = useState(
    `${window.innerWidth > 576 ? "lightgray" : "gray"}`
  );

  useEffect(() => {
    document.addEventListener("scroll", () => {
      let backgroundColor = "transparent";
      if (!(window.innerWidth < 576)) {
        backgroundColor = window.scrollY < 100 ? "transparent" : "white";
      }

      const textColor =
        window.scrollY < 100 && window.innerWidth > 576 ? "lightgray" : "gray";

      setNavBackground(backgroundColor);
      setTextColor(textColor);
    });
  }, []);

  return (
    <Styles>
      <Navbar
        className="fixed-top"
        style={{
          backgroundColor: `${navBackground}`,
        }}
        expand="lg"
      >
        <Navbar.Toggle style={{ backgroundColor: "white" }} />

        <Navbar.Brand href="/">
          <ImageWrapper className="rounded-circle">
            <img src={logo} width="30" height="30" alt="Les Merisiers logo" />
          </ImageWrapper>
        </Navbar.Brand>

        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{ backgroundColor: `${collapseColor}` }}
          className="pl-3 text-xs-right"
        >
          <Nav className="ml-auto">
            <Nav.Link
              className="navbar-link"
              eventKey="1"
              href="/"
              style={{ color: `${textColor}` }}
            >
              {t("navbar.home")}
            </Nav.Link>
            <Nav.Link
              eventKey="2"
              href="region"
              style={{ color: `${textColor}` }}
            >
              {t("navbar.region")}
            </Nav.Link>
            <Nav.Link
              eventKey="3"
              href="guide"
              style={{ color: `${textColor}` }}
            >
              {t("navbar.guide")}
            </Nav.Link>
            <Nav.Link
              eventKey="4"
              href="construction"
              style={{ color: `${textColor}` }}
            >
              {t("navbar.construction")}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};
