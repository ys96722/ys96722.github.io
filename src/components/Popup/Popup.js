import React, { Component } from "react";
import {
  PopupContainer,
  PopupInner,
  PopupContentContainer,
  PopupImageContainer,
  Button,
  Text,
  TextContainer,
  Content,
  People,
  PopupFooter
} from "./Popup.style";
import PopupSlider from "./PopupSlider/PopupSlider";
import TextSlider from "../TextSlider/TextSlider";
import { CloseButton, A, P } from "../../style/types";
import { Flex } from "../../style/grid";

class Popup extends Component {
  state = {
    visibleIndex: 0,
    texts: [
      <Text key="0">{this.props.popupInfo.content}</Text>,
      <Text key="1">{this.props.popupInfo.testimonial}</Text>,
      <Text key="2" style={{ textAlign: "left" }}>
        {this.props.popupInfo.people}
      </Text>
    ]
  };

  setVisible = (index = 0) => {
    this.setState({
      visibleIndex: index
    });
  };

  render() {
    return (
      <PopupContainer>
        <PopupInner>
          {/* Start Left */}
          <PopupImageContainer>
            <PopupSlider imagePaths={this.props.popupInfo.images} />
          </PopupImageContainer>
          {/* End Left */}
          {/* Start Right */}
          <PopupContentContainer>
            <h1>{this.props.popupInfo.title}</h1>
            <Flex row="row" justify="center">
              <Button
                onClick={e => this.setVisible(0, e)}
                active={this.state.visibleIndex === 0}
              >
                <span>About</span>
              </Button>
              <Button
                onClick={e => this.setVisible(1, e)}
                active={this.state.visibleIndex === 1}
              >
                <span>Testimonial</span>
              </Button>
              <Button
                onClick={e => this.setVisible(2, e)}
                active={this.state.visibleIndex === 2}
              >
                <span>Members</span>
              </Button>
            </Flex>
            {/* Text Content */}
            {this.state.texts[this.state.visibleIndex]}

            <span>
              <A href={this.props.popupInfo.link} target="_blank">
                Take a look!
              </A>
            </span>
            {/* End Right */}
          </PopupContentContainer>
          {/* Close Button */}
          <CloseButton close onClick={this.props.closePopup} />
        </PopupInner>
      </PopupContainer>
    );
  }
}

export default Popup;
