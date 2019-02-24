import React, { Component } from "react";
// import Coverflow from "react-coverflow";

// style components
// import { Div } from "../../style/grid";
// import Card from "../Card/Card";
// import { Div, Flex } from "../../style/grid";
import CardList from "../Card/CardList";

export default class Websites extends Component {
  state = {
    website_infos: [
      {
        name: "Native Roots",
        tool: "WordPress",
        content: "A website for Native Rootslandscaping company",
        imgPath: require("../../assets/website_banners/native_hero.png"),
        bgSize: "cover",
        popupInfo: { title: "Native Roots", link: "https://nativerootsdesign.org/"}
      },
      {
        name: "Ability Marketplace",
        tool: "WordPress",
        content: "A landscaping company",
        imgPath: require("../../assets/website_banners/ability_logo.png"),
        bgSize: "cover",
        popupInfo: { title: "Ability Marketplace", link: "https://abilitymarketplace.com/"}
      },
      {
        name: "2XL Logistics",
        tool: "WordPress",
        content: "A landscaping company",
        imgPath: require("../../assets/website_banners/2xl_blue_logo.png"),
        bgSize: "contain",
        popupInfo: { title: "2XL Logistics", link: "https://2xllogistics.com/"}
      },
      {
        name: "Simbiosys",
        tool: "WordPress",
        content: "A landscaping company",
        imgPath: require("../../assets/website_banners/simbiosys_hero.png"),
        bgSize: "cover",
        popupInfo: { title: "Simbiosys", link: "https://simbiosys.tech/"}
      },
      {
        name: "Traverse Science",
        tool: "WordPress",
        content: "A landscaping company",
        imgPath: require("../../assets/website_banners/traverse_logo.png"),
        bgSize: "contain",
        popupInfo: { title: "Traverse Science", link: "https://traversescience.com/"}
      },
      {
        name: "KoJobs",
        tool: "WordPress",
        content: "A landscaping company",
        imgPath: require("../../assets/website_banners/kojobs_hero2.png"),
        bgSize: "cover",
        popupInfo: { title: "KoJobs", link: "https://kojobsillinois.com/"}
      }
    ]
  };

  render() {
    return (
        <CardList
          infos={this.state.website_infos}
          numCols="3"
          numRows="2"
          cardWidth="31"
          togglePopup={this.props.togglePopup}
        />
    );
  }
}
