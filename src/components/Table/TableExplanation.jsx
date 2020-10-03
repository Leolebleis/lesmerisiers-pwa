import React from "react";
import { IconContext } from "react-icons";
import { FiExternalLink } from "react-icons/fi";
import { useTranslation } from "react-i18next";

export default () => {
  const { t } = useTranslation("region");

  return (
    <div className="lead text-justify">
      <p>{t("intro.1")}</p>
      <p>
        {t("intro.2")}
        <a
          href="https://www.lalsace.fr/pour-sortir/Loisir/Alsace/Haut-rhin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-info"
        >
          {" "}
          {t("intro.3")}
          <span className="ml-2">
            <IconContext.Provider value={{ size: "1em" }}>
              <FiExternalLink />
            </IconContext.Provider>
          </span>
        </a>
        ,
        <a
          href="https://www.haut-rhin.fr/content/les-mus%C3%A9es"
          target="_blank"
          rel="noopener noreferrer"
          className="text-info"
        >
          {" "}
          {t("intro.4")}
          <span className="ml-2">
            <IconContext.Provider value={{ size: "1em" }}>
              <FiExternalLink />
            </IconContext.Provider>
          </span>
        </a>
        ,
        <a
          href={t("links.visitalsace")}
          target="_blank"
          rel="noopener noreferrer"
          className="text-info"
        >
          {" "}
          {t("intro.5")}
          <span className="ml-2">
            <IconContext.Provider value={{ size: "1em" }}>
              <FiExternalLink />
            </IconContext.Provider>
          </span>
        </a>
        {t("intro.6")}
        <a
          href="https://www.augredesbieres.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-info"
        >
          {" "}
          {t("intro.7")}
          <span className="ml-2">
            <IconContext.Provider value={{ size: "1em" }}>
              <FiExternalLink />
            </IconContext.Provider>
          </span>
        </a>
        .
      </p>
    </div>
  );
};
