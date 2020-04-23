import React from "react";
import { IconContext } from "react-icons";
import { FiExternalLink } from "react-icons/fi";

export default class TableExplanation extends React.Component {
  render() {
    return (
      <div className="lead text-justify">
        <p>
          Envie de sortir mais vous ne savez pas où ? Pas de problème ! Voici
          une liste de nos coups de cœur et de nos suggestions de choses à faire
          dans la région : restaurants, bars, musées, ou une escapade dans un
          village local... Il y en a pour tous les goûts et tout au long de
          l'année !
        </p>
        <p>
          N'hésitez pas à parcourir d'autres ressources qui peuvent être utiles,
          telles que
          <a
            href="https://www.lalsace.fr/pour-sortir/Loisir/Alsace/Haut-rhin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-info"
          >
            {" "}
            ce calendrier des événements dans la région
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
            cette liste des musées Haut-Rhinois
            <span className="ml-2">
              <IconContext.Provider value={{ size: "1em" }}>
                <FiExternalLink />
              </IconContext.Provider>
            </span>
          </a>
          ,
          <a
            href="https://www.visit.alsace/patrimoine-et-histoire/chateaux-alsace/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-info"
          >
            {" "}
            cette liste des châteaux de la région
            <span className="ml-2">
              <IconContext.Provider value={{ size: "1em" }}>
                <FiExternalLink />
              </IconContext.Provider>
            </span>
          </a>
          , ou encore
          <a
            href="https://www.augredesbieres.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-info"
          >
            {" "}
            cette carte des parcours brassicoles en Alsace
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
  }
}
