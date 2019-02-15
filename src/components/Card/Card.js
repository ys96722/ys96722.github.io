import React, { Component } from "react";
import { CardContainer, CardFront, CardBack, Inner } from "./Card.style";

// React component for the card (main component)
class Card extends Component {
  // Props: (wp or react), img, title, header, content, link

  render() {
    return (
      <CardContainer>
        <CardFront>
          <Inner>
            <p>Native Roots</p>
            <span>Lorem Ipsum</span>
          </Inner>
        </CardFront>
        <CardBack>
          <Inner>
            <p>Lorem Ipsum blah blah hah hah</p>
          </Inner>
        </CardBack>
      </CardContainer>
    );
  }
}

export default Card;
