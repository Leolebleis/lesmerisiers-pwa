import React from "react";
import GiteHomeIntro from "./GiteHomeIntro";
import PetitFute from "./PetitFute";
import PictureGrid from "./PictureGrid";
import Map from "./Map";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IconContext } from "react-icons";
import { AiOutlineWifi } from "react-icons/ai";
import { GoScreenFull } from "react-icons/go";
import { FaParking } from "react-icons/fa";
import { MdLocalLaundryService, MdKitchen } from "react-icons/md";

import { withTranslation } from "react-i18next";

// Image imports
import GGCuisine from "../../assets/photos/GG/GG-cuisine-ferme-900px.jpg";
import GGSalonPanorama from "../../assets/photos/GG/GG-salon-panorama-cropped.jpg";
import PGChambreSimple from "../../assets/photos/PG/PG-chambre-simple.jpg";

const metrics = [
  {
    label: "Wifi 200mb/s",
    icon: AiOutlineWifi,
  },
  {
    label: "Télévision câblée",
    icon: GoScreenFull,
  },
  {
    label: "Parking privé",
    icon: FaParking,
  },
  {
    label: "Machine à laver",
    icon: MdLocalLaundryService,
  },
  {
    label: "Cuisine équipée",
    icon: MdKitchen,
  },
];

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row className="h-100 py-5">
            <Col className="mb-4">
              <h2 className="gradient-multiline">{this.props.t("gradient title")}</h2>
              <p className="text-justify">
                Avec <i>trois gîtes familiaux adaptés à tous les groupes</i>,
                nous vous proposons un cadre agréable, tranquille, et haut de
                gamme, entouré du vignoble, où{" "}
                <i>
                  vous pourrez profiter du patrimoine Alsacien et de sa
                  gastronomie.
                </i>{" "}
                Situés à Turckheim, à côté de Colmar, nos gîtes sont
                tout-équipés et prêts à vous accueillir.
              </p>
              <Row className="justify-content-center">
                {metrics.map((metric) => {
                  let CustomIcon = metric.icon;
                  return (
                    <Col key={metric.label} className="col-auto">
                      <div className="label d-inline-flex align-items-center">
                        <IconContext.Provider value={{ size: "2em" }}>
                          <CustomIcon />
                        </IconContext.Provider>
                        <span className="pl-2">{metric.label}</span>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Col>
            <Col className="col-12 col-md-6">
              <Map height="400px" />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="pb-5 h-100">
            <GiteHomeIntro
              title="Gîte 12 à 16 personnes"
              image={GGCuisine}
              alt="Photos de la salle à manger du gîte"
              link="https://www.airbnb.fr/rooms/21053292"
              isLeft="true"
              bathrooms="3"
              bedrooms="6"
              jacuzzi="yes"
              garden="290"
              interior="200"
            >
              Le gîte le plus grand est en fait une combinaison des deux gîtes
              précédents, puisqu'ils peuvent être communicants, et donc recevoir
              des groupes de taille très conséquente. Les dimensions sont donc
              combinées, ainsi que le nombre de pièces et les espaces
              extérieurs. C'est donc 200m² de surface intérieure, ainsi que
              240m² de jardins privatifs et 50m² de terrasse qui seront à votre
              disposition ! De quoi rendre vos vacances inoubliables.
            </GiteHomeIntro>
            <GiteHomeIntro
              title="Gîte 8 à 10 personnes"
              image={GGSalonPanorama}
              link="https://www.airbnb.fr/rooms/20067698"
              isLeft="false"
              bathrooms="2"
              bedrooms="4"
              garden="136"
              interior="132"
              jacuzzi="yes"
            >
              Une surface de 132m² avec 2 lits Queen Size, 4 lits simples, et un
              canapé-lit, pour une capacité totale de 10 personnes. A cela
              s’ajoute 100m² de jardin privé à votre disposition, et 36m² de
              terrasse avec vue sur le vignoble Haut-Rhinois et le massif
              Vosgien que vous aurez le loisir de contempler depuis votre spa
              extérieur !
            </GiteHomeIntro>
            <GiteHomeIntro
              title="Gîte 4 à 6 personnes"
              image={PGChambreSimple}
              link="https://www.airbnb.fr/rooms/20374593"
              isLeft="true"
              bathrooms="1"
              bedrooms="2"
              garden="155"
              interior="61"
            >
              Une surface de 61m² avec un lit Queen Size, 2 lits simples, et un
              canapé-lit, pour une capacité totale de 6 personnes. A cela
              s’ajoute 15m² de terrasse à votre disposition et 140m² de jardin
              privatif avec vue sur le vignoble Haut-Rhinois que vous aurez le
              loisir de contempler lors de vos barbecues !
            </GiteHomeIntro>
          </Row>
        </Container>

        <PictureGrid />

        <PetitFute />
      </React.Fragment>
    );
  }
}

export default withTranslation("home")(Home);
