import React, { useState, useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Line } from "../Layout";

import MarkdownViewer from "./MarkdownViewer";

import GrandGite from "../../assets/guides/gg/gg.json";
import PetitGite from "../../assets/guides/pg/pg.json";
import Spa from "../../assets/guides/spa/spa.json";
import Default from "../../assets/guides/default.json";

export default (props) => {
  let [activeKey, setActiveKey] = useState();

  let data;

  if (props.active === "gg") data = GrandGite;
  if (props.active === "pg") data = PetitGite;
  if (props.active === "spa") data = Spa;
  if (props.active === "default") data = Default;

  useEffect(() => {
    setActiveKey("default");
  }, [props]);

  return (
    <Tab.Container
      id="left-tabs-example"
      activeKey={activeKey}
      defaultActiveKey="default"
    >
      <Row>
        <Col className="mb-3 lead">
          <span>{data.description}</span>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col className="col-12 col-md-3">
          <Nav variant="pills" className="flex-column">
            {data.content.map((category) => (
              <Nav.Item className="py-1" key={category.key}>
                <Nav.Link
                  className="btn-outline-info"
                  onSelect={() => setActiveKey(category.key)}
                  eventKey={category.key}
                >
                  {category.title}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Col>
        <Line className="px-2 my-3" />
        <Col className="col">
          <Tab.Content>
            {data.content.map((category) => {
              return (
                <Tab.Pane key={category.key} eventKey={category.key}>
                  <MarkdownViewer fileName={`${data.id}/${category.content}`} />
                </Tab.Pane>
              );
            })}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};
