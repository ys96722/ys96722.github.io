import React, { Component } from "react";
import { Title } from "../../style/variables";
import {
  ResumeContainer,
  Section,
  SubColumn,
  Item,
  ItemName,
  Column
} from "./Resume.style";

import ItemMastery from "./ItemMastery";

// import { Container } from "../../style/grid"; Moved it to App

export default class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ResumeContainer animation="fadeIn">
        <Title>Skills</Title>
        <Section>
          <Column>
            <h1>Data</h1>
            <br />
            <SubColumn>
              <h2>Scripts</h2>
              <Item>
                <ItemName>Python</ItemName>
                <ItemMastery projects={2} semesters={2} />
              </Item>
              <Item>
                <ItemName>R</ItemName>
                <ItemMastery semesters={2} />
              </Item>

              <h3>SAS</h3>
              <h3>Pig</h3>
            </SubColumn>
            <br />
            <SubColumn>
              <h2>Database</h2>
              <h3>Hive</h3>
              <h3>SQLite3</h3>
              <h3>MySQL</h3>
              <h3>Postgre</h3>
              <h3>PHPMyAdmin</h3>
            </SubColumn>
            <br />
            <SubColumn>
              <h2>Tools</h2>
              <h3>Bash</h3>
              <h3>Git</h3>
              <h3>Anaconda3</h3>
              <h3>Hadoop</h3>
              <h3>Scikit-Learn (Python)</h3>
              <h3>Pandas & Numpy (Python)</h3>
              <h3>PyPlot & Seaborn (Python)</h3>
            </SubColumn>
          </Column>
          <Column>
            <h1>Front</h1>
            <br />
            <SubColumn>
              <h2>Scripts</h2>
              <h3>JavaScript (ES6)</h3>
              <h3>Ruby</h3>
              <h3>PHP</h3>
            </SubColumn>
            <br />
            <SubColumn>
              <h2>Frameworks</h2>
              <h3>React.js</h3>
              <h3>Ruby on Rails</h3>
              <h3>WordPress</h3>
            </SubColumn>
            <br />
            <SubColumn>
              <h2>Tools</h2>
              <h3>Bash</h3>
              <h3>Git</h3>
              <h3>BootStrap</h3>
              <h3>Webpack (React)</h3>
              <h3>Redux (React)</h3>
              <h3>Axios (React)</h3>
              <h3>Jest (React)</h3>
            </SubColumn>
          </Column>
          <Column>
            <h1>Other</h1>
            <br />
            <SubColumn>
              <h2>Scripts</h2>
              <h3>Java</h3>
              <h3>C</h3>
              <h3>C++</h3>
              <h3>C#</h3>
              <h3>x82 Assembly</h3>
            </SubColumn>
            <br />
            <SubColumn>
              <h2>Frameworks</h2>
              <h3>Unity 3D</h3>
              <h3>Android Studio</h3>
            </SubColumn>
            <br />
            <SubColumn>
              <h2>Tools</h2>
              <h3>Hi</h3>
              <h3>Hello</h3>
            </SubColumn>
          </Column>
        </Section>
        <br />
        <br />
        <Title>Experience</Title>
        <Section>
          <Column>Hi</Column>
          <Column>Hi</Column>
          <Column>Hi</Column>
        </Section>
      </ResumeContainer>
      // <Div width="100%" marginLeft="5%">
      //   <Flex direction="column">
      //     <Primary>Skills</Primary>
      //     <Flex direction="row">
      //       <Flex direction="column" style={{marginLeft: "auto", marginRight: "auto"}}><Secondary>Front-end</Secondary></Flex>
      //       <Flex direction="column" style={{marginLeft: "auto", marginRight: "auto"}}><Secondary>Database</Secondary></Flex>
      //       <Flex direction="column" style={{marginLeft: "auto", marginRight: "auto"}}><Secondary>Engineering</Secondary></Flex>
      //     </Flex>
      //   </Flex>
      //   <Div>
      //     <Primary>Core Qualifications</Primary>
      //     <Secondary>Statistical Skills</Secondary>
      //     <Tertiary>A/B Testing</Tertiary>
      //     <Tertiary>Regression Analysis</Tertiary>
      //     <Secondary>Technical Skills</Secondary>
      //     <Tertiary>A/B Testing</Tertiary>
      //     <Tertiary>Regression Analysis</Tertiary>
      //   </Div>
      //   <Div>
      //     <Primary>Work Experience</Primary>
      //     <Secondary>EnterpriseWorks</Secondary>
      //     <Secondary>ChungHaMulSan</Secondary>
      //   </Div>
      //   <Div>
      //     <Primary>Leadership</Primary>
      //     <Secondary>KoJobs Illinois</Secondary>
      //     <Secondary>Codable</Secondary>
      //     <Secondary>Les Claviers</Secondary>
      //   </Div>
      //   <Div>
      //     <Primary>Education</Primary>
      //     <Secondary>1</Secondary>
      //     <Secondary>2</Secondary>
      //   </Div>
      // </Div>
    );
  }
}
