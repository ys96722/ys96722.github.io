import React, { Component } from "react";
import Coverflow from "react-coverflow";

class Songs extends Component {
  state = {};
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
        active={0}
        currentFigureScale={1.5}
        otherFigureScale={0.8}
      >
        <div role="menuitem" tabIndex="0">
          <img
            src={require("../../assets/song_banners/happier_cover.jpeg")}
            alt="Native Roots Design"
            style={{ display: "block", width: "100%" }}
          />
        </div>
        <div role="menuitem" tabIndex="1">
          <img
            src={require("../../assets/song_banners/forever.jpeg")}
            alt="Native Roots Design"
            style={{ display: "block", width: "100%" }}
          />
        </div>
      </Coverflow>
    );
  }
}

export default Songs;
