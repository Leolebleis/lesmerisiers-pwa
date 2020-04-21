import React from "react";
import Row from "react-bootstrap/Row";
import styled from "styled-components";

export const Button = styled.button`
  font-family: "helvetica";
  font-weight: 100;
  font-size: 20px;
  text-align: center;
  color: #5c7886;

  border: solid 2px #5c7886;
  border-radius: 50px;

  padding: 10px 70px;
  margin: 10px 10px;

  -webkit-transition-duration: 200ms;
  transition-duration: 200ms;

  &:hover {
    background-color: #5c7886;
    color: #fff;
  }
`;

export default class Table extends React.Component {

  handleClick(event) {
    console.log(event.target.id);

  }

  render() {
    return (
      <React.Fragment>
        <Row className="justify-content-center">
          <Button onClick={this.handleClick} id="first" >Click me</Button>
          <Button onClick={this.handleClick} id="second" >Click me</Button>
          <Button onClick={this.handleClick} id="third" >Click me</Button>
          <Button onClick={this.handleClick} id="fourth" >Click me</Button>
          <Button onClick={this.handleClick} id="fifth" >Click me</Button>
        </Row>
      </React.Fragment>
    );
  }
}
