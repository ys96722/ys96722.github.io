// Import Dependencies
import React, { Component } from "react";
// Import Styled Components
import { Button, ButtonContainer } from "./Projects.style";
import Websites from "../../components/Slider/Websites";
import Games from "../../components/Slider/Games";
import Songs from "../../components/Slider/Songs";
import Analytics from "../../components/Slider/Analytics";
import { SongDiv } from "../../components/Slider/Songs.style";
import { Div } from "../../style/grid";
import {
  PageTitle,
  PageSubTitle,
  A,
  NavButton,
  BottomDiv
} from "../../style/types";
import Popup from "../../components/Popup/Popup";

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleIndex: 0,
      showPopup: false,
      popupInfo: undefined,
      songsInfo: undefined
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

  // componentWillMount = () => {
  //   this.setState({
  //     songsInfo: {
  //       HapImg: ({ doesShow }) => (
  //         <SongDiv
  //           show={doesShow ? "initial" : "hidden"}
  //           animateIn={doesShow}
  //           animateOut={!doesShow}
  //           zVal="1"
  //         >
  //           <img
  //             src={require("../../assets/song_banners/happier_cover.jpeg")}
  //             alt="Happier"
  //             style={{
  //               objectFit: "cover",
  //               display: "initial",
  //               width: "100%",
  //               height: "100%"
  //             }}
  //           />
  //         </SongDiv>
  //       ),
  //       ChildImg: ({ doesShow }) => (
  //         <SongDiv
  //           show={doesShow ? "initial" : "hidden"}
  //           animateIn={doesShow}
  //           animateOut={!doesShow}
  //           zVal="1"
  //         >
  //           <img
  //             src={require("../../assets/song_banners/child_cover.jpeg")}
  //             alt="Child"
  //             style={{
  //               objectFit: "cover",
  //               display: "initial",
  //               width: "100%",
  //               height: "100%"
  //             }}
  //           />
  //         </SongDiv>
  //       ),
  //       ForImg: ({ doesShow }) => (
  //         <SongDiv
  //           show={doesShow ? "initial" : "hidden"}
  //           animateIn={doesShow}
  //           animateOut={!doesShow}
  //           zVal="1"
  //         >
  //           <img
  //             src={require("../../assets/song_banners/forever.jpeg")}
  //             alt="Forever"
  //             style={{
  //               objectFit: "cover",
  //               display: "initial",
  //               width: "100%",
  //               height: "100%"
  //             }}
  //           />
  //         </SongDiv>
  //       ),
  //       HapFrame: ({ doesShow }) => (
  //         <SongDiv
  //           show={doesShow ? "initial" : "hidden"}
  //           animateIn={doesShow}
  //           animateOut={!doesShow}
  //           // zVal="-1"
  //         >
  //           <iframe
  //             title="happier"
  //             width="100%"
  //             height="100%"
  //             scrolling="no"
  //             frameborder="no"
  //             src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/512176407&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"
  //           />
  //         </SongDiv>
  //       ),
  //       ChildFrame: ({ doesShow }) => (
  //         <SongDiv
  //           show={doesShow ? "initial" : "hidden"}
  //           animateIn={doesShow}
  //           animateOut={!doesShow}
  //           // zVal="-1"
  //         >
  //           <iframe
  //             title="child"
  //             width="100%"
  //             height="100%"
  //             scrolling="no"
  //             frameborder="no"
  //             src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/586245420&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"
  //           />
  //         </SongDiv>
  //       ),

  //       ForFrame: ({ doesShow }) => (
  //         <SongDiv
  //           show={doesShow ? "initial" : "hidden"}
  //           animateIn={doesShow}
  //           animateOut={!doesShow}
  //           // zVal="-1"
  //         >
  //           <iframe
  //             title="forever"
  //             width="100%"
  //             height="100%"
  //             scrolling="no"
  //             frameborder="no"
  //             src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/528417867&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"
  //           />
  //         </SongDiv>
  //       )
  //     }
  //   });
  // };

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
            <A href="https://www.linkedin.com/in/yoonchang" target="_blank">
              LinkedIn!
            </A>
          </PageSubTitle>
        </Div>

        <ButtonContainer row justify="center">
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
        </ButtonContainer>
        {/* Render Active */}
        {projects[this.state.visibleIndex]}
        {this.state.showPopup ? (
          <Popup
            closePopup={this.togglePopup}
            popupInfo={this.state.popupInfo}
            // ref={this.setWrapperRef}
          />
        ) : null}
        <BottomDiv>
          <NavButton href="#" direction="left">
            &lt;&lt; Home
          </NavButton>
          <NavButton href="#resume" direction="right">
            Resume &gt;&gt;
          </NavButton>
        </BottomDiv>
      </Div>
    );
  }
}
