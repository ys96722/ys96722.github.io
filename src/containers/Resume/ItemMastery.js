import React, { Component } from "react";
import { Flex } from "../../style/grid";
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
      if (this.props.mastery && i < this.props.mastery) {
        this.setState(prevState => ({
          boxes: [
            ...prevState.boxes,
            <div
              key={i}
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
              key={i}
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
            {this.props.certificates ? (
              <Flex direction="row">
                <Flex style={{ color: "white" }}>Certificates:{"\u00A0"}</Flex>
                <Flex style={{ marginLeft: "auto", color: "white" }}>
                  {this.props.certificates}
                </Flex>
              </Flex>
            ) : null}
            {this.props.projects ? (
              <Flex direction="row">
                <Flex style={{ color: "white" }}>Projects:{"\u00A0"}</Flex>
                <Flex style={{ marginLeft: "auto", color: "white" }}>
                  {" "}
                  {this.props.projects}
                </Flex>
              </Flex>
            ) : null}
            {this.props.semesters ? (
              <Flex direction="row">
                <Flex style={{ color: "white" }}>Courses:{"\u00A0"}</Flex>
                <Flex style={{ marginLeft: "auto", color: "white" }}>
                  {this.props.semesters}
                </Flex>
              </Flex>
            ) : null}
          </Tooltip>
        ) : null}
      </MasteryContainer>
    );
  }
}
