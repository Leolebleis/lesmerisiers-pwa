import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/logo192.png";
import styled from "styled-components";

const ImageWrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.22) 5px 5px 5px;
`;

export default class DenseAppBar extends React.Component {
  state = {
    navBackground: "transparent",
    textColor: "lightgray",
    outlineColor: "white",
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const backgroundColor = window.scrollY < 100 ? "transparent" : "white";
      const textColor = window.scrollY < 100 ? "lightgray" : "gray";
      const outlineColor = window.scrollY < 100 ? "white" : "gray";

      this.setState({
        navBackground: backgroundColor,
        textColor: textColor,
        outlineColor: outlineColor,
      });
    });
  }

  render() {
    return (
      <Navbar
        className="fixed-top"
        style={{
          backgroundColor: `${this.state.navBackground}`,
        }}
      >
        <Navbar.Brand href="/">
          <ImageWrapper className="rounded-circle">
            <img src={logo} width="30" height="30" alt="Les Merisiers logo" />
          </ImageWrapper>
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav className="float-right">
            <Nav.Link href="/" style={{ color: `${this.state.textColor}` }}>
              Accueil
            </Nav.Link>
            <Nav.Link
              href="region"
              style={{ color: `${this.state.textColor}` }}
            >
              Que faire dans la région ?
            </Nav.Link>
            <Nav.Link href="guide" style={{ color: `${this.state.textColor}` }}>
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
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="/gite12a16">Something</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link
              href="construction"
              style={{ color: `${this.state.textColor}` }}
            >
              La Construction
            </Nav.Link>
            <Nav.Link
              href="https://www.lbf-paysagiste.com/"
              target="_blank"
              style={{ color: `${this.state.textColor}` }}
            >
              LBF Paysagisme
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
