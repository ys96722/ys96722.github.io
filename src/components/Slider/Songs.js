import React, { Component } from "react";
import Coverflow from "react-coverflow";
import { Flex } from "../../style/grid";
// import styled, { css, keyframes } from "styled-components";
import { SongDiv } from "./Songs.style.js";

// const CoverComponent = props => {};

const HapImg = ({ doesShow }) => (
  <SongDiv
    show={doesShow ? "initial" : "none"}
    animateIn={doesShow}
    animateOut={!doesShow}
  >
    <img
      src={require("../../assets/song_banners/happier_cover.jpeg")}
      alt="Happier"
      style={{
        objectFit: "cover",
        display: "initial",
        width: "100%",
        height: "100%"
      }}
    />
  </SongDiv>
);

const ForImg = ({ doesShow }) => (
  <SongDiv
    show={doesShow ? "initial" : "none"}
    animateIn={doesShow}
    animateOut={!doesShow}
  >
    <img
      src={require("../../assets/song_banners/forever.jpeg")}
      alt="Forever"
      style={{
        objectFit: "cover",
        display: "initial",
        width: "100%",
        height: "100%"
      }}
    />
  </SongDiv>
);

const HapFrame = ({ doesShow }) => (
  <SongDiv
    show={doesShow ? "initial" : "none"}
    animateIn={doesShow}
    animateOut={!doesShow}
    >
    <iframe
      title="happier"
      width="100%"
      height="100%"
      scrolling="no"
      frameborder="no"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/512176407&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"
    />
  </SongDiv>
);

const ForFrame = ({ doesShow }) => (
  <SongDiv
    show={doesShow ? "initial" : "none"}
    animateIn={doesShow}
    animateOut={!doesShow}
  >
    <iframe
      title="forever"
      width="100%"
      height="100%"
      scrolling="no"
      frameborder="no"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/528417867&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"
    />
  </SongDiv>
);

export default class Songs extends Component {
  state = {
    isActive: 1,
    isHover: undefined
  };

 

  handleCarousal(e) {
    // console.log(e.currentTarget.id);
    // var text = e.currentTarget.id;
    var number = Number(e.currentTarget.id);
    this.setState({
      isActive: number
    });
  }

  handleEnter = index => {
    this.setState({
      isHover: index
    });
  };

  handleLeave = () => {
    this.setState({
      isHover: undefined
    });
  };

  render() {
    return (
      <Coverflow
        width="960"
        height="500"
        displayQuantityOfSide={2}
        navigation={false}
        enableScroll={false}
        enableHeading={false}
        clickable={false}
        active={this.state.isActive}
        currentFigureScale={1.5}
        otherFigureScale={0.8}
      >

        <Flex
          onClick={this.handleCarousal.bind(this)}
          onKeyDown={this.handleCarousal.bind(this)}
          onMouseEnter={() => this.handleEnter(0)}
          onMouseLeave={this.handleLeave}
          role="menuitem"
          tabIndex="0"
          id="0"
          style={{ width: "100%", height: "200px" }}
        >
          <HapFrame
            doesShow={this.state.isActive === 0 && this.state.isHover === 0}
            style={{ width: "100%", height: "100%" }}
          />
          <HapImg
            doesShow={this.state.isActive !== 0 || this.state.isHover !== 0}
            style={{ width: "100%", height: "100%" }}
          />
        </Flex>

        <Flex
          onClick={this.handleCarousal.bind(this)}
          onKeyDown={this.handleCarousal.bind(this)}
          onMouseEnter={() => this.handleEnter(1)}
          onMouseLeave={this.handleLeave}
          role="menuitem"
          tabIndex="1"
          id="1"
          style={{ width: "100%", height: "200px" }}
        >
          <ForFrame
            doesShow={this.state.isActive === 1 && this.state.isHover === 1}
            style={{ width: "100%", height: "100%" }}
          />
          <ForImg
            doesShow={this.state.isActive !== 1 || this.state.isHover !== 1}
            style={{ width: "100%", height: "100%" }}
          />
        </Flex>
        
      </Coverflow>
    );
  }
}
