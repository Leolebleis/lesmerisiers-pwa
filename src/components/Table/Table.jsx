import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IconContext } from "react-icons";
import { TiInfinity } from "react-icons/ti";
import { FaLandmark } from "react-icons/fa";
import { GiPaintBrush } from "react-icons/gi";
import { TiBeer } from "react-icons/ti";
import styled from "styled-components";
import PlaceItem from "./PlaceItem";
import TableExplanation from "./TableExplanation";

const data = require("../../assets/places.json");

const categories = [
  {
    name: "Tout",
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

const Button = styled.button`
  padding: 10px;

  @media (max-width: 576px) {
    padding: 2px;
    margin: 2px;
  }

  background-color: transparent;
  border-radius: 5px;
`;

export default class Table extends React.Component {
  state = {
    filter: "any",
    places: data.places,
    filteredList: data.places,
  };

  generateTableHeaders = () => {
    const headerItems = categories.map((element) => {
      const CustomIcon = element.icon;
      return (
        <Col className="col-6 col-md-3 h-100">
          <Button
            key={element.id}
            className="btn-outline-info w-100 h-100"
            onClick={this.handleClick}
            id={element.id}
          >
            <div>
              {/* !!! Having icons in buttons can make them bug if you don't use event.currentTarget in the onClick function !!! */}
              <IconContext.Provider value={{ size: "2em" }}>
                <CustomIcon />
              </IconContext.Provider>
            </div>
            {element.name}
          </Button>
        </Col>
      );
    });

    return <Row className="justify-content-center h-100">{headerItems}</Row>;
  };

  handleClick = (event) => {
    if (event.currentTarget.id === "any") {
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
        <TableExplanation />
        {this.generateTableHeaders()}
        {/* Render all the elements sorted */}
        {this.state.filteredList.map((element) => {
          return <PlaceItem key={element.name} listItem={element} />;
        })}
      </Container>
    );
  }
}
