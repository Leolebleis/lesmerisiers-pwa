import React from "react";
import GiteHomeIntro from "./GiteHomeIntro";
import PetitFute from "../PetitFute";
import PictureGrid from "./PictureGrid";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Image imports
import GGCuisine from "../../assets/photos/GG-cuisine-ferme.jpg";

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
              image="https://scontent-lht6-1.xx.fbcdn.net/v/t31.0-8/23000048_1412989422133193_505403171230576560_o.jpg?_nc_cat=108&_nc_sid=cdbe9c&_nc_ohc=fpfEbjsdYAUAX-_pLwT&_nc_ht=scontent-lht6-1.xx&oh=a316a466384510ad062bd049fcb104ca&oe=5ECB627B"
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
              image="https://scontent-lht6-1.xx.fbcdn.net/v/t31.0-8/22256542_1393145617450907_2213792447603454679_o.jpg?_nc_cat=106&_nc_sid=cdbe9c&_nc_ohc=h8_OI95eAKsAX_YMq2R&_nc_ht=scontent-lht6-1.xx&oh=4eebea4027e30a4cd679617005100b69&oe=5ECBB44D"
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
        <PictureGrid />
      </React.Fragment>
    );
  }
}
