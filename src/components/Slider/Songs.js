import React, { Component } from "react";
import Coverflow from "react-coverflow";

class Songs extends Component {
  state = {
    active: 0
  };
  render() {
    return (
      <Coverflow
        width="960"
        height="500"
        displayQuantityOfSide={2}
        navigation={true}
        enableScroll={false}
        enableHeading={false}
        clickable={true}
        active={this.state.active}
        currentFigureScale={1.5}
        otherFigureScale={0.8}
      >
        <img
          src={require("../../assets/song_banners/happier_cover.jpeg")}
          alt="Happier"
          data-action="https://soundcloud.com/yooni-verse/happier"
          style={{ display: "block", width: "100%" }}
        />

        <img
          src={require("../../assets/song_banners/forever.jpeg")}
          alt="Forever"
          data-action="https://soundcloud.com/yooni-verse/forever"
          style={{ display: "block", width: "100%" }}
        />
      </Coverflow>
    );
  }
}

export default Songs;
