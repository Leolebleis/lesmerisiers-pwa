import React from "react";
import Container from "react-bootstrap/Container";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import { AiFillHeart } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useTranslation } from "react-i18next";

export default () => {
  const { t, i18n } = useTranslation("utils");

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Container className="pb-5">
      <Row className="d-flex justify-content-end align-items-center">
        <Col className="col-6 col-md-3">{t("language")}</Col>
        <Col className="col-6 col-md-3">
          <Form.Control
            defaultValue={i18n.language}
            as="select"
            onChange={(event) => changeLanguage(event)}
            custom
          >
            <option value="fr">Français</option>
            <option value="en">English</option>
          </Form.Control>
        </Col>
      </Row>

      <hr />

      <Row>
        <div className="w-50 pl-3">
          <p className="m-0">&copy; {t("copyright")}</p>
          <div>
            <a
              href="https://www.lbf-paysagiste.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-info"
            >
              <span>{t("lbf")}</span>
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
};
