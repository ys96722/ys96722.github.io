import React, { Component } from "react";
import { Title } from "../../style/variables";
import { Flex, Div } from "../../style/grid";
import { Primary, Secondary, Tertiary } from "./Resume.style"

// import { Container } from "../../style/grid"; Moved it to App

export default class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }


  render() {
    return (
      <Div width="100%">
        <Div>
          <Primary>Core Qualifications</Primary>
          <Secondary>Statistical Skills</Secondary>
          <Tertiary>A/B Testing</Tertiary>
          <Tertiary>Regression Analysis</Tertiary>
          <Secondary>Technical Skills</Secondary>
          <Tertiary>A/B Testing</Tertiary>
          <Tertiary>Regression Analysis</Tertiary>
        </Div>
        <Div>
          <Primary>Work Experience</Primary>
          <Secondary>EnterpriseWorks</Secondary>
          <Secondary>ChungHaMulSan</Secondary>
        </Div>
        <Div>
          <Primary>Leadership</Primary>
          <Secondary>KoJobs Illinois</Secondary>
          <Secondary>Codable</Secondary>
          <Secondary>Les Claviers</Secondary>
        </Div>
        <Div>
          <Primary>Education</Primary>
          <Secondary>1</Secondary>
          <Secondary>2</Secondary>
        </Div>
      </Div> 
    );
  }
}
