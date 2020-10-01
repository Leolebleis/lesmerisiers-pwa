import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { BiBuildings as GrandGite } from "react-icons/bi";
import { BiBuilding as PetitGite } from "react-icons/bi";
import { FaHotTub as Spa } from "react-icons/fa";

import GuideTabs from "./GuideTabs";

const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  background-color: transparent;

  @media (max-width: 576px) {
    padding: 2px;
    margin: 2px;
  }
`;

const categories = [
  {
    name: "Petit Gîte",
    id: "pg",
    icon: PetitGite,
  },
  {
    name: "Grand Gîte",
    id: "gg",
    icon: GrandGite,
  },
  {
    name: "SPA",
    id: "spa",
    icon: Spa,
  },
];

export default class Guide extends React.Component {
  state = {
    active: "default",
  };

  handleClick = (event) => {
    this.setState({
      active: event.currentTarget.id,
    });
  };

  render() {
    return (
      <Container>
        {/* put the headers for GG/PG/SPA */}
        <Row>
          {categories.map((category) => {
            const CustomIcon = category.icon;
            return (
              <Col className="h-100" key={category.id}>
                <Button
                  key={category.id}
                  className="w-100 h-100 btn-outline-info"
                  onClick={this.handleClick}
                  id={category.id}
                >
                  <div>
                    {/* !!! Having icons in buttons can make them bug if you don't use event.currentTarget in the onClick function !!! */}
                    <IconContext.Provider value={{ size: "2em" }}>
                      <CustomIcon />
                    </IconContext.Provider>
                  </div>
                  {category.name}
                </Button>
              </Col>
            );
          })}
        </Row>
        <hr />

        <GuideTabs active={this.state.active} />
      </Container>
    );
  }
}
