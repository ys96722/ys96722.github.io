import React from "react";
import { A, OpenButton } from "../../style/types";
import { Div, Flex } from "../../style/grid";
import { red, blue, green } from "../../style/variables";

// React component for the card (main component)
const itemMastery = props => {
  // Props: (wp or react), img, title, header, content, link
  const boxes = [];

  // Generate Project boxes
  if (props.projects) {
    for (let i = 0; i < props.projects; i++) {
      boxes.push(
        <div
          style={{
            width: "8px",
            height: "100%",
            backgroundColor: "#f25f5c",
            // backgroundColor: "#60b6db",
            marginLeft: "0.1rem",
            borderRadius: "10px"
          }}
        />
      );
    }
  }

  if (props.semesters) {
    for (let i = 0; i < props.semesters; i++) {
      boxes.push(
        <div
          style={{
            width: "8px",
            height: "100%",
            backgroundColor: "#5baaa5",
            marginLeft: "0.1rem",
            borderRadius: "10px"
          }}
        />
      );
    }
  }

  // Generate Semester boxes

  return (
    <Flex
      direction="row"
      style={{
        justifyContent: "flex-end"
      }}
    >
      {boxes}
    </Flex>
  );
};

export default itemMastery;
