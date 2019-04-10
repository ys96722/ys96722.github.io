import React, { Component } from "react";
import CardList from "../Card/CardList";

export default class Games extends Component {
  state = {
    showPopup: false,
    game_infos: [
      {
        name: "JuruMable",
        tool: "React",
        tools: "Framework: React",
        imgPath: require("../../assets/game_banners/tanks.png"),
        bgSize: "cover",
        popupInfo: {
          title: "JuruMable",
          link: "http://yooniverse.me/#/jurumable",
          images: [
            require("../../assets/hero.jpeg"),
            require("../../assets/hero.JPG"),
            require("../../assets/hero.JPG")
          ],
          content:
            "Culpa adipisicing elit officia ut ea. Aliquip laborum commodo aliqua cupidatat est sint veniam est. Deserunt veniam voluptate labore magna anim nisi quis voluptate et. Ex non incididunt culpa Lorem nostrud mollit consequat ipsum. Do non ea qui nostrud eiusmod laborum Lorem anim dolor reprehenderit minim. Velit mollit commodo ex fugiat voluptate non magna consequat. Velit ex occaecat voluptate laborum nostrud incididunt nostrud mollit enim sint ut esse ipsum.",
          color: "#86D1D6"
          // color: "#336633"
          // color: "#292e12" Darker Green. See how this looks with screen shots.
        }
      },
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
            require("../../assets/tanks/tanks1.png"),
            require("../../assets/tanks/tanks2.png"),
            require("../../assets/tanks/tanks3.png"),
            require("../../assets/tanks/tanks4.png")
          ],
          content:
            "Culpa adipisicing elit officia ut ea. Aliquip laborum commodo aliqua cupidatat est sint veniam est. Deserunt veniam voluptate labore magna anim nisi quis voluptate et. Ex non incididunt culpa Lorem nostrud mollit consequat ipsum. Do non ea qui nostrud eiusmod laborum Lorem anim dolor reprehenderit minim. Velit mollit commodo ex fugiat voluptate non magna consequat. Velit ex occaecat voluptate laborum nostrud incididunt nostrud mollit enim sint ut esse ipsum.",
          color: "#DFA055"
          // color: "#336633"
          // color: "#292e12" Darker Green. See how this looks with screen shots.
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
            "Culpa adipisicing elit officia ut ea. Aliquip laborum commodo aliqua cupidatat est sint veniam est. Deserunt veniam voluptate labore magna anim nisi quis voluptate et. Ex non incididunt culpa Lorem nostrud mollit consequat ipsum. Do non ea qui nostrud eiusmod laborum Lorem anim dolor reprehenderit minim. Velit mollit commodo ex fugiat voluptate non magna consequat. Velit ex occaecat voluptate laborum nostrud incididunt nostrud mollit enim sint ut esse ipsum.",
          color: "#996FD6"
        }
      }
    ]
  };

  render() {
    return (
      <CardList
        infos={this.state.game_infos}
        numCols="3"
        numRows="1"
        cardWidth="31"
        togglePopup={this.props.togglePopup}
      />
    );
  }
}
