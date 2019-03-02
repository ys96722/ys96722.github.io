import React, { Component } from "react";
import { SquareContainer } from "./Square.style";

class Square extends Component {
  state = {};

  render() {
    const illinoisBlue = "#13294b";
    const illinoisOrange = "#E84A27";
    const lightgreen = "#5baaa5";
    const lightblue = "#60b6db";
    const katalkGreen = "#86D1D6";
    let bgColor = Number(this.props.index) % 2 === 0 ? katalkGreen : "white";
    let fontColor = Number(this.props.index) % 2 === 0 ? "white" : katalkGreen;
    if (Math.sign(Number(this.props.index)) === -1) {
      //   bgColor = Number(this.props.index) % 2 === 0 ? lightgreen : lightblue;
      bgColor = "white";
      fontColor = katalkGreen;
    }
    let backTrack = Math.sign(Number(this.props.index)) === -1;
    return (
      <>
        <SquareContainer
          bgColor={bgColor}
          fontColor={fontColor}
          form={this.props.form}
          backTrack={backTrack}
        >
          {this.props.children}
        </SquareContainer>
      </>
    );
  }
}

export default Square;
