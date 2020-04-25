import React from "react";
import GiteHomeIntro from "./GiteHomeIntro";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Home extends React.Component {
  render() {
    return (
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
            recto="https://a0.muscache.com/im/pictures/7f2f2ba8-064b-460f-81e3-3d69ba31f6b9.jpg"
            verso="https://images.unsplash.com/photo-1516796296467-bd4ef25eb45d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2788&q=80"
            link="https://www.airbnb.fr/rooms/21053292"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            ornare, nibh et dapibus consequat, mauris nibh mattis lectus, a
            dignissim sem ligula eu dui. Nam eget ligula non diam facilisis
            consectetur eget placerat velit. Morbi quis dictum enim. Ut lacinia
            a libero nec ultrices. In ut ornare dolor, ac ultricies odio. Mauris
            facilisis mi lacus, ac efficitur metus
          </GiteHomeIntro>
          <GiteHomeIntro
            title="Gîte 8 à 10 personnes"
            recto="https://scontent-lht6-1.xx.fbcdn.net/v/t31.0-8/23000048_1412989422133193_505403171230576560_o.jpg?_nc_cat=108&_nc_sid=cdbe9c&_nc_ohc=fpfEbjsdYAUAX-_pLwT&_nc_ht=scontent-lht6-1.xx&oh=a316a466384510ad062bd049fcb104ca&oe=5ECB627B"
            verso="https://images.unsplash.com/photo-1563096080-761dbf0020b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80"
            link="https://www.airbnb.fr/rooms/20067698"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            ornare, nibh et dapibus consequat, mauris nibh mattis lectus, a
            dignissim sem ligula eu dui. Nam eget ligula non diam facilisis
            consectetur eget placerat velit. Morbi quis dictum enim. Ut lacinia
            a libero nec ultrices. In ut ornare dolor, ac ultricies odio. Mauris
            facilisis mi lacus, ac efficitur metus
          </GiteHomeIntro>
          <GiteHomeIntro
            title="Gîte 4 à 6 personnes"
            recto="https://scontent-lht6-1.xx.fbcdn.net/v/t31.0-8/22256542_1393145617450907_2213792447603454679_o.jpg?_nc_cat=106&_nc_sid=cdbe9c&_nc_ohc=h8_OI95eAKsAX_YMq2R&_nc_ht=scontent-lht6-1.xx&oh=4eebea4027e30a4cd679617005100b69&oe=5ECBB44D"
            verso="https://images.unsplash.com/photo-1584109035548-ae9606fa5322?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
            link="https://www.airbnb.fr/rooms/20374593"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            ornare, nibh et dapibus consequat, mauris nibh mattis lectus, a
            dignissim sem ligula eu dui. Nam eget ligula non diam facilisis
            consectetur eget placerat velit. Morbi quis dictum enim. Ut lacinia
            a libero nec ultrices. In ut ornare dolor, ac ultricies odio. Mauris
            facilisis mi lacus, ac efficitur metus
          </GiteHomeIntro>
        </Row>
      </Container>
    );
  }
}
