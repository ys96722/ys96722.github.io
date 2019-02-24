import React, { Component } from "react";
import {
  PopupSliderContainer,
  PopupSlide,
  RightArrow,
  LeftArrow
} from "./PopupSlider.style.js";

export default class PopupSlider extends Component {
  state = {
    visibleIndex: 0,
    image_paths: [
      require("../../../assets/hero.jpeg"),
      require("../../../assets/hero.JPG"),
      require("../../../assets/water.jpg")
    ]
  };

  goToNextSlide = () => {
    this.setState(prevState => ({
      visibleIndex: prevState.visibleIndex + 1
    }));
  };

  goToPrevSlide = () => {
    this.setState(prevState => ({
      visibleIndex: prevState.visibleIndex - 1
    }));
  };

  render() {
    return (
      <PopupSliderContainer>
        <PopupSlide />
        <img
          src={this.state.image_paths[this.state.visibleIndex]}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <LeftArrow onClick={this.goToPrevSlide}>PREVIOUS</LeftArrow>
        <RightArrow onClick={this.goToNextSlide}>NEXT</RightArrow>
      </PopupSliderContainer>
    );
  }
}
