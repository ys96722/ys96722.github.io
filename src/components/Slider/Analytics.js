import React, { Component } from "react";
import CardList from "../Card/CardList";
// import Coverflow from "react-coverflow";

class Analytics extends Component {
  state = {
    analytic_infos: [
      {
        name: "Python Study",
        tool: "Python",
        content: "A landscaping company",
        link: "#",
        imgPath: require("../../assets/hero.jpeg"),
        bgSize: "cover"
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
      />
    );
  }
}

export default Analytics;
