import React, { Component } from "react";
import CardList from "../Card/CardList";
import { A, Text } from "../../style/types";
// import Coverflow from "react-coverflow";

export default class Analytics extends Component {
  state = {
    analytic_infos: [
      {
        name: "Suicide",
        tool: "Python",
        tools:
          "Language: Python\nWrangling: Pandas, Numpy\nVisualization: PyPlot, Seaborn\nPresentation: Reveal.js",
        content:
          "A series of Python tutorials I have created to teach basics of Python.",
        imgPath: require("../../assets/analytic_banners/alone.jpg"),
        //
        bgSize: "cover",
        popupInfo: {
          title: "EDA on Suicide Data",
          link: "https://yooniverse.me/EDAsuicide/index.slides.html",
          images: [
            require("../../assets/hero.jpeg"),
            require("../../assets/hero.JPG"),
            require("../../assets/hero.JPG")
          ],
          content: (
            <div>
              <Text>
                Exploratory data analysis on suicide data from
                <A
                  href="http://apps.who.int/healthinfo/statistics/mortality/whodpms/"
                  target="_blank"
                >
                  {" "}
                  WHO Mortality Database.
                </A>{" "}
                Used Python on Jupyter Notebook with Pandas, Numpy, PyPlot, and
                Seaborn.
              </Text>
            </div>
          ),

          color: "#1A2028"
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
