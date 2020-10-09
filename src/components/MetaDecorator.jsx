import React from "react";
import { Helmet } from "react-helmet";

export default (props) => {
  return (
    <Helmet>
      <title>Les Merisiers | {props.title}</title>
      <meta name="description" content={props.description} />
    </Helmet>
  );
};
