import React, { Component } from "react";
import {
  CardContainer,
  CardContent,
  CardHeader,
  CardTitle,
  CardImage,
  CardLink
} from "./Card.style";

// React component for the card (main component)
class Card extends Component {
  // Props: (wp or react), img, title, header, content, link

  render() {
    return (
      <CardContainer>
        <CardImage />
        <CardTitle />
        <CardHeader />
        <CardContent />
        <CardLink />
      </CardContainer>
    );
  }
}

export default Card;
