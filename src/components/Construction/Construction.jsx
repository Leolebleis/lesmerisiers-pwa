import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
          <div
            className="w-100"
            style={{ position: "relative", paddingTop: "56.25%" }}
          >
            <iframe
              title="Les Merisiers Construction"
              src="https://docs.google.com/presentation/d/1JCkiFGOHxMvyP-iN_a6rf9Q1W7DCmqa3CL1wViZfQKg/embed?start=true&loop=true&delayms=5000"
              frameBorder="0"
              allow="autoplay"
              allowFullScreen
              style={{
                border: 0,
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </Col>
      </Row>

      <MetaDecorator title={t("utils:titles.construction")} description={t("utils:descriptions.construction")} />
    </Container>
  );
};
