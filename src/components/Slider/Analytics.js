import React, { Component } from "react";
import CardList from "../Card/CardList";
// import Coverflow from "react-coverflow";

export default class Analytics extends Component {
  state = {
    analytic_infos: [
      {
        name: "Python Hunters",
        tool: "Python",
        content: "A landscaping company",
        imgPath: require("../../assets/hero.jpeg"),
        bgSize: "cover",
        popupInfo: { title: "Python Hunters", link: "#" }
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

