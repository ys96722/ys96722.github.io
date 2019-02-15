import React, { Component } from "react";
import { CardContainer, CardFront, CardBack, Inner } from "./Card.style";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// React component for the card (main component)
class Card extends Component {
  // Props: (wp or react), img, title, header, content, link
  constructor(props){
    super(props);
    this.name = props.name;
    this.tool = props.tool;
  }

  render() {
    return (
      <CardContainer>
        <CardFront>
          <Inner>
            <p>{this.name}</p>
            <span>{this.tool}</span>
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
