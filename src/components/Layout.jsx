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

  .gradient-multiline {
    position: relative;
    background-color: #fff;
    line-height: 1.5em;
    overflow: hidden;
  }

  .padding-0 {
    padding-left: 0px;
    padding-right: 0px;
  }

  @supports (mix-blend-mode: lighten) {
    .gradient-multiline::after {
      position: absolute;
      content: "";
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      background: linear-gradient(60deg, #3629a2, #00ceff);

      mix-blend-mode: lighten;
    }
  }

  .jumbotron {
    border-radius: 0px;
  }

  .card {
    font-size: 1.1rem;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export const Line = styled.div`
  border-left: 1px solid lightgray;
  @media (max-width: 576px) {
    border-left: none;
    border-top: 1px dashed grey;
    width: 100%;
  }
`;

export default class Layout extends React.Component {
  render() {
    return <Styles>{this.props.children}</Styles>;
  }
}
