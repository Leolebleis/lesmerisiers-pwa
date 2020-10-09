import React, { useState, useEffect } from "react";
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
import MetaDecorator from "../MetaDecorator";
import { useTranslation } from "react-i18next";

const Button = styled.button`
  padding: 10px;

  @media (max-width: 576px) {
    padding: 2px;
    margin: 2px;
  }

  border-radius: 5px;
`;

export default () => {
  const { t, i18n } = useTranslation(["region", "utils"]);
  let language = i18n.language.substring(0, 2);

  let [data, setData] = useState(
    require(`../../assets/places-${language}.json`)
  );
  let [filter, setFilter] = useState("any");
  let [filteredList, setFilteredList] = useState(data);

  useEffect(() => {
    let data = require(`../../assets/places-${language}.json`);
    setData(data);
    setFilteredList(data);
  }, [language]);

  useEffect(() => {
    if (!(filter === "any")) {
      setFilteredList(data.filter((element) => element.category === filter));
    } else {
      setFilteredList(data);
    }
  }, [filter, data]);

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

  let generateTableHeaders = () => {
    const headerItems = categories.map((element) => {
      const CustomIcon = element.icon;
      return (
        <Col className="col-6 col-md-3 h-100">
          <Button
            key={element.id}
            className={`btn w-100 h-100 ${
              element.id === filter ? "btn-info" : "btn-outline-info"
            }`}
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
    setFilter(event.currentTarget.id);
  };

  return (
    <Container className="mb-5">
      <TableExplanation />
      {generateTableHeaders()}
      {/* Render all the elements sorted */}
      {filteredList.map((element) => {
        return <PlaceItem key={element.name} listItem={element} />;
      })}

      <MetaDecorator
        title={t("utils:titles.region")}
        description={t("utils:descriptions.region")}
      />
    </Container>
  );
};
