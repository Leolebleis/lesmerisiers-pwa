import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { BiBuildings as GrandGite } from "react-icons/bi";
import { BiBuilding as PetitGite } from "react-icons/bi";
import { FaHotTub as Spa } from "react-icons/fa";
import { useTranslation } from "react-i18next";

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

export default () => {
  let { t } = useTranslation("guide");

  const categories = [
    {
      name: t("labels.pg"),
      id: "pg",
      icon: PetitGite,
    },
    {
      name: t("labels.gg"),
      id: "gg",
      icon: GrandGite,
    },
    {
      name: t("labels.spa"),
      id: "spa",
      icon: Spa,
    },
  ];

  let [active, setActive] = useState("default");

  let handleClick = (event) => {
    setActive(event.currentTarget.id);
  };

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
                onClick={handleClick}
                id={category.id}
              >
                <div>
                  {/* !!! Having icons in buttons can make them bug if you don't use event.currentTarget in the onClick function !!! */}
                  <IconContext.Provider value={{ size: "2em" }}>
                    <CustomIcon />
                  </IconContext.Provider>
                </div>
                <p className="lead m-0">{category.name}</p>
              </Button>
            </Col>
          );
        })}
      </Row>
      <hr />

      <GuideTabs active={active} />
    </Container>
  );
};
