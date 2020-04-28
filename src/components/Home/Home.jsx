import React from "react";
import GiteHomeIntro from "./GiteHomeIntro";
import PetitFute from "../PetitFute";
import PictureGrid from "./PictureGrid";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Image imports
import GGCuisine from "../../assets/photos/GG-cuisine-ferme-900px.jpg";
import GGSalonPanorama from "../../assets/photos/GG-salon-panorama-cropped.jpg";
import PGChambreSimple from "../../assets/photos/PG-chambre-simple.jpg";

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col className="col-12 col-md-6">
              <h1 className="gradient-multiline">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </h1>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="my-5 h-100">
            <GiteHomeIntro
              title="Gîte 12 à 16 personnes"
              image={GGCuisine}
              alt="Photos de la salle à manger du gîte"
              link="https://www.airbnb.fr/rooms/21053292"
              isLeft="true"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              ornare, nibh et dapibus consequat, mauris nibh mattis lectus, a
              dignissim sem ligula eu dui. Nam eget ligula non diam facilisis
              consectetur eget placerat velit. Morbi quis dictum enim. Ut
              lacinia a libero nec ultrices. In ut ornare dolor, ac ultricies
              odio. Mauris facilisis mi lacus, ac efficitur metus
            </GiteHomeIntro>
            <GiteHomeIntro
              title="Gîte 8 à 10 personnes"
              image={GGSalonPanorama}
              link="https://www.airbnb.fr/rooms/20067698"
              isLeft="false"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              ornare, nibh et dapibus consequat, mauris nibh mattis lectus, a
              dignissim sem ligula eu dui. Nam eget ligula non diam facilisis
              consectetur eget placerat velit. Morbi quis dictum enim. Ut
              lacinia a libero nec ultrices. In ut ornare dolor, ac ultricies
              odio. Mauris facilisis mi lacus, ac efficitur metus
            </GiteHomeIntro>
            <GiteHomeIntro
              title="Gîte 4 à 6 personnes"
              image={PGChambreSimple}
              link="https://www.airbnb.fr/rooms/20374593"
              isLeft="true"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              ornare, nibh et dapibus consequat, mauris nibh mattis lectus, a
              dignissim sem ligula eu dui. Nam eget ligula non diam facilisis
              consectetur eget placerat velit. Morbi quis dictum enim. Ut
              lacinia a libero nec ultrices. In ut ornare dolor, ac ultricies
              odio. Mauris facilisis mi lacus, ac efficitur metus
            </GiteHomeIntro>
          </Row>
        </Container>

        <PetitFute />
        
        <PictureGrid />
      </React.Fragment>
    );
  }
}
