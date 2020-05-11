import styled from "styled-components";
import { animated } from "react-spring";

const Frame = styled("div")`
  padding-left: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-x: hidden;
  vertical-align: middle;
  color: rgb(143, 165, 182);
  fill: rgb(143, 165, 182);
`;

const Title = styled("span")`
  vertical-align: middle;
`;

const Content = styled(animated.div)`
  will-change: transform, opacity, height;
  margin-left: 6px;
  padding: 0px 0px 0px 14px;
  border-left: 1px dashed rgb(143, 165, 182);
  overflow: hidden;
`;

const toggle = {
  width: "1em",
  height: "1em",
  marginRight: 10,
  cursor: "pointer",
  verticalAlign: "middle"
};

export { Frame, Content, toggle, Title };
