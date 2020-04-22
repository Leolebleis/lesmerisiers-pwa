import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import PlaceItem from "./PlaceItem";
import { IconContext } from "react-icons";
import { TiInfinity } from "react-icons/ti";
import { FaLandmark } from "react-icons/fa";
import { GiPaintBrush } from "react-icons/gi";
import { TiBeer } from "react-icons/ti";
import styled from "styled-components";

const Button = styled.button`
  padding: 10px;
  margin: 10px;
  width: 20%;

  @media (max-width: 576px) {
    padding: 2px;
    margin: 2px;
    width: 23%;
  }

  background-color: transparent;
  border-radius: 5px;
`;

const data = require("../assets/places.json");

const categories = [
  {
    name: "Tous",
    id: "any",
    icon: TiInfinity,
  },
  {
    name: "Lieux notoires",
    id: "Lieux notoires",
    icon: FaLandmark,
  },
  {
    name: "Musées",
    id: "Musées",
    icon: GiPaintBrush,
  },
  {
    name: "Bars & Restaurants",
    id: "Bars & Restaurants",
    icon: TiBeer,
  },
];

export default class Table extends React.Component {
  state = {
    filter: "any",
    places: data.places,
    filteredList: data.places,
  };

  generateTableHeaders = () => {
    const headerItems = categories.map((element) => {
      console.log(`Element: ${element.name}`);
      const CustomIcon = element.icon;
      return (
        <Button
          key={element.id}
          className="btn-outline-info"
          onClick={this.handleClick}
          id={element.id}
        >
          <div>
            {/* !!! Having icons in buttons can make them bug when you use event.currentTarget in the onClick function !!! */}
            <IconContext.Provider value={{ size: "2em" }}>
              <CustomIcon />
            </IconContext.Provider>
          </div>
          {element.name}
        </Button>
      );
    });

    return <Row className="justify-content-center">{headerItems}</Row>;
  };

  handleClick = (event) => {
    console.log("hey");
    if (event.currentTarget.id === "any") {
      console.log("hey");
      this.setState({
        filter: event.currentTarget.id,
        filteredList: data.places,
      });
    } else {
      let filteredList = data.places.filter((element) => {
        return element.category === event.currentTarget.id;
      });
      this.setState({
        filter: event.currentTarget.id,
        filteredList: filteredList,
      });
    }
  };

  render() {
    return (
      <Container className="mb-5">
        <Row className="justify-content-center">
          <Button
            className="btn-outline-info"
            onClick={this.handleClick}
            id="any"
          >
            <IconContext.Provider value={{ size: "2em" }}>
              <TiInfinity />
            </IconContext.Provider>
            Tous
          </Button>
          <Button
            className="btn-outline-info"
            onClick={this.handleClick}
            id="Lieux notoires"
          >
            <IconContext.Provider value={{ size: "2em" }}>
              <FaLandmark />
            </IconContext.Provider>
            Lieux notoires
          </Button>
          <Button
            className="btn-outline-info"
            onClick={this.handleClick}
            id="Musées"
          >
            <IconContext.Provider value={{ size: "2em" }}>
              <GiPaintBrush />
            </IconContext.Provider>
            Musées
          </Button>
          <Button
            className="btn-outline-info"
            onClick={this.handleClick}
            id="Bars &amp; Restaurants"
          >
            <IconContext.Provider value={{ size: "2em" }}>
              <TiBeer />
            </IconContext.Provider>
            Bars &amp; Restaurants
          </Button>
        </Row>

        {/* Render all the elements sorted */}
        {this.state.filteredList.map((element) => {
          return <PlaceItem key={element.name} listItem={element} />;
        })}
      </Container>
    );
  }
}
