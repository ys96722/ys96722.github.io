import React, { Component } from "react";
import {
  PopupContainer,
  PopupInner,
  PopupContentContainer,
  PopupImageContainer,
  Button,
  Title
} from "./Popup.style";
import PopupSlider from "./PopupSlider/PopupSlider";
import TextSlider from "../TextSlider/TextSlider";
import { CloseButton, A, P, Text } from "../../style/types";
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
            <Title fontColor={this.props.popupInfo.color}>
              {this.props.popupInfo.title}
            </Title>
            <Flex row="row" justify="center">
              {this.props.popupInfo.content ? (
                <Button
                  onClick={e => this.setVisible(0, e)}
                  active={this.state.visibleIndex === 0}
                  fontColor={this.props.popupInfo.color}
                >
                  <span>About</span>
                </Button>
              ) : null}

              {this.props.popupInfo.testimonial ? (
                <Button
                  onClick={e => this.setVisible(1, e)}
                  active={this.state.visibleIndex === 1}
                  fontColor={this.props.popupInfo.color}
                >
                  <span>Testimonial</span>
                </Button>
              ) : null}
              {this.props.popupInfo.people ? (
                <Button
                  onClick={e => this.setVisible(2, e)}
                  active={this.state.visibleIndex === 2}
                  fontColor={this.props.popupInfo.color}
                >
                  <span>Members</span>
                </Button>
              ) : null}
            </Flex>
            {/* Text Content */}
            {this.state.texts[this.state.visibleIndex]}

            <span>
              <A
                href={this.props.popupInfo.link}
                target="_blank"
                fontColor={this.props.popupInfo.color}
              >
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
