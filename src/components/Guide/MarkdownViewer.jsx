import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown/with-html";
import { useTranslation } from "react-i18next";

export default (props) => {
  const { i18n } = useTranslation("guide");

  let [markdown, setMarkdown] = useState();

  useEffect(() => {
    const contentPath = require(`../../assets/guides/${i18n.language}/${props.fileName}.md`);

    fetch(contentPath)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, [props.fileName, i18n.language]);

  return (
    <>
      <ReactMarkdown source={markdown} escapeHtml={false} />
    </>
  );
};
