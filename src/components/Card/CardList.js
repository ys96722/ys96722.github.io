import React from "react";
import Card from "../../components/Card/Card";
import { Flex, Div } from "../../style/grid";

const cardList = props => {
  const numCols = Number(props.numCols);
  const numRows = Number(props.numRows);
  const cardWidth = props.cardWidth;

  // 1. Create Cards
  const cards = [];
  for (let item of props.infos) {
    cards.push(
      <Card
        key={item.name}
        name={item.name}
        tool={item.tool}
        content={item.content}
        link={item.link}
        imgPath={item.imgPath}
        bgSize={item.bgSize}
        cardWidth={cardWidth}
      />
    );
  }
  // console.log(numRows, cards);

  // 2. Generate rows
  const rows = [];
  let counter = 0;
  for (let curRow = 1; curRow <= numRows; curRow++) {
    rows.push(
      <Flex row justify="center" key={curRow}>
        {cards.slice(counter, counter + numCols)}
      </Flex>
    );
    // console.log("Counter before:", counter);
    counter += numCols;
    // console.log("Counter after:", counter);
  }
  counter = 0;
  // console.log(rows, counter);

  return (
    <Div marginTop="4rem" marginBottom="4rem">
      {rows}
      {/* <Flex row justify="center">
        <Card
          name={props.infos[0].name}
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
      </Flex> */}
    </Div>
  );
};

export default cardList;
