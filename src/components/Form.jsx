import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextField from "@material-ui/core/TextField";
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
            <div className="input-group">
              <TextField
                fullWidth
                className="mx-3 mt-2"
                id="name"
                name="nom et prénom"
                label={t("form.name")}
              />
            </div>
            <div className="input-group">
              <TextField
                fullWidth
                className="mx-3 mt-2"
                id="email"
                name="e-mail"
                label={t("form.email")}
              />
            </div>
            <div className="input-group">
              <TextField
                fullWidth
                className="mx-3 mt-2"
                id="subject"
                name="sujet"
                label={t("form.subject")}
              />
            </div>
            <div className="input-group">
              <TextField
                fullWidth
                className="mx-3 mt-2"
                id="message"
                name="message"
                label={t("form.message")}
              />
            </div>
          </Col>
        </Row>
      </div>
      {status === "SUCCESS" ? (
        <p>Merci!</p>
      ) : (
        <button className="btn btn-large btn-outline-info my-4">
          <span className="align-middle">{t("form.send")}</span>
          <span className="pl-1">
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
