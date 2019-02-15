// Import Dependencies
import React, { Component } from "react";
import "./Projects.css";
// Import Styled Components
import { Relative, Flex } from "../../style/grid";
// import { A } from "../../style/types";
// import { Index } from "./Projects.style";
// import { Title } from "../../style/variables";
import Categories from "../../components/Slider/Categories";

export default class Projects extends Component {
  render() {
    return (
      <>
        {/* <Title>This is Projects.</Title> */}

        {/* <Relative marginBottom="50px" marginTop="100px">
          <Index>
            <h1>01</h1>
          </Index>
          <h1>Project A</h1>
        </Relative> */}
        <Flex justify={"center"} marginBottom="5em">
          <Categories />
        </Flex>

        {/* <Relative marginBottom="50px">
          <Index>
            <h1>02</h1>
          </Index>
          <h1>Project B</h1>
        </Relative>
        <Flex justify={"center"} marginBottom="5em">
          <h1> Content B</h1>
        </Flex>

        <Relative marginBottom="50px">
          <Index>
            <h1>03</h1>
          </Index>
          <h1>Project C</h1>
        </Relative>
        <Flex justify={"center"} marginBottom="5em">
          <h1> Content C</h1>
        </Flex> */}
      </>
    );
  }
}
