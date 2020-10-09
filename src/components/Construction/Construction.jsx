import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactGoogleSlides from "react-google-slides";
import { Trans, useTranslation } from "react-i18next";
import MetaDecorator from "../MetaDecorator";

export default () => {
  const { t } = useTranslation(["construction", "utils"]);

  return (
    <Container>
      <Row className="mb-3">
        <Col>
          <p className="lead">
            <Trans
              i18nKey="construction:1"
              components={{ bold: <b />, italic: <i /> }}
            />
          </p>
          <p className="lead">{t("2")}</p>
          <blockquote className="blockquote m-0 text-info d-flex justify-content-center">
            <h2>« {t("quote")} »</h2>
          </blockquote>
          <p className="d-flex justify-content-end lead">— {t("signature")}</p>
        </Col>
      </Row>
      <Row>
        <Col className="col-10 text-center m-auto">
          <ReactGoogleSlides
            width="100%"
            slidesLink="https://docs.google.com/presentation/d/1JCkiFGOHxMvyP-iN_a6rf9Q1W7DCmqa3CL1wViZfQKg"
            slideDuration={5}
            showControls
            loop
          />
        </Col>
      </Row>

      <MetaDecorator title={t("utils:titles.construction")} description={t("utils:descriptions.construction")} />
    </Container>
  );
};
