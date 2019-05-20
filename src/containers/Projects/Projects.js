// Import Dependencies
import React, { Component } from "react";
// Import Styled Components
import { Button, ButtonContainer } from "./Projects.style";
import Websites from "../../components/Slider/Websites";
import Games from "../../components/Slider/Games";
import Songs from "../../components/Slider/Songs";
import Analytics from "../../components/Slider/Analytics";
import { Div } from "../../style/grid";
import {
  PageTitle,
  PageSubTitle,
  A,
  NavButton,
  BottomDiv
} from "../../style/types";
import Popup from "../../components/Popup/Popup";
import ReactGA from "react-ga";

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleIndex: 0,
      showPopup: false,
      popupInfo: undefined
      // projects: [
      //   <Websites key="0" togglePopup={this.togglePopup} />,
      //   <Analytics key="1" togglePopup={this.togglePopup} />,
      //   <Games key="2" togglePopup={this.togglePopup} />,
      //   <Songs key="3" togglePopup={this.togglePopup} />
      // ]
    };

    this.setVisible = this.setVisible.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
  }

  handleClick = event => {
    ReactGA.event({
      category: "Projects",
      action: event
    });
  };

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
    const projects = [
      <Websites key="0" togglePopup={this.togglePopup} />,
      <Analytics key="1" togglePopup={this.togglePopup} />,
      <Games key="2" togglePopup={this.togglePopup} />,
      <Songs
        key="3"
        songsInfo={this.state.songsInfo}
        togglePopup={this.togglePopup}
      />
    ];
    return (
      <Div width="100%" animation="fadeIn" style={{ position: "relative" }}>
        {/* List that captures Active */}
        <Div
          width="60%"
          marginLeft="auto"
          marginRight="auto"
          marginBottom="4rem"
        >
          <PageTitle>Recent Work</PageTitle>
          <br />
          <PageSubTitle>
            Here are some of my featured projects that I am proud to have been
            part of. Got any questions? Message me on{"\u00A0"}
            <A
              href="https://www.linkedin.com/in/yoonchang"
              target="_blank"
              onClick={e => this.handleClick("LinkedIn Link at the Top")}
            >
              LinkedIn!
            </A>
          </PageSubTitle>
        </Div>

        <ButtonContainer row justify="center">
          <Button
            onClick={e => {
              this.setVisible(0, e);
              this.handleClick("Websites Category");
            }}
            active={this.state.visibleIndex === 0}
          >
            Websites
          </Button>
          <Button
            onClick={e => {
              this.setVisible(1, e);
              this.handleClick("Analytics Category");
            }}
            active={this.state.visibleIndex === 1}
          >
            Analytics
          </Button>
          <Button
            onClick={e => {
              this.setVisible(2, e);
              this.handleClick("Games Category");
            }}
            active={this.state.visibleIndex === 2}
          >
            Games
          </Button>
          <Button
            onClick={e => {
              this.setVisible(3, e);
              this.handleClick("Songs Category");
            }}
            active={this.state.visibleIndex === 3}
          >
            Songs
          </Button>
        </ButtonContainer>
        {/* Render Active */}
        {projects[this.state.visibleIndex]}
        {this.state.showPopup ? (
          <Popup
            closePopup={this.togglePopup}
            popupInfo={this.state.popupInfo}
            onClick={e =>
              this.handleClick(this.state.popupInfo.title + "View More")
            }
            // ref={this.setWrapperRef}
          />
        ) : null}
        <BottomDiv>
          <NavButton
            href="#"
            direction="left"
            onClick={e => this.handleClick("Home Link at Bottom")}
          >
            &lt;&lt; Home
          </NavButton>
          <NavButton
            href="#resume"
            direction="right"
            onClick={e => this.handleClick("Resume Link at Bottom")}
          >
            Resume &gt;&gt;
          </NavButton>
        </BottomDiv>
      </Div>
    );
  }
}
