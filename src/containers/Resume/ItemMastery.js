import React, { Component } from "react";
import { A, OpenButton, P } from "../../style/types";
import { Div, Flex } from "../../style/grid";
import { red, blue, green, black } from "../../style/variables";

// React component for the card (main component)
export default class ItemMastery extends Component {
  // Props: (wp or react), img, title, header, content, link
  state = {
    boxes: []
  };

  renderCircle = () => {
    for (let i = 0; i < 5; i++) {
      if (i <= this.props.mastery) {
        this.setState(prevState => ({
          boxes: [
            ...prevState.boxes,
            <div
              style={{
                width: "20px",
                height: "20px",
                border: "1px solid #424242",
                backgroundColor: "#424242",
                marginLeft: "0.1rem",
                borderRadius: "50%"
              }}
            />
          ]
        }));
      } else {
        this.setState(prevState => ({
          boxes: [
            ...prevState.boxes,
            <div
              style={{
                width: "20px",
                height: "20px",
                border: "1px solid #424242",
                backgroundColor: "white",
                // backgroundColor: "#60b6db",
                marginLeft: "0.1rem",
                borderRadius: "50%"
              }}
            />
          ]
        }));
      }
    }
  };

  // boxes[i] = (
  //   <div
  //     style={{
  //       width: "20px",
  //       height: "20px",
  //       backgroundColor: "#424242",
  //       // backgroundColor: "#60b6db",
  //       marginLeft: "0.1rem",
  //       borderRadius: "50%"
  //     }}
  //   />
  // );

  // if (props.semesters) {
  //   for (let i = 0; i < props.semesters; i++) {
  //     boxes.push(
  //       <div
  //         style={{
  //           width: "8px",
  //           height: "100%",
  //           backgroundColor: "#5baaa5",
  //           marginLeft: "0.1rem",
  //           borderRadius: "10px"
  //         }}
  //       />
  //     );
  //   }
  // }

  // Generate Semester boxes

  componentWillMount = () => {
    this.renderCircle();
  };

  render() {
    return (
      <Flex
        direction="row"
        style={{
          justifyContent: "flex-end"
        }}
      >
        {this.state.boxes}
      </Flex>
    );
  }
}
