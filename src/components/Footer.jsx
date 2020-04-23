import React from "react";
import Container from "react-bootstrap/Container";
import { FaFacebook } from "react-icons/fa";
import { IconContext } from "react-icons";
import { AiFillHeart } from "react-icons/ai";
import Row from "react-bootstrap/Row";

export default class Footer extends React.Component {
  render() {
    return (
      <Container className="p-5">
        <hr />
        <Row>
          <div className="w-50 pl-3">
            <p className="m-0">
              Les photos sont la propriété de la SCI Les Merisiers.
            </p>
            <a
              href="https://leolebleis.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-info"
            >
              <span>Made with </span>
              <IconContext.Provider value={{ size: "1em" }}>
                <AiFillHeart />
              </IconContext.Provider>
              <span> by Leo Le Bleis</span>
            </a>
          </div>

          <div className="w-50 align-content-right pr-3 text-right">
            <a
              href="https://www.facebook.com/lesmerisiers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-info"
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
