import React from "react";
import { A, OpenButton } from "../../style/types";
import { Div, Flex } from "../../style/grid";

// React component for the card (main component)
const itemMastery = props => {
  // Props: (wp or react), img, title, header, content, link
  const boxes = [];
  return (
    <Flex
      width="inherit"
      direction="row"
      style={{
        justifyContent: "flex-end"
      }}
    >
      {props.semesters ? (
        <div
          style={{
            backgroundColor: "red",
            height: "100%",
            width: "5%",
            borderRadius: "10%"
          }}
        />
      ) : null}
      {props.projects ? (
        <div
          style={{
            backgroundColor: "blue",
            height: "100%",
            width: "5%",
            borderRadius: "10%"
          }}
        />
      ) : null}
      {boxes}
    </Flex>
  );
};

export default itemMastery;
