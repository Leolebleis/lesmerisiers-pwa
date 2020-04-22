import React from "react";
import Card from "react-bootstrap/Card";
import { FiExternalLink } from "react-icons/fi";
import { IconContext } from "react-icons";

export default class PlaceItem extends React.Component {
  render() {
    return (
      <React.Fragment>
        <hr />
        <Card body className="text shadowOnHover">
          <div className="row pl-3 font-weight-bold">
            {this.props.listItem.name}
            <a
              href={this.props.listItem.website}
              rel="noopener noreferrer"
              target="_blank"
              className="ml-2"
            >
              <IconContext.Provider value={{ size: "1em" }}>
                <FiExternalLink />
              </IconContext.Provider>
            </a>
          </div>
          <p>{this.props.listItem.description}</p>
        </Card>
      </React.Fragment>
    );
  }
}
