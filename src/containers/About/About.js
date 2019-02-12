import React, { Component } from "react";
import { Title } from "../../style/variables";
import Card from "../../components/Card/Card";
// import { Container } from "../../style/grid"; Moved it to App

class About extends Component {
  state = {};
  render() {
    return (
      <>
        <Title>This is About.</Title>
        <Card />
      </>
    );
  }
}

export default About;
