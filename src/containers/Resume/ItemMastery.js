import React, { Component } from "react";
import { A, OpenButton, P } from "../../style/types";
import { Div, Flex } from "../../style/grid";
import { red, blue, green, black } from "../../style/variables";
import { MasteryContainer, Tooltip } from "./ItemMastery.style";

// React component for the card (main component)
export default class ItemMastery extends Component {
  // Props: (wp or react), img, title, header, content, link
  state = {
    boxes: [],
    hover: false
  };

  handleMouseIn = () => {
    this.setState({ hover: true });
  };

  handleMouseOut = () => {
    this.setState({ hover: false });
  };

  renderCircle = () => {
    for (let i = 0; i < 5; i++) {
      if (i < this.props.mastery) {
        this.setState(prevState => ({
          boxes: [
            ...prevState.boxes,
            <div
              style={{
                width: "20px",
                height: "20px",
                border: "1px solid #424242", //light black
                // border: "1px solid #fdee6c", //yellow
                // border: "1px solid black",
                // backgroundColor: "#247ba0", //light blue
                backgroundColor: "#424242", //light black
                // backgroundColor: "black",
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
      <MasteryContainer
        onMouseOver={this.handleMouseIn}
        onMouseLeave={this.handleMouseOut}
        direction="row"
        style={{
          justifyContent: "flex-end"
        }}
      >
        {this.state.boxes}
        {this.props.projects || this.props.semesters ? (
          <Tooltip hover={this.state.hover}>
            {this.props.projects ? (
              <Flex direction="row">
                <p>Projects:{"\u00A0"}</p>
                <p> {this.props.projects}</p>
              </Flex>
            ) : null}
            {this.props.semesters ? (
              <Flex direction="row">
                <p>Courses:{"\u00A0"}</p>
                <p>{this.props.semesters}</p>
              </Flex>
            ) : null}
          </Tooltip>
        ) : null}
      </MasteryContainer>
    );
  }
}
