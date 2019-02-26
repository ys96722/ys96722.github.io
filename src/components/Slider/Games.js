import React, { Component } from "react";
import CardList from "../Card/CardList";

export default class Games extends Component {
  state = {
    showPopup: false,
    game_infos: [
      {
        name: "Tanks!",
        tool: "Unity",
        tools: "Framework: Unity Studio\nBackend: C#",
        imgPath: require("../../assets/game_banners/tanks.png"),
        bgSize: "cover",
        popupInfo: {
          title: "Tanks!",
          link: "http://yooniverse.me/Tanks/",
          images: [
            require("../../assets/hero.jpeg"),
            require("../../assets/hero.JPG"),
            require("../../assets/hero.JPG")
          ],
          content:
            "Culpa adipisicing elit officia ut ea. Aliquip laborum commodo aliqua cupidatat est sint veniam est. Deserunt veniam voluptate labore magna anim nisi quis voluptate et. Ex non incididunt culpa Lorem nostrud mollit consequat ipsum. Do non ea qui nostrud eiusmod laborum Lorem anim dolor reprehenderit minim. Velit mollit commodo ex fugiat voluptate non magna consequat. Velit ex occaecat voluptate laborum nostrud incididunt nostrud mollit enim sint ut esse ipsum."
        }
      },
      {
        name: "Space Shooter",
        tool: "Unity",
        tools: "Framework: Unity Studio\nBackend: C#",
        imgPath: require("../../assets/game_banners/spaceshooter.jpg"),
        bgSize: "cover",
        popupInfo: {
          title: "Space Shooter",
          link: "http://yooniverse.me/Space-Shooter-V2/",
          images: [
            require("../../assets/hero.jpeg"),
            require("../../assets/hero.JPG"),
            require("../../assets/hero.JPG")
          ],
          content:
            "Culpa adipisicing elit officia ut ea. Aliquip laborum commodo aliqua cupidatat est sint veniam est. Deserunt veniam voluptate labore magna anim nisi quis voluptate et. Ex non incididunt culpa Lorem nostrud mollit consequat ipsum. Do non ea qui nostrud eiusmod laborum Lorem anim dolor reprehenderit minim. Velit mollit commodo ex fugiat voluptate non magna consequat. Velit ex occaecat voluptate laborum nostrud incididunt nostrud mollit enim sint ut esse ipsum."
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
