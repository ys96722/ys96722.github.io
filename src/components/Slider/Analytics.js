import React, { Component } from "react";
import CardList from "../Card/CardList";
// import Coverflow from "react-coverflow";

export default class Analytics extends Component {
  state = {
    analytic_infos: [
      {
        name: "Python Hunters",
        tool: "Python",
        tools:
          "Language: Python\nWrangling: Pandas, Numpy\nVisualization: PyPlot, MatPlot",
        content:
          "A series of Python tutorials I have created to teach basics of Python.",
        imgPath: require("../../assets/analytic_banners/python.png"),
        bgSize: "contain",
        popupInfo: {
          title: "Python Hunters",
          link: "#",
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
        infos={this.state.analytic_infos}
        numCols="1"
        numRows="1"
        cardWidth="31"
        togglePopup={this.props.togglePopup}
      />
    );
  }
}
