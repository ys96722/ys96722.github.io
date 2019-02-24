import React, { Component } from "react";
import CardList from "../Card/CardList";

export default class Games extends Component {
  state = {
    showPopup: false,
    game_infos: [
      {
        name: "Tanks!",
        tool: "Unity",
        content: "A landscaping company",
        imgPath: require("../../assets/game_banners/tanks.png"),
        bgSize: "cover",
        popupInfo: { title: "Tanks!", link: "http://yooniverse.me/Tanks/",
          images: [
            require("../../assets/hero.jpeg"),
            require("../../assets/hero.JPG"),
            require("../../assets/hero.JPG")
          ]
        }
      },
      {
        name: "Space Shooter",
        tool: "Unity",
        content: "A landscaping company",
        imgPath: require("../../assets/game_banners/spaceshooter.jpg"),
        bgSize: "cover",
        popupInfo: { title: "Space Shooter", link: "http://yooniverse.me/Space-Shooter-V2/",
          images: [
            require("../../assets/hero.jpeg"),
            require("../../assets/hero.JPG"),
            require("../../assets/hero.JPG")
          ]
        }
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
          togglePopup={this.props.togglePopup}
        />
    );
  }
}


