import React from "react";
import styled from "styled-components";

// We use this to set global styling.
const Styles = styled.div`
  .shadow-on-hover {
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px;
    transition: all 0.3s ease-in-out;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.22) 10px 10px 10px;
      transform: translate3d(-3px, -3px, 0px);
    }
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export default class Layout extends React.Component {
  render() {
    return <Styles>{this.props.children}</Styles>;
  }
}
