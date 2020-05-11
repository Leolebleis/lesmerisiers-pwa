import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Sidebar from "../react-springs/TreeList/Sidebar";

export default class Guide extends React.Component {
  state = {
    active: "main",
  };

  changeContent = (props) => {
    console.log(this.props.name);
    console.log("hello");
  };

  render() {
    return (
      <Container>
        <Row>
          <Col className="text-right col-auto">
            <Card className="p-4 align-content-end d-inline-flex text-left border-0">
              <Sidebar changeContent={this.changeContent} />
            </Card>
          </Col>
          <Col className="col-auto">
            <Card className="p-4 align-content-end d-inline-flex text-left border-0">
              <p>Text</p>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
