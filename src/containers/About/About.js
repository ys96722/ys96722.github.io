import React, { Component } from "react";
import { Title } from "../../style/variables";
import Card from "../../components/Card/Card";
import { Flex } from "../../style/grid";
// import { Container } from "../../style/grid"; Moved it to App

class About extends Component {
  state = {};
  render() {
    return (
      <>
        {/* <Title>This is About.</Title> */}
        {/* <img src={require("../../assets/song_banners/happier_cover.jpeg")} alt="img"></img> */}
        {/* <div style={{ position: 'relative', backgroundImage: 'url(require("../../assets/song_banners/forever.jpeg"))', width: '50vw', height: '50vh'}}></div> */}
        <Flex row justify="center">
          <Card
            name="Native Roots"
            tool="WordPress"
            imgPath={require("../../assets/website_banners/native_hero.png")}
            bgSize="cover"
          />
          <Card
            name="Ability Marketplace"
            tool="WordPress"
            imgPath={require("../../assets/website_banners/ability_logo.png")}
            bgSize="cover"
          />
          <Card
            name="2XL Logistics"
            tool="WordPress"
            imgPath={require("../../assets/website_banners/2xl_blue_logo.png")}
            bgSize="contain"
          />
        </Flex>
        <Flex row justify="center">
          <Card
            name="Simbiosys"
            tool="WordPress"
            imgPath={require("../../assets/website_banners/simbiosys_hero.png")}
            bgSize="cover"
          />
          <Card
            name="Traverse Science"
            tool="WordPress"
            imgPath={require("../../assets/website_banners/traverse_logo.png")}
            bgSize="contain"
          />
          <Card
            name="KoJobs"
            tool="WordPress"
            imgPath={require("../../assets/website_banners/kojobs_hero2.png")}
            bgSize="cover"
          />
        </Flex>
      </>
    );
  }
}

export default About;
