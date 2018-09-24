import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
  <figure>
    <img src={photo} alt={destination} />
    <figcaption>
      <blockquote>{Travel}</blockquote>
      <cite>{country}</cite>
      <blockquote>{Travel}</blockquote>
      <cite>{destination}</cite>
      <blockquote>{Travel}</blockquote>
      <cite>{distance}</cite>
    </figcaption>
  </figure>
);

export default Travel;