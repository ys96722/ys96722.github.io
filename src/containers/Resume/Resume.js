import React, { Component } from "react";
import { Title, red, blue, green } from "../../style/variables";
import {
  ResumeContainer,
  SectionContainer,
  Section,
  SubColumn,
  Item,
  ItemName,
  Column,
  ColumnTitle
} from "./Resume.style";

// // import ItemMastery from "./ItemMastery";
import InfoIndex from "./InfoIndex";

// import { Container } from "../../style/grid"; Moved it to App

export default class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <InfoIndex />
        <ResumeContainer animation="fadeIn">
          <SectionContainer>
            <Title>Skills</Title>
            <Section>
              <Column bgColor={red}>
                <ColumnTitle bgColor={red}>Data</ColumnTitle>
                <br />
                <SubColumn>
                  <h2>Languages</h2>
                  <Item>
                    <ItemName>Python</ItemName>
                    {/* <ItemMastery projects={3} semesters={6} /> */}
                  </Item>

                  <Item>
                    <ItemName>R</ItemName>
                    {/* <ItemMastery semesters={6} /> */}
                  </Item>

                  <Item>
                    <ItemName>SAS</ItemName>
                    {/* <ItemMastery semesters={2} /> */}
                  </Item>

                  <Item>
                    <ItemName>Pig</ItemName>
                    {/* <ItemMastery semesters={1} /> */}
                  </Item>

                  <Item>
                    <ItemName>SQL</ItemName>
                    {/* <ItemMastery projects={4} semesters={3} /> */}
                  </Item>
                </SubColumn>
                <br />
                <SubColumn>
                  <h2>Database</h2>
                  <Item>
                    <ItemName>Firebase</ItemName>
                    {/* <ItemMastery projects={2} semesters={1} /> */}
                  </Item>
                  <Item>
                    <ItemName>SQLite3</ItemName>
                    {/* <ItemMastery projects={5} semesters={2} /> */}
                  </Item>
                  <Item>
                    <ItemName>MySQL</ItemName>
                    {/* <ItemMastery projects={2} semesters={2} /> */}
                  </Item>
                  <Item>
                    <ItemName>PostgreSQL</ItemName>
                    {/* <ItemMastery projects={2} semesters={1} /> */}
                  </Item>
                  <Item>
                    <ItemName>RSQLite</ItemName>
                    {/* <ItemMastery semesters={2} /> */}
                  </Item>
                  <Item>
                    <ItemName>Hive</ItemName>
                    {/* <ItemMastery semesters={1} /> */}
                  </Item>
                </SubColumn>
                <br />
                <SubColumn>
                  <h2>Tools</h2>
                  <Item>
                    <ItemName>Anaconda3</ItemName>
                    {/* <ItemMastery semesters={1} projects={6} /> */}
                  </Item>
                  <Item>
                    <ItemName>Hadoop</ItemName>
                    {/* <ItemMastery semesters={1} /> */}
                  </Item>
                  <Item>
                    <ItemName>Scikit-Learn</ItemName>
                    {/* <ItemMastery semesters={2} projects={2} /> */}
                  </Item>
                  <Item>
                    <ItemName>Pandas & Numpy</ItemName>
                    {/* <ItemMastery semesters={2} projects={5} /> */}
                  </Item>

                  <Item>
                    <ItemName>Seaborn & PyPlot</ItemName>
                    {/* <ItemMastery semesters={2} projects={5} /> */}
                  </Item>
                </SubColumn>
              </Column>
              <Column bgColor={blue}>
                <ColumnTitle bgColor={blue}>Development</ColumnTitle>
                <br />
                <SubColumn>
                  <h2>Languages</h2>
                  <Item>
                    <ItemName>JavaScript</ItemName>
                    {/* <ItemMastery semesters={1} projects={8} /> */}
                  </Item>
                  <Item>
                    <ItemName>Ruby</ItemName>
                    {/* <ItemMastery projects={2} /> */}
                  </Item>
                  <Item>
                    <ItemName>PHP</ItemName>
                    {/* <ItemMastery projects={7} /> */}
                  </Item>
                  <Item>
                    <ItemName>C#</ItemName>
                    {/* <ItemMastery semesters={1} projects={2} /> */}
                  </Item>
                  <Item>
                    <ItemName>Java</ItemName>
                    {/* <ItemMastery semesters={2} /> */}
                  </Item>
                </SubColumn>
                <br />
                <SubColumn>
                  <h2>Frameworks</h2>
                  <Item>
                    <ItemName>React.js</ItemName>
                    {/* <ItemMastery semesters={4} projects={3} /> */}
                  </Item>
                  <Item>
                    <ItemName>Ruby on Rails</ItemName>
                    {/* <ItemMastery semesters={1} projects={2} /> */}
                  </Item>
                  <Item>
                    <ItemName>WordPress</ItemName>
                    {/* <ItemMastery semesters={2} projects={7} /> */}
                  </Item>
                  <Item>
                    <ItemName>Unity 3D</ItemName>
                    {/* <ItemMastery semesters={1} projects={2} /> */}
                  </Item>
                  <Item>
                    <ItemName>Android Studio</ItemName>
                    {/* <ItemMastery semesters={1} /> */}
                  </Item>
                </SubColumn>
                <br />
                <SubColumn>
                  <h2>Tools</h2>
                  <Item>
                    <ItemName>BootStrap</ItemName>
                    {/* <ItemMastery projects={7} /> */}
                  </Item>
                  <Item>
                    <ItemName>Webpack</ItemName>
                    {/* <ItemMastery projects={2} /> */}
                  </Item>
                  <Item>
                    <ItemName>Redux</ItemName>
                    {/* <ItemMastery projects={2} /> */}
                  </Item>
                  <Item>
                    <ItemName>Axios</ItemName>
                    {/* <ItemMastery projects={2} /> */}
                  </Item>
                  <Item>
                    <ItemName>Jest</ItemName>
                    {/* <ItemMastery projects={2} /> */}
                  </Item>
                </SubColumn>
              </Column>
              <Column bgColor={green}>
                <ColumnTitle bgColor={green}>General</ColumnTitle>
                <br />
                <SubColumn>
                  <h2>Languages</h2>
                  <Item>
                    <ItemName>Bash</ItemName>
                    {/* <ItemMastery semesters={6} projects={6} /> */}
                  </Item>
                  <Item>
                    <ItemName>C</ItemName>
                    {/* <ItemMastery semesters={1} /> */}
                  </Item>
                  <Item>
                    <ItemName>C++</ItemName>
                    {/* <ItemMastery semesters={1} /> */}
                  </Item>

                  <Item>
                    <ItemName>Verilog</ItemName>
                    {/* <ItemMastery semesters={1} /> */}
                  </Item>
                </SubColumn>
                <br />
                <SubColumn>
                  <h2>Architectures</h2>
                  <Item>
                    <ItemName>OOP</ItemName>
                    {/* <ItemMastery semesters={4} projects={5} /> */}
                  </Item>
                  <Item>
                    <ItemName>CBD</ItemName>
                    {/* <ItemMastery semesters={1} /> */}
                  </Item>
                  <Item>
                    <ItemName>MVC</ItemName>
                    {/* <ItemMastery semesters={1} projects={2} /> */}
                  </Item>
                  <Item>
                    <ItemName>REST API</ItemName>
                    {/* <ItemMastery semesters={1} /> */}
                  </Item>
                  <Item>
                    <ItemName>TDD</ItemName>
                    {/* <ItemMastery semesters={1} /> */}
                  </Item>
                </SubColumn>
                <br />
                <SubColumn>
                  <h2>Tools</h2>
                  <Item>
                    <ItemName>Git</ItemName>
                    {/* <ItemMastery semesters={6} projects={6} /> */}
                  </Item>
                  <Item>
                    <ItemName>VSCode</ItemName>
                    {/* <ItemMastery semesters={6} projects={6} /> */}
                  </Item>
                </SubColumn>
              </Column>
            </Section>
          </SectionContainer>
          <br />
          <br />
          <SectionContainer>
            <Title>Experience</Title>
            <Section>
              <Column>Hi</Column>
              <Column>Hi</Column>
              <Column>Hi</Column>
            </Section>
          </SectionContainer>
          <br />
          <br />
          <SectionContainer>
            <Title>Academic</Title>
            <Section>
              <Column width="80%" textAlign="left">
                <h1>University of Illinois at Urbana-Champaign</h1>
                <h2>Bachelors of Science in Statistics</h2>
                <h2>Minor in Computer Science</h2>
              </Column>
              <Column width="20%" />
            </Section>
          </SectionContainer>
        </ResumeContainer>
      </>
    );
  }
}
