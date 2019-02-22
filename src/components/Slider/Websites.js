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

  render() {
    return (
      // <Div marginTop="3rem" marginBottom="3rem">
      //   <Flex row justify="center">
      //     <Card
      //       name={this.state.website_infos[0].name}
      //       tool={this.state.website_infos[0].tool}
      //       imgPath={this.state.website_infos[0].imgPath}
      //       bgSize={this.state.website_infos[0].bgSize}
      //     />
      //     <Card
      //       name={this.state.website_infos[1].name}
      //       tool={this.state.website_infos[1].tool}
      //       imgPath={this.state.website_infos[1].imgPath}
      //       bgSize={this.state.website_infos[1].bgSize}
      //     />
      //     <Card
      //       name={this.state.website_infos[2].name}
      //       tool={this.state.website_infos[2].tool}
      //       imgPath={this.state.website_infos[2].imgPath}
      //       bgSize={this.state.website_infos[2].bgSize}
      //     />
      //   </Flex>
      //   <Flex row justify="center">
      //     <Card
      //       name={this.state.website_infos[3].name}
      //       tool={this.state.website_infos[3].tool}
      //       imgPath={this.state.website_infos[3].imgPath}
      //       bgSize={this.state.website_infos[3].bgSize}
      //     />
      //     <Card
      //       name={this.state.website_infos[4].name}
      //       tool={this.state.website_infos[4].tool}
      //       imgPath={this.state.website_infos[4].imgPath}
      //       bgSize={this.state.website_infos[4].bgSize}
      //     />
      //     <Card
      //       name={this.state.website_infos[5].name}
      //       tool={this.state.website_infos[5].tool}
      //       imgPath={this.state.website_infos[5].imgPath}
      //       bgSize={this.state.website_infos[5].bgSize}
      //     />
      //   </Flex>
      // </Div>
      <CardList
        infos={this.state.website_infos}
        numCols="3"
        numRows="2"
        cardWidth="50"
      />
    );
  }
}
