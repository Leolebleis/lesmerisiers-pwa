import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextField from "@material-ui/core/TextField";
import { IconContext } from "react-icons";
import { FiSend } from "react-icons/fi";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        className="border border-white rounded "
        noValidate
        autoComplete="off"
        onSubmit={this.submitForm}
        action="https://formspree.io/mbjkpdwv"
        method="POST"
      >
        <div className="md-form border-white border">
          <Row className="d-flex justify-content-center">
            <Col className="col-12">
              <div className="input-group">
                <TextField
                  fullWidth
                  className="mx-5 mt-2"
                  id="standard-basic"
                  name="nom et prénom"
                  label="Nom et prénom"
                />
              </div>
              <div className="input-group">
                <TextField
                  fullWidth
                  className="mx-5 mt-2"
                  id="standard-basic"
                  name="e-mail"
                  label="E-mail"
                />
              </div>
              <div className="input-group">
                <TextField
                  fullWidth
                  className="mx-5 mt-2"
                  id="standard-basic"
                  name="sujet"
                  label="Sujet"
                />
              </div>
              <div className="input-group">
                <TextField
                  fullWidth
                  className="mx-5 mt-2"
                  id="standard-basic"
                  name="message"
                  label="Message"
                />
              </div>
            </Col>
          </Row>
        </div>
        {status === "SUCCESS" ? (
          <p>Merci!</p>
        ) : (
          <button className="btn btn-large btn-outline-info my-4">
            <span className="align-middle">Envoyer</span>
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
        {status === "ERROR" && (
          <p className="text-center">Oups! Une erreur s'est produite.</p>
        )}
      </form>
    );
  }

  submitForm(ev) {
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
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
