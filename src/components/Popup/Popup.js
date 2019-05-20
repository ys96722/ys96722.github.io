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
import { CloseButton, A, Text } from "../../style/types";
import { Flex } from "../../style/grid";
import ReactGA from "react-ga";

class Popup extends Component {
  state = {
    visibleIndex: 0,
    texts: [
      <Text key="0">{this.props.popupInfo.content}</Text>,
      <Text key="1" testimonial="true">
        {this.props.popupInfo.testimonial}
      </Text>,
      <Text key="2" style={{ textAlign: "left" }}>
        {this.props.popupInfo.people}
      </Text>
    ]
  };

  handleClick = event => {
    ReactGA.event({
      category: "Popup",
      action: event
    });
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
                  onClick={e => {
                    this.setVisible(0, e);
                    this.handleClick(this.props.popupInfo.title + " About Tab");
                  }}
                  active={this.state.visibleIndex === 0}
                  fontColor={this.props.popupInfo.color}
                >
                  <span>About</span>
                </Button>
              ) : null}

              {this.props.popupInfo.testimonial ? (
                <Button
                  onClick={e => {
                    this.setVisible(1, e);
                    this.handleClick(
                      this.props.popupInfo.title + " Testimonial Tab"
                    );
                  }}
                  active={this.state.visibleIndex === 1}
                  fontColor={this.props.popupInfo.color}
                >
                  <span>Testimonial</span>
                </Button>
              ) : null}
              {this.props.popupInfo.people ? (
                <Button
                  onClick={e => {
                    this.setVisible(2, e);
                    this.handleClick(
                      this.props.popupInfo.title + " Members Tab"
                    );
                  }}
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
                rel="noreferrer"
                fontColor={this.props.popupInfo.color}
                onClick={this.handleClick(
                  this.props.popupInfo.title + " Link in Popup"
                )}
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
