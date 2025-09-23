import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { IconContext } from "react-icons";
import { FiSend } from "react-icons/fi";
import { useTranslation } from "react-i18next";

export default (props) => {
  let [status, setStatus] = useState("");

  const { t } = useTranslation("utils");

  function submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  }

  return (
    <form
      className="border border-white rounded "
      noValidate
      autoComplete="off"
      onSubmit={submitForm}
      action="https://formspree.io/f/xzbanjaj"
      method="POST"
    >
      <div className="md-form border-white border">
        <Row className="d-flex justify-content-center">
          <Col className="col-12">
            <Form.Group className="mx-3 mt-2" controlId="name">
              <Form.Label>{t("form.name")}</Form.Label>
              <Form.Control name="nom et prénom" type="text" />
            </Form.Group>
            <Form.Group className="mx-3 mt-2" controlId="email">
              <Form.Label>{t("form.email")}</Form.Label>
              <Form.Control name="e-mail" type="email" />
            </Form.Group>
            <Form.Group className="mx-3 mt-2" controlId="subject">
              <Form.Label>{t("form.subject")}</Form.Label>
              <Form.Control name="sujet" type="text" />
            </Form.Group>
            <Form.Group className="mx-3 mt-2" controlId="message">
              <Form.Label>{t("form.message")}</Form.Label>
              <Form.Control as="textarea" name="message" rows={3} />
            </Form.Group>
          </Col>
        </Row>
      </div>
      {status === "SUCCESS" ? (
        <p>Merci!</p>
      ) : (
        <button className="btn btn-large btn-outline-info my-4">
          <span className="align-middle">{t("form.send")}</span>
          <span className="ps-1">
            <IconContext.Provider
              value={{
                size: "1em",
              }}
            >
              <FiSend />
            </IconContext.Provider>
          </span>
        </button>
      )}
      {status === "ERROR" && <p className="text-center">{t("form.error")}</p>}
    </form>
  );
};
