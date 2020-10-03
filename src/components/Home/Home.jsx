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

import { Trans, useTranslation } from "react-i18next";

// Image imports
import GGCuisine from "../../assets/photos/GG/GG-cuisine-ferme-900px.jpg";
import GGSalonPanorama from "../../assets/photos/GG/GG-salon-panorama-cropped.jpg";
import PGChambreSimple from "../../assets/photos/PG/PG-chambre-simple.jpg";

export default () => {
  const { t } = useTranslation("home");

  const metrics = [
    {
      label: t("labels.wifi"),
      icon: AiOutlineWifi,
    },
    {
      label: t("labels.tv"),
      icon: GoScreenFull,
    },
    {
      label: t("labels.parking"),
      icon: FaParking,
    },
    {
      label: t("labels.washingMachine"),
      icon: MdLocalLaundryService,
    },
    {
      label: t("labels.kitchen"),
      icon: MdKitchen,
    },
  ];

  return (
    <React.Fragment>
      <Container>
        <Row className="h-100 py-5">
          <Col className="mb-4">
            <h2 className="gradient-multiline">{t("gradientTitle")}</h2>
            <p className="text-justify">
              <Trans
                i18nKey="home:introduction"
                components={{ italic: <i /> }}
              />
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
            title={t("mg.title")}
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
            {t("mg.description")}
          </GiteHomeIntro>
          <GiteHomeIntro
            title={t("gg.title")}
            image={GGSalonPanorama}
            link="https://www.airbnb.fr/rooms/20067698"
            isLeft="false"
            bathrooms="2"
            bedrooms="4"
            garden="136"
            interior="132"
            jacuzzi="yes"
          >
            {t("gg.description")}
          </GiteHomeIntro>
          <GiteHomeIntro
            title={t("pg.title")}
            image={PGChambreSimple}
            link="https://www.airbnb.fr/rooms/20374593"
            isLeft="true"
            bathrooms="1"
            bedrooms="2"
            garden="155"
            interior="61"
          >
            {t("pg.description")}
          </GiteHomeIntro>
        </Row>
      </Container>

      <PictureGrid />

      <PetitFute />
    </React.Fragment>
  );
};
