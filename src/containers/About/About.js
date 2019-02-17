import React, { Component } from "react";
import { Title } from "../../style/variables";
import Card from "../../components/Card/Card";
import { Flex } from "../../style/grid";
// import { Container } from "../../style/grid"; Moved it to App

class About extends Component {
  state = {};
  render() {
    return (
      <>
        {/* <Title>This is About.</Title> */}
        <Flex row justify="center">
          <Card name="Native Roots" tool="WordPress" />
          <Card name="Ability Marketplace" tool="WordPress" />
          <Card name="2XL Logistics" tool="WordPress" />
        </Flex>
        <Flex row justify="center">
          <Card name="Simbiosys" tool="WordPress" />
          <Card name="Traverse Science" tool="WordPress" />
          <Card name="KoJobs" tool="WordPress" />
        </Flex>
      </>
    );
  }
}

export default About;
