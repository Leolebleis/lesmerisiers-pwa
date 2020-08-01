import React, { memo, useState } from "react";
import { useSpring, a } from "react-spring";
import { useMeasure, usePrevious } from "./helpers";
import { Frame, Title, Content, toggle } from "./styles";
import * as Icons from "./icons";

const Tree = memo(
  ({ children, name, style, defaultOpen = false }) => {
    const [isOpen, setOpen] = useState(defaultOpen);
    const previous = usePrevious(isOpen);
    const [bind, { height: viewHeight }] = useMeasure();
    const { height, opacity, transform } = useSpring({
      from: { height: 0, opacity: 0, transform: "translate3d(20px,0,0)" },
      to: {
        height: isOpen ? viewHeight : 0,
        opacity: isOpen ? 1 : 0,
        transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`,
      },
    });

    const Icon =
      Icons[`${children ? (isOpen ? "Minus" : "Plus") : "Close"}SquareO`];

    return (
      <Frame>
        <Icon
          style={{ ...toggle, opacity: children ? 1 : 0.3 }}
          onClick={() => setOpen(!isOpen)}
        />
        <Title style={style}>
          {name}
        </Title>
        <Content
          style={{
            opacity,
            height: isOpen && previous === isOpen ? "auto" : height,
          }}
        >
          <a.div style={{ transform }} {...bind} children={children} />
        </Content>
      </Frame>
    );
  }
);

export default class Sidebar extends React.Component {
  handleClick = (event) => {
    console.log(event);
  };

  render() {
    return (
      <React.Fragment>
        <Tree
          name="Accueil"
          defaultOpen
        >
          <Tree name="Équipements des gîtes">
            <Tree name="12 à 16 personnes" />
            <Tree name="8 à 10 personnes" />
            <Tree name="4 à 6 personnes" />
          </Tree>
          <Tree name="Infos pratiques"></Tree>
        </Tree>
      </React.Fragment>
    );
  }
}