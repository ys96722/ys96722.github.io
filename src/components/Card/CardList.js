import React from "react";
import Card from "../../components/Card/Card";
import { Flex, Div } from "../../style/grid";

const cardList = () => {
  return (
    <Div marginTop="4rem">
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
    </Div>
  );
};

export default cardList;
