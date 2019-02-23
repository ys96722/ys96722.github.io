import React, { Component } from "react";
// import Coverflow from "react-coverflow";

// style components
// import { Div } from "../../style/grid";
// import Card from "../Card/Card";
// import { Div, Flex } from "../../style/grid";
import CardList from "../Card/CardList";
import Popup from "../Popup/Popup";

export default class Websites extends Component {
  state = {
    showPopup: false,
    website_infos: [
      {
        name: "Native Roots",
        tool: "WordPress",
        content: "A website for Native Rootslandscaping company",
        link: "https://nativerootsdesign.org/",
        imgPath: require("../../assets/website_banners/native_hero.png"),
        bgSize: "cover"
      },
      {
        name: "Ability Marketplace",
        tool: "WordPress",
        content: "A landscaping company",
        link: "https://abilitymarketplace.com/",
        imgPath: require("../../assets/website_banners/ability_logo.png"),
        bgSize: "cover"
      },
      {
        name: "2XL Logistics",
        tool: "WordPress",
        content: "A landscaping company",
        link: "https://www.2xllogistics.com/",
        imgPath: require("../../assets/website_banners/2xl_blue_logo.png"),
        bgSize: "contain"
      },
      {
        name: "Simbiosys",
        tool: "WordPress",
        content: "A landscaping company",
        link: "https://simbiosys.tech/",
        imgPath: require("../../assets/website_banners/simbiosys_hero.png"),
        bgSize: "cover"
      },
      {
        name: "Traverse Science",
        tool: "WordPress",
        content: "A landscaping company",
        link: "https://traversescience.com/",
        imgPath: require("../../assets/website_banners/traverse_logo.png"),
        bgSize: "contain"
      },
      {
        name: "KoJobs",
        tool: "WordPress",
        content: "A landscaping company",
        link: "https://kojobsillinois.com/",
        imgPath: require("../../assets/website_banners/kojobs_hero2.png"),
        bgSize: "cover"
      }
    ]
  };

  togglePopup = () => {
    // console.log(this);
    this.setState({
      showPopup: !this.state.showPopup
    });
  };

  render() {
    return (
      <>
        {/* <button onClick={this.togglePopup}>show popup</button> */}
        <CardList
          infos={this.state.website_infos}
          numCols="3"
          numRows="2"
          cardWidth="50"
          togglePopup={this.togglePopup.bind(this)}
        />

        {this.state.showPopup ? (
          <Popup text="Close Me" closePopup={this.togglePopup} />
        ) : null}
      </>
    );
  }
}
