import React from "react";

export default class GiteDetails extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>{this.props.title}</div>
      </React.Fragment>
    );
  }
}
