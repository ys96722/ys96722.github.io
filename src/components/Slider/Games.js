import React, { Component } from "react";
import Coverflow from "react-coverflow";

class Games extends Component {
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
            src={require("../../assets/hero.jpeg")}
            alt="Project A"
            style={{ display: "block", width: "100%" }}
          />
        </div>
        <div role="menuitem" tabIndex="1">
          <img
            src={require("../../assets/hero.jpeg")}
            alt="Project B"
            style={{ display: "block", width: "100%" }}
            data-action="http://andyyou.github.io/react-coverflow/"
          />
        </div>
        <div role="menuitem" tabIndex="2">
          <img
            src={require("../../assets/hero.jpeg")}
            alt="Project C"
            style={{ display: "block", width: "100%" }}
            data-action="http://andyyou.github.io/react-coverflow/"
          />
        </div>
      </Coverflow>
    );
  }
}

export default Games;
