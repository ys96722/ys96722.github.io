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
        // <div
        //   style={{
        //     // backgroundColor: "red",
        //     // height: "100%",
        //     // width: "1.2vw",
        //     // borderRadius: "50%"
        //     backgroundColor: "red",
        //     height: "1.5vw",
        //     width: "1.5vw",
        //     borderRadius: "50%",
        //     textAlign: "center",
        //     verticalAlign: "middle"
        //   }}
        //   key={i}
        // >
        //   <h3
        //     style={{
        //       color: "white"
        //     }}
        //   >
        //     P
        //   </h3>
        // </div>
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
        // <div
        //   style={{
        //     backgroundColor: "blue",
        //     height: "1.5vw",
        //     width: "1.5vw",
        //     borderRadius: "50%",
        //     textAlign: "center",
        //     verticalAlign: "middle"
        //   }}
        //   key={i}
        // >
        //   <h3
        //     style={{
        //       color: "white"
        //     }}
        //   >
        //     S
        //   </h3>
        // </div>
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
