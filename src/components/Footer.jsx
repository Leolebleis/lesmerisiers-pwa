import React from "react";
import Container from "react-bootstrap/Container";
import { FaFacebook } from "react-icons/fa";
import { IconContext } from "react-icons";
import Row from "react-bootstrap/Row";

export default class Footer extends React.Component {
  render() {
    return (
      <Container className="p-5">
        <hr />
        <Row>
          <p className="pl-3 w-50">
            Les photos sont la propriété de la SCI Les Merisiers.
          </p>
          <div align="right" className="w-50 align-content-right pr-3">
            <a
              href="https://www.facebook.com/lesmerisiers"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconContext.Provider value={{ size: "2em" }}>
                <FaFacebook />
              </IconContext.Provider>
            </a>
          </div>
        </Row>
      </Container>
    );
  }
}
