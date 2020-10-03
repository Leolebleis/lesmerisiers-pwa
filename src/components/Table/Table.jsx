import React, { useState } from "react";
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

import { useTranslation } from "react-i18next";

const Button = styled.button`
  padding: 10px;

  @media (max-width: 576px) {
    padding: 2px;
    margin: 2px;
  }

  background-color: transparent;
  border-radius: 5px;
`;

export default () => {
  const { t, i18n } = useTranslation("region");

  const data = require(`../../assets/places-${i18n.language}.json`);

  const categories = [
    {
      name: t("categories.any"),
      id: "any",
      icon: TiInfinity,
    },
    {
      name: t("categories.places"),
      id: "Lieux notoires",
      icon: FaLandmark,
    },
    {
      name: t("categories.museums"),
      id: "Musées",
      icon: GiPaintBrush,
    },
    {
      name: t("categories.bars"),
      id: "Bars & Restaurants",
      icon: TiBeer,
    },
  ];

  let [filteredList, setFilteredList] = useState(data.places);

  let generateTableHeaders = () => {
    const headerItems = categories.map((element) => {
      const CustomIcon = element.icon;
      return (
        <Col className="col-6 col-md-3 h-100">
          <Button
            key={element.id}
            className="btn-outline-info w-100 h-100"
            onClick={handleClick}
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

  let handleClick = (event) => {
    if (event.currentTarget.id === "any") {
      setFilteredList(data.places);
    } else {
      let filteredList = data.places.filter((element) => {
        return element.category === event.currentTarget.id;
      });
      setFilteredList(filteredList);
    }
  };

  return (
    <Container className="mb-5">
      <TableExplanation />
      {generateTableHeaders()}
      {/* Render all the elements sorted */}
      {filteredList.map((element) => {
        return <PlaceItem key={element.name} listItem={element} />;
      })}
    </Container>
  );
};
