import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { useTranslation } from "react-i18next";

export default (props) => {
  const { i18n } = useTranslation("guide");
  let language = i18n.language.substring(0, 2);

  let [markdown, setMarkdown] = useState("");

  useEffect(() => {
    const contentPath = require(`../../assets/guides/${language}/${props.fileName}.md`);

    fetch(contentPath)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, [props.fileName, language]);

  return (
    <>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
    </>
  );
};
