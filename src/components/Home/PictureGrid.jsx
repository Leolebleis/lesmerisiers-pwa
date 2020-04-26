import React from "react";
import FlipCard from "../react-springs/FlipCard";
import Card from "react-bootstrap/Card";
import styled from "styled-components";

// Photo imports
import GGJacuzzi from "../../assets/photos/GG-jacuzzi.jpg?nf_resize=smartcrop&w=400&h=400";
import GGCuisine from "../../assets/photos/GG-cuisine.jpg?nf_resize=smartcrop&w=400&h=400";
import PGExterieur from "../../assets/photos/PG-exterieur.jpg?nf_resize=smartcrop&w=400&h=400";
import PGChambreDouble from "../../assets/photos/PG-chambre-double.jpg?nf_resize=smartcrop&w=400&h=400";
import PGPanorama from "../../assets/photos/PG-salon-panorama.jpg?nf_resize=smartcrop&w=400&h=400";
import GGChambreDouble from "../../assets/photos/GG-chambre-double.jpg?nf_resize=smartcrop&w=400&h=400";
import PGJardin from "../../assets/photos/PG-jardin.jpg?nf_resize=smartcrop&w=400&h=400";
import PGJardin2 from "../../assets/photos/PG-jardin-2.jpg?nf_resize=smartcrop&w=400&h=400";
import HautKoenigsbourg from "../../assets/photos/haut-koenigsbourg.jpg?nf_resize=smartcrop&w=400&h=400";

const Styles = styled.div`
  .card-container {
    width: 100%;
    margin: 15px auto 55px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, 200px);

    @media (max-width: 576px) {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 200px);
    }

    grid-column-gap: 24px;
    grid-row-gap: 24px;
  }

  .card {
    border: 0px;
  }

  .photo-1 {
    grid-area: 1 / 1 / span 1 / span 2;
  }

  .photo-2 {
    grid-area: 1 / 3 / span 2 / span 1;
  }

  .photo-3 {
    grid-area: 2 / 1 / span 1 / span 1;
  }

  .photo-4 {
    grid-area: 2 / 2 / span 1 / span 1;
  }

  .photo-5 {
    grid-area: 1 / 4 / span 1 / span 1;
  }

  .photo-6 {
    grid-area: 1 / 5 / span 1 / span 1;
  }

  .photo-7 {
    grid-area: 1 / 6 / span 2 / span 1;

    @media (max-width: 576px) {
      grid-area: 3 / 1 / span 1 / span 1;
    }
  }

  .photo-8 {
    grid-area: 2 / 4 / span 1 / span 2;
    @media (max-width: 576px) {
      grid-area: 3 / 2 / span 1 / span 2;
    }
  }
`;

export default class PictureGrid extends React.Component {
  render() {
    return (
      <Styles>
        <div className="card-container">
          <Card className="photo-1">
            <FlipCard
              recto={GGCuisine}
              verso="https://images.unsplash.com/photo-1541851642110-681578e1b6d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
            />
          </Card>
          <Card className="photo-2">
            <FlipCard recto={GGJacuzzi} verso={HautKoenigsbourg} />
          </Card>
          <Card className="photo-3">
            <FlipCard
              recto={PGChambreDouble}
              verso="https://images.unsplash.com/photo-1584109504933-b350e47d44d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
            />
          </Card>
          <Card className="photo-4">
            <FlipCard
              recto={PGExterieur}
              verso="https://images.unsplash.com/photo-1563096080-761dbf0020b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
            />
          </Card>
          <Card className="photo-5 d-none d-md-block">
            <FlipCard
              recto={GGChambreDouble}
              verso="https://images.unsplash.com/flagged/photo-1557263256-5c1f869cfd45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
            />
          </Card>
          <Card className="photo-6 d-none d-md-block">
            <FlipCard
              recto={PGJardin}
              verso="https://images.unsplash.com/photo-1584109035548-ae9606fa5322?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
            />
          </Card>
          <Card className="photo-7">
            <FlipCard
              recto={PGJardin2}
              verso="https://images.unsplash.com/photo-1550518624-10221cc3d34a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
            />
          </Card>
          <Card className="photo-8">
            <FlipCard
              recto={PGPanorama}
              verso="https://images.unsplash.com/photo-1551224366-fe9797bde25d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
            />
          </Card>
        </div>
      </Styles>
    );
  }
}
