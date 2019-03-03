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
        tools={item.tools}
        link={item.link}
        imgPath={item.imgPath}
        bgSize={item.bgSize}
        cardWidth={cardWidth}
        togglePopup={props.togglePopup}
        popupInfo={item.popupInfo}
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
    <Div marginTop="4rem" marginBottom="4rem" animation="fadeIn">
      {rows}
    </Div>
  );
};

export default cardList;
