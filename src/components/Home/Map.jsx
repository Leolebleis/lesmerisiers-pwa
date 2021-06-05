import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import styled from "styled-components";
import { useTranslation } from "react-i18next";


const Styles = styled.div`
  .map-container {
    height: ${(props) => props.height};
    width: 100%;

    @media (max-width: 576px) {
      height: 300px;
    }
  }
`;

const position = {
  lat: 48.085533,
  lng: 7.2592367,
};

export default (props) => {
  const { i18n } = useTranslation();

  let language = i18n.language.substring(0, 2);

  return (
    <Styles height={props.height}>
      <LoadScript
        googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_API_KEY}`}
        language={`${language}`}
      >
        <GoogleMap
          id="circle-example"
          mapContainerClassName="map-container rounded"
          zoom={11}
          center={position}
        >
          <Marker position={position} />
        </GoogleMap>
      </LoadScript>
    </Styles>
  );
};
