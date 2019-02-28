// Import Dependencies
import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Projects.css";
// Import Styled Components
import { Button } from "./Projects.style";
import Websites from "../../components/Slider/Websites";
import Games from "../../components/Slider/Games";
import Songs from "../../components/Slider/Songs";
import Analytics from "../../components/Slider/Analytics";
import { Div, Flex } from "../../style/grid";
import Popup from "../../components/Popup/Popup";

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleIndex: 0,
      showPopup: false,
      popupInfo: undefined,
      projects: [
        <Websites togglePopup={this.togglePopup} />,
        <Analytics togglePopup={this.togglePopup} />,
        <Games togglePopup={this.togglePopup} />,
        <Songs togglePopup={this.togglePopup} />
      ]
    };

    this.setVisible = this.setVisible.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
  }

  setVisible = (index = 0) => {
    this.setState({
      visibleIndex: index
    });
  };

  togglePopup = infos => {
    // console.log(this);
    this.setState({
      showPopup: !this.state.showPopup,
      popupInfo: infos
    });
  };

  render() {
    return (
      <Div width="100%">
        {/* List that captures Active */}
        <Flex row justify="center">
          <Button
            onClick={e => this.setVisible(0, e)}
            active={this.state.visibleIndex === 0}
          >
            Websites
          </Button>
          <Button
            onClick={e => this.setVisible(1, e)}
            active={this.state.visibleIndex === 1}
          >
            Analytics
          </Button>
          <Button
            onClick={e => this.setVisible(2, e)}
            active={this.state.visibleIndex === 2}
          >
            Games
          </Button>
          <Button
            onClick={e => this.setVisible(3, e)}
            active={this.state.visibleIndex === 3}
          >
            Songs
          </Button>
        </Flex>
        {/* Render Active */}
        {this.state.projects[this.state.visibleIndex]}
        {this.state.showPopup ? (
          <Popup
            closePopup={this.togglePopup}
            popupInfo={this.state.popupInfo}
            // ref={this.setWrapperRef}
          />
        ) : null}
      </Div>
    );
  }
}
