import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styled from "styled-components";

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

export default class DenseAppBar extends React.Component {
  state = {
    navBackground: "transparent",
    textColor: `${window.innerWidth > 576 ? "lightgray" : "gray"}`,
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      let backgroundColor = "transparent";
      if (!(window.innerWidth < 576)) {
        backgroundColor = window.scrollY < 100 ? "transparent" : "white";
      }

      const textColor =
        window.scrollY < 100 && window.innerWidth > 576 ? "lightgray" : "gray";

      this.setState({
        navBackground: backgroundColor,
        textColor: textColor,
      });
    });
  }

  render() {
    return (
      <Styles>
        <Navbar
          className="fixed-top"
          style={{
            backgroundColor: `${this.state.navBackground}`,
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
                style={{ color: `${this.state.textColor}` }}
              >
                Accueil
              </Nav.Link>
              <Nav.Link
                eventKey="2"
                href="region"
                style={{ color: `${this.state.textColor}` }}
              >
                Que faire dans la région ?
              </Nav.Link>
              <Nav.Link
                eventKey="3"
                href="guide"
                style={{ color: `${this.state.textColor}` }}
              >
                Guide de séjour
              </Nav.Link>
              <NavDropdown
                title={
                  <span style={{ color: `${this.state.textColor}` }}>
                    Nos Gîtes
                  </span>
                }
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="/gite4a6">
                  4 à 6 personnes
                </NavDropdown.Item>
                <NavDropdown.Item href="/gite8a10">
                  8 à 10 personnes
                </NavDropdown.Item>
                <NavDropdown.Item href="/gite12a16">
                  12 à 16 personnes
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
              <Nav.Link
                eventKey="4"
                href="construction"
                style={{ color: `${this.state.textColor}` }}
              >
                La Construction
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    );
  }
}
