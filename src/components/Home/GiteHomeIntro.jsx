import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import GiteDetails from "./GiteDetails";
import { AiOutlineFullscreen } from "react-icons/ai";
import { IconContext } from "react-icons";

// I'm using this since styled-components is hard to work with for Modals
import "./modal.css";

const Image = styled.div`
  width: 100%;
  height: 100%;
  @media (max-width: 576px) {
    height: 30vh;
  }

  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const Styles = styled.div`
  .details-button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 1%;
    right: 5%;
  }

  .image {
    cursor: pointer;
  }
`;

export default class GiteHomeIntro extends React.Component {
  state = {
    show: false,
  };

  handleOpen = () => {
    this.setState({
      show: true,
    });
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    const isLeft = this.props.isLeft === "true" ? true : false;

    return (
      <Styles>
        <Col className="col-12">
          <Card className="bg-white shadow mt-3">
            <Row className="h-100">
              <Col
                className={`col-12 col-md-4 ${
                  isLeft ? "order-md-1" : "order-md-2"
                }`}
              >
                <div className="w-100 h-100 image" onClick={this.handleOpen}>
                  <Image
                    className={`${isLeft ? "rounded-left" : "rounded-right"}`}
                    image={this.props.image}
                  />
                  <button className="details-button btn-info">
                    <IconContext.Provider value={{ size: "2em" }}>
                      <AiOutlineFullscreen />
                    </IconContext.Provider>
                  </button>
                </div>
              </Col>
              <Card.Body
                className={`col-12 col-md-8 px-5 ${
                  isLeft ? "order-md-2" : "order-md-1"
                }`}
              >
                <h2 className="gradient-multiline mt-2">{this.props.title}</h2>
                <p className="text-justify">{this.props.children}</p>
                <div className="text-center">
                  <a
                    href={this.props.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="btn btn-large btn-outline-info my-4">
                      Réserver
                    </div>
                  </a>

                  <Modal
                    dialogClassName="modal-90w"
                    show={this.state.show}
                    onHide={this.handleClose}
                  >
                    <GiteDetails title={this.props.title} link={this.props.link} />
                  </Modal>
                </div>
              </Card.Body>
            </Row>
          </Card>
        </Col>
      </Styles>
    );
  }
}
