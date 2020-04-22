import React from "react";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import PlaceItem from "./PlaceItem";

const data = require("../assets/places.json");

export const Button = styled.button`
  background-color: transparent;
  font-family: "helvetica";
  font-weight: 100;
  font-size: 20px;
  text-align: center;
  color: #5c7886;

  border: solid 2px #5c7886;
  border-radius: 50px;

  padding: 10px 50px;
  margin: 10px 10px;

  -webkit-transition-duration: 200ms;
  transition-duration: 200ms;

  &:hover {
    background-color: #5c7886;
    color: #fff;
  }
`;

export default class Table extends React.Component {
  state = {
    filter: "any",
    places: data.places,
    filteredList: data.places,
  };

  handleClick = (event) => {
    if (event.target.id === "any") {
      this.setState({
        filter: event.target.id,
        filteredList: data.places,
      });
    } else {
      let filteredList = data.places.filter((element) => {
        return element.category === event.target.id;
      });
      this.setState({
        filter: event.target.id,
        filteredList: filteredList,
      });
    }
  };

  render() {
    return (
      <Container className="mb-5">
        <Row className="justify-content-center">
          <Button onClick={this.handleClick} id="any">
            Tous
          </Button>
          <Button onClick={this.handleClick} id="Lieux notoires">
            Lieux notoires
          </Button>
          <Button onClick={this.handleClick} id="Musées">
            Musées
          </Button>
          <Button onClick={this.handleClick} id="Bars &amp; Restaurants">
            Bars &amp; Restaurants
          </Button>
        </Row>
        {this.state.filteredList.map((element) => {
          return <PlaceItem key={element.name} listItem={element} />;
        })}
      </Container>
    );
  }
}
