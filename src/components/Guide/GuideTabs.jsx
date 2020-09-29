import React, { useState, useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import GrandGite from "../../assets/guides/gg.json";
import PetitGite from "../../assets/guides/pg.json";
import Spa from "../../assets/guides/spa.json";
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
      {console.log(data)}

      <Row>
        <Col>
          <span>{data.description}</span>
        </Col>
      </Row>
      <Row>
        <Col className="col-3">
          <Nav variant="pills" className="flex-column">
            {data.content.map((category) => (
              <Nav.Item className="py-1" key={category.key}>
                <Nav.Link
                  onSelect={() => setActiveKey(category.key)}
                  eventKey={category.key}
                >
                  {category.title}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Col>
        <Col className="col">
          <Tab.Content>
            {data.content.map((category) => (
              <Tab.Pane key={category.key} eventKey={category.key}>
                {category.content}
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};
