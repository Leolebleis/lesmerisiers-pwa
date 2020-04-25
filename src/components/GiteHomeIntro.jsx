import React from "react";
import Card from "react-bootstrap/Card";
import FlipCard from "./react-springs/FlipCard";
import Col from "react-bootstrap/Col";

export default class GiteHomeIntro extends React.Component {
  render(props) {
    return (
      <Col className="col-12 col-md-4">
        <Card className="bg-white shadow mt-3">
          <FlipCard recto={this.props.recto} verso={this.props.verso} />
          <div className="px-5 ">
            <h2 className="gradient-multiline mt-2">{this.props.title}</h2>
            <p className="text-justify">{this.props.children}</p>
            <div className="text-center">
              <a
                href={this.props.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="btn btn-large btn-outline-info my-4 ">
                  Réserver
                </div>
              </a>
            </div>
          </div>
        </Card>
      </Col>
    );
  }
}
