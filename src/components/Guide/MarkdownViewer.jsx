import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown/with-html";
import styled from "styled-components";

const Styles = styled.div`
  h3 {
    /* padding-bottom: 1%; */
  }
`;

export default (props) => {
  let [markdown, setMarkdown] = useState();

  useEffect(() => {
    console.log(props.fileName);

    const contentPath = require(`../../assets/guides/${props.fileName}.md`);

    fetch(contentPath)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, [props.fileName]);

  return (
    <Styles>
      <ReactMarkdown source={markdown} escapeHtml={false} />
    </Styles>
  );
};
