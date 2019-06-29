import React, { Component } from "react"
import CardList from "../Card/CardList"
import lqip from "lqip.macro"

export default class Games extends Component {
  state = {
    showPopup: false,
    game_infos: [
      // {
      //   name: "JuruMable",
      //   tool: "React",
      //   tools: "Framework: React",
      //   imgPath: require("../../assets/game_banners/tanks.png"),
      //   bgSize: "cover",
      //   popupInfo: {
      //     title: "JuruMable",
      //     link: "http://yooniverse.me/#/jurumable",
      //     images: [
      //       require("../../assets/space/space1.png"),
      //       require("../../assets/space/space2.png"),
      //       require("../../assets/space/space3.png"),
      //       require("../../assets/space/space4.png")
      //     ],
      //     content:
      //       "Culpa adipisicing elit officia ut ea. Aliquip laborum commodo aliqua cupidatat est sint veniam est. Deserunt veniam voluptate labore magna anim nisi quis voluptate et. Ex non incididunt culpa Lorem nostrud mollit consequat ipsum. Do non ea qui nostrud eiusmod laborum Lorem anim dolor reprehenderit minim. Velit mollit commodo ex fugiat voluptate non magna consequat. Velit ex occaecat voluptate laborum nostrud incididunt nostrud mollit enim sint ut esse ipsum.",
      //     color: "#86D1D6"
      //     // color: "#336633"
      //     // color: "#292e12" Darker Green. See how this looks with screen shots.
      //   }
      // },
      {
        name: "Tanks!",
        tool: "Unity",
        tools: "Framework: Unity Studio\nBackend: C#",
        imgPath: require("../../assets/game_banners/tanks.png"),
        unloadedSrc: lqip("../../assets/game_banners/tanks.png"),
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
            "Tanks! is a 3D two-player arcade shooting game made with Unity. Backend is written in C# on Unity, and the assets are from the free asset packages in Unity Asset Store. Heal up by picking up the red potions and beat your friend to claim your honor!",
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
        unloadedSrc: lqip("../../assets/game_banners/spaceshooter.jpg"),
        bgSize: "cover",
        popupInfo: {
          title: "Space Shooter",
          link: "http://yooniverse.me/Space-Shooter-V2/",
          images: [
            require("../../assets/space/space1.png"),
            require("../../assets/space/space2.png"),
            require("../../assets/space/space3.png"),
            require("../../assets/space/space4.png")
          ],
          content:
            "Space Shooter is a 2D shooting-arcade game made with Unity. Backend is written in C# on Unity, and the assets are from the free asset packages in Unity Asset Store. Power up and extend the time limit by picking up the cat-faced amenity boxes and shoot for your high score! (The cat's name is BongSook.)",
          color: "#996FD6"
        }
      }
    ]
  }

  render() {
    // let size = window.innerWidth;
    // let numCols = 3;
    // let numRows = 3;
    // let cardWidth = 31;
    // if (size <= sizes.phone) {
    //   numCols = 1;
    //   numRows = 7;
    //   cardWidth = 100;
    // } else if (size <= sizes.tablet) {
    //   numCols = 2;
    //   numRows = 4;
    //   cardWidth = 50;
    // }
    return (
      <CardList
        infos={this.state.game_infos}
        // numCols={numCols}
        // numRows={numRows}
        // cardWidth={cardWidth}
        togglePopup={this.props.togglePopup}
      />
    )
  }
}
