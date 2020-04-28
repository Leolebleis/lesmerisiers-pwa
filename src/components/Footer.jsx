import React from "react";
import Container from "react-bootstrap/Container";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import { AiFillHeart } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import Row from "react-bootstrap/Row";

export default class Footer extends React.Component {
  render() {
    return (
      <Container className="p-5">
        <hr />
        <Row>
          <div className="w-50 pl-3">
            <p className="m-0">
              &copy; Les photos sont la propriété de la SCI Les Merisiers.
            </p>
            <div>
              <a
                href="https://www.lbf-paysagiste.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-info"
              >
                <span>En partenariat avec LBF Paysagisme.</span>
                <span className="ml-2">
                  <IconContext.Provider value={{ size: "1em" }}>
                    <FiExternalLink />
                  </IconContext.Provider>
                </span>
              </a>
            </div>
            <div>
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
                <span> by Leo Le Bleis.</span>
                <span className="ml-2">
                  <IconContext.Provider value={{ size: "1em" }}>
                    <FiExternalLink />
                  </IconContext.Provider>
                </span>
              </a>
            </div>
          </div>

          <div className="w-50 pr-3 text-right">
            <div className="pb-2">
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
            <a
              href="https://github.com/Leolebleis/lesmerisiers-pwa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-info"
            >
              <IconContext.Provider value={{ size: "2em" }}>
                <FaGithub />
              </IconContext.Provider>
            </a>
          </div>
        </Row>
      </Container>
    );
  }
}
