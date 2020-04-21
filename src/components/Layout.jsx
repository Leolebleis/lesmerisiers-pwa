import React from "react";
import styled from "styled-components";

const StyledLayout = styled.div`
  .shadowOnHover {
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px;
    transition: all 0.3s ease-in-out;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.22) 10px 10px 10px;
      transform: translate3d(-3px, -3px, 0px);
    }
  }
`;

export default class Layout extends React.Component {
  render(props) {
    return <StyledLayout>{this.props.children}</StyledLayout>;
  }
}
