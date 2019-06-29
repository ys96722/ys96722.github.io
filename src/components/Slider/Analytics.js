import React, { Component } from "react"
import CardList from "../Card/CardList"
import { A } from "../../style/types"
import lqip from "lqip.macro"
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
        unloadedSrc: lqip("../../assets/analytic_banners/alone.jpg"),
        //
        bgSize: "cover",
        popupInfo: {
          title: "EDA on Suicide Data",
          link: "https://yooniverse.me/EDAsuicide/index.slides.html",
          images: [
            require("../../assets/EDAsuicide/EDAsuicide1.png"),
            require("../../assets/EDAsuicide/EDAsuicide2.png"),
            require("../../assets/EDAsuicide/EDAsuicide3.png")
          ],
          content: (
            <>
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
            </>
          ),

          color: "#1A2028"
        }
      }
    ]
  }

  render() {
    // let size = window.innerWidth;
    // let numCols = 1;
    // let numRows = 1;
    // let cardWidth = 31;
    // if (size <= sizes.phone) {
    //   numCols = 1;
    //   numRows = 1;
    //   cardWidth = 100;
    // } else if (size <= sizes.tablet) {
    //   numCols = 1;
    //   numRows = 1;
    //   cardWidth = 50;
    // }
    return (
      <CardList
        infos={this.state.analytic_infos}
        // numCols={numCols}
        // numRows={numRows}
        // cardWidth={cardWidth}
        togglePopup={this.props.togglePopup}
      />
    )
    // return (
    //   <CardList
    //     infos={this.state.analytic_infos}
    //     numCols="1"
    //     numRows="1"
    //     cardWidth="31"
    //     togglePopup={this.props.togglePopup}
    //   />
    // );
  }
}
