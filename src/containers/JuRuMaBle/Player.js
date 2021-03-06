import React, { Component } from "react";
import { PlayerContainer } from "./Player.style";

class Player extends Component {
  state = {
    // playerId: this.props.id
  };
  render() {
    let color = undefined;
    if (this.props.color === "blue") {
      color = "blue";
    } else if (this.props.color === "red") {
      color = "red";
    } else if (this.props.color === "green") {
      color = "green";
    } else {
      color = "black";
    }
    return <PlayerContainer color={color} />;
  }
}

export default Player;
