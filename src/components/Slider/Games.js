import React, { Component } from "react";
import CardList from "../Card/CardList";

class Games extends Component {
  state = {
    game_infos: [
      {
        name: "Tanks!",
        tool: "Unity",
        content: "A landscaping company",
        link: "http://yooniverse.me/Tanks/",
        imgPath: require("../../assets/game_banners/tanks.png"),
        bgSize: "cover"
      },
      {
        name: "Space Shooter",
        tool: "Unity",
        content: "A landscaping company",
        link: "http://yooniverse.me/Space-Shooter-V2/",
        imgPath: require("../../assets/game_banners/spaceshooter.jpg"),
        bgSize: "cover"
      }
    ]
  };
  render() {
    return (
      <CardList
        infos={this.state.game_infos}
        numCols="2"
        numRows="1"
        cardWidth="31"
      />
    );
  }
}

export default Games;
