import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IconContext } from "react-icons";
import { FiExternalLink } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { Line } from "../Layout";

export default class PlaceItem extends React.Component {
  render() {
    return (
      <React.Fragment>
        <hr />
        <Card body className="pl-0 shadow-on-hover">
          <Row className="no-gutters h-100">
            <Col className="col-12 col-md-10 pr-5">
              <div className="d-flex font-weight-bold">
                <a
                  href={this.props.listItem.website}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-info"
                >
                  {this.props.listItem.name}
                  <span className="ml-2">
                    <IconContext.Provider value={{ size: "1em" }}>
                      <FiExternalLink />
                    </IconContext.Provider>
                  </span>
                </a>
              </div>
              <p>{this.props.listItem.description}</p>
            </Col>
            <Line />
            <Col className="d-flex justify-content-center align-items-center">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURI(
                  `${this.props.listItem.name} ${this.props.listItem.address}`
                )}`}
                rel="noopener noreferrer"
                target="_blank"
                className="p-3 text-info" // For mobile to display correctly
              >
                <IconContext.Provider value={{ size: "3em" }}>
                  <FiMapPin />
                </IconContext.Provider>
              </a>
            </Col>
          </Row>
        </Card>
      </React.Fragment>
    );
  }
}
