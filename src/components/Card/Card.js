import React from "react";
import { CardContainer, CardFront, CardBack, Inner } from "./Card.style";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// React component for the card (main component)
export const card = props => {
  // Props: (wp or react), img, title, header, content, link

  return (
    <CardContainer>
      <CardFront imgPath={props.imgPath}>
        <Inner>
          <p>{props.name}</p>
          <span>{props.tool}</span>
        </Inner>
      </CardFront>
      <CardBack imgPath={props.imgPath}>
        <Inner>
          <p>Lorem Ipsum blah blah hah hah</p>
        </Inner>
      </CardBack>
    </CardContainer>
  );
};

export default card;
