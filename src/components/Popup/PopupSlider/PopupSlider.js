import React, { Component } from "react";
import {
  PopupSliderContainer,
  PopupSlide,
  SlideWrapper,
  SlideIndex,
  Arrow
} from "./PopupSlider.style.js";

export default class PopupSlider extends Component {
  state = {
    visibleIndex: 0,
    translateValue: 0,
    slideWidth: undefined,
    image_paths: this.props.imagePaths
  };

  slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };

  goToNextSlide = () => {
    console.log(this.props.width);
    if (this.state.visibleIndex === this.state.image_paths.length - 1) {
      return this.setState({
        visibleIndex: 0,
        translateValue: 0
      });
    }

    // This will not run if we met the if condition above
    this.setState(prevState => ({
      visibleIndex: prevState.visibleIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth()
    }));
  };

  goToPrevSlide = () => {
    if (this.state.visibleIndex === 0) {
      return this.setState({
        visibleIndex: this.state.image_paths.length - 1,
        translateValue: -(
          this.slideWidth() *
          (this.state.image_paths.length - 1)
        )
      });
    }

    this.setState(prevState => ({
      visibleIndex: prevState.visibleIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }));
  };

  render() {
    return (
      <PopupSliderContainer>
        <SlideWrapper translateValue={this.state.translateValue}>
          {this.state.image_paths.map((image, index) => (
            <PopupSlide className="slide" key={index} image={image}>
              <SlideIndex>
                [ {index + 1}/{this.state.image_paths.length} ]
              </SlideIndex>
            </PopupSlide>
          ))}
        </SlideWrapper>
        <Arrow direction="left" onClick={this.goToPrevSlide}>
          PREV
        </Arrow>
        <Arrow direction="right" onClick={this.goToNextSlide}>
          NEXT
        </Arrow>
      </PopupSliderContainer>
    );
  }
}
