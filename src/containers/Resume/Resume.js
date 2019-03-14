import React, { Component } from "react";
import { Title, red, blue, green } from "../../style/variables";
import {
  ResumeContainer,
  Section,
  SubColumn,
  Item,
  ItemName,
  Column,
  ColumnTitle
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
          <Column bgColor={red}>
            <ColumnTitle>Data</ColumnTitle>
            <br />
            <SubColumn>
              <h2>Scripts</h2>
              <Item>
                <ItemName>Python</ItemName>
                <ItemMastery projects={3} semesters={6} />
              </Item>

              <Item>
                <ItemName>R</ItemName>
                <ItemMastery semesters={6} />
              </Item>

              <Item>
                <ItemName>SAS</ItemName>
                <ItemMastery semesters={2} />
              </Item>

              <Item>
                <ItemName>Pig</ItemName>
                <ItemMastery semesters={1} />
              </Item>
            </SubColumn>
            <br />
            <SubColumn>
              <h2>Database</h2>
              <Item>
                <ItemName>SQLite3</ItemName>
                <ItemMastery projects={5} semesters={2} />
              </Item>
              <Item>
                <ItemName>MySQL</ItemName>
                <ItemMastery projects={2} semesters={2} />
              </Item>
              <Item>
                <ItemName>PostgreSQL</ItemName>
                <ItemMastery projects={2} semesters={1} />
              </Item>
              <Item>
                <ItemName>RSQLite</ItemName>
                <ItemMastery semesters={2} />
              </Item>
              <Item>
                <ItemName>Hive</ItemName>
                <ItemMastery semesters={1} />
              </Item>
            </SubColumn>
            <br />
            <SubColumn>
              <h2>Tools</h2>
              <Item>
                <ItemName>Anaconda3</ItemName>
                <ItemMastery semesters={1} projects={6} />
              </Item>
              <Item>
                <ItemName>Hadoop</ItemName>
                <ItemMastery semesters={1} />
              </Item>
              <Item>
                <ItemName>Scikit</ItemName>
                <ItemMastery semesters={2} projects={2} />
              </Item>
              <Item>
                <ItemName>Pandas</ItemName>
                <ItemMastery semesters={2} projects={5} />
              </Item>

              <Item>
                <ItemName>Seaborn</ItemName>
                <ItemMastery semesters={2} projects={5} />
              </Item>
              <Item>
                <ItemName>PHPMyAdmin</ItemName>
                <ItemMastery projects={7} />
              </Item>
            </SubColumn>
          </Column>
          <Column bgColor={blue}>
            <ColumnTitle>Development</ColumnTitle>
            <br />
            <SubColumn>
              <h2>Scripts</h2>
              <Item>
                <ItemName>JavaScript</ItemName>
                <ItemMastery semesters={1} projects={8} />
              </Item>
              <Item>
                <ItemName>Ruby</ItemName>
                <ItemMastery projects={2} />
              </Item>
              <Item>
                <ItemName>PHP</ItemName>
                <ItemMastery projects={7} />
              </Item>
              <Item>
                <ItemName>C#</ItemName>
                <ItemMastery semesters={1} projects={2} />
              </Item>
              <Item>
                <ItemName>Java</ItemName>
                <ItemMastery semesters={2} />
              </Item>
            </SubColumn>
            <br />
            <SubColumn>
              <h2>Frameworks</h2>
              <Item>
                <ItemName>React.js</ItemName>
                <ItemMastery semesters={2} projects={3} />
              </Item>
              <Item>
                <ItemName>Ruby on Rails</ItemName>
                <ItemMastery semesters={1} projects={2} />
              </Item>
              <Item>
                <ItemName>WordPress</ItemName>
                <ItemMastery projects={7} />
              </Item>
              <Item>
                <ItemName>Unity 3D</ItemName>
                <ItemMastery semesters={1} projects={2} />
              </Item>
              <Item>
                <ItemName>Android Studio</ItemName>
                <ItemMastery semesters={1} />
              </Item>
            </SubColumn>
            <br />
            <SubColumn>
              <h2>Tools</h2>
              <Item>
                <ItemName>BootStrap</ItemName>
                <ItemMastery projects={7} />
              </Item>
              <Item>
                <ItemName>Webpack</ItemName>
                <ItemMastery projects={2} />
              </Item>
              <Item>
                <ItemName>Redux</ItemName>
                <ItemMastery projects={2} />
              </Item>
              <Item>
                <ItemName>Axios</ItemName>
                <ItemMastery projects={2} />
              </Item>
              <Item>
                <ItemName>Jest</ItemName>
                <ItemMastery projects={2} />
              </Item>
            </SubColumn>
          </Column>
          <Column bgColor={green}>
            <ColumnTitle>General</ColumnTitle>
            <br />
            <SubColumn>
              <h2>Scripts</h2>
              <Item>
                <ItemName>Bash</ItemName>
                <ItemMastery semesters={6} projects={6} />
              </Item>
              <Item>
                <ItemName>C</ItemName>
                <ItemMastery semesters={1} />
              </Item>
              <Item>
                <ItemName>C++</ItemName>
                <ItemMastery semesters={1} />
              </Item>

              <Item>
                <ItemName>Verilog</ItemName>
                <ItemMastery semesters={1} />
              </Item>
            </SubColumn>
            <br />
            <SubColumn>
              <h2>Architectures</h2>
              <Item>
                <ItemName>MVC</ItemName>
                <ItemMastery semesters={1} projects={2} />
              </Item>
              <Item>
                <ItemName>OOP</ItemName>
                <ItemMastery semesters={1} />
              </Item>
              <Item>
                <ItemName>REST</ItemName>
                <ItemMastery semesters={1} />
              </Item>
              <Item>
                <ItemName>TTD</ItemName>
                <ItemMastery semesters={1} />
              </Item>
            </SubColumn>
            <br />
            <SubColumn>
              <h2>Tools</h2>
              <Item>
                <ItemName>Git</ItemName>
                <ItemMastery semesters={6} projects={6} />
              </Item>
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
    );
  }
}
