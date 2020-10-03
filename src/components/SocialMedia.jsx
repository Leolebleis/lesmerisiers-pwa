import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IconContext } from "react-icons";
import { FaFacebook } from "react-icons/fa";
import { Line } from "./Layout";
import Form from "./Form";
import { useTranslation } from "react-i18next";

export default () => {
  const { t } = useTranslation("utils");
  return (
    <Jumbotron>
      <Container>
        <Row className="justify-content-center">
          <Col className="col-12 col-md-9 p-0 shadow-on-hover">
            <Card className="bg-white p-5 m-0 shadow rounded h-100">
              <Row className="lead justify-content-center text-center h-100">
                <Col className="my-auto">
                  <div className="pb-4">
                    <a
                      href="https://www.facebook.com/lesmerisiers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-info"
                    >
                      <p>{t("followOnFb")}</p>

                      <IconContext.Provider
                        value={{
                          size: "3em",
                        }}
                      >
                        <FaFacebook />
                      </IconContext.Provider>
                    </a>
                  </div>
                </Col>
                <Line />
                <Col className="my-auto">
                  <p className="my-auto pt-4">{t("contactUs")}</p>
                  <Form />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};
