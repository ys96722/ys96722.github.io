import React, { Component } from "react";
import { Title, red, blue, green } from "../../style/variables";
import { P, A } from "../../style/types";
import {
  ResumeContainer,
  SectionContainer,
  Section,
  SubColumn,
  Item,
  ItemName,
  Column,
  ColumnTitle,
  Row,
  Li,
  JobTitle,
  CompanyTitle,
  CompanyInfo,
  SchoolTitle,
  SchoolInfo
} from "./Resume.style";

import ItemMastery from "./ItemMastery";
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
        <ResumeContainer animation="fadeIn">
          <SectionContainer>
            <Title>Skills</Title>
            <InfoIndex />
            <Section flexDirection="row" justifyContent="space-evenly">
              <Column bgColor={red}>
                <ColumnTitle bgColor={red}>Data</ColumnTitle>
                <br />
                <SubColumn>
                  <h2>Languages</h2>
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

                  <Item>
                    <ItemName>SQL</ItemName>
                    <ItemMastery projects={4} semesters={3} />
                  </Item>
                </SubColumn>
                <br />
                <SubColumn>
                  <h2>Database</h2>
                  <Item>
                    <ItemName>Firebase</ItemName>
                    <ItemMastery projects={2} semesters={1} />
                  </Item>
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
                    <ItemName>Scikit-Learn</ItemName>
                    <ItemMastery semesters={2} projects={2} />
                  </Item>
                  <Item>
                    <ItemName>Pandas & Numpy</ItemName>
                    <ItemMastery semesters={2} projects={5} />
                  </Item>

                  <Item>
                    <ItemName>Seaborn & PyPlot</ItemName>
                    <ItemMastery semesters={2} projects={5} />
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
                    <ItemMastery semesters={3} projects={8} />
                  </Item>
                  <Item>
                    <ItemName>Ruby</ItemName>
                    <ItemMastery projects={2} />
                  </Item>
                  <Item>
                    <ItemName>PHP</ItemName>
                    <ItemMastery semesters={1} projects={7} />
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
                    <ItemMastery semesters={4} projects={3} />
                  </Item>
                  <Item>
                    <ItemName>Ruby on Rails</ItemName>
                    <ItemMastery semesters={1} projects={2} />
                  </Item>
                  <Item>
                    <ItemName>WordPress</ItemName>
                    <ItemMastery semesters={2} projects={7} />
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
                <ColumnTitle bgColor={green}>General</ColumnTitle>
                <br />
                <SubColumn>
                  <h2>Languages</h2>
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
                    <ItemName>OOP</ItemName>
                    <ItemMastery semesters={4} projects={5} />
                  </Item>
                  <Item>
                    <ItemName>CBD</ItemName>
                    <ItemMastery semesters={1} />
                  </Item>
                  <Item>
                    <ItemName>MVC</ItemName>
                    <ItemMastery semesters={1} projects={2} />
                  </Item>
                  <Item>
                    <ItemName>REST API</ItemName>
                    <ItemMastery semesters={1} />
                  </Item>
                  <Item>
                    <ItemName>TDD</ItemName>
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
                  <Item>
                    <ItemName>VSCode</ItemName>
                    <ItemMastery semesters={6} projects={6} />
                  </Item>
                </SubColumn>
              </Column>
            </Section>
          </SectionContainer>
          <br />
          <br />
          <SectionContainer>
            <Title>Experience</Title>
            <Section flexDirection="column" justifyContent="top">
              <Row>
                <Column width="30%" textAlign="left">
                  <CompanyTitle>
                    <A href="http://researchpark.illinois.edu/" target="_blank">
                      Enterprise Works
                    </A>
                  </CompanyTitle>
                  <CompanyInfo>May 2018 - current (10 months)</CompanyInfo>
                  <CompanyInfo>Champaign, IL</CompanyInfo>
                </Column>
                <Column width="70%" textAlign="left">
                  <JobTitle>Web Developer (Internship)</JobTitle>
                  <ul>
                    <Li>
                      Develop eight websites for startups using WordPress, PHP,
                      JavaScript, and CSS and produce tutorial videos for
                      clients
                    </Li>
                    <Li>
                      Coordinate two web development workshops to create a more
                      cohesive workflow between designers and developers
                    </Li>
                    <Li>
                      Reduce hours spent per website by approximately 10 hours
                      by devising a new SOP for web developers and graphic
                      designers
                    </Li>
                    <Li>
                      Lead biweekly web development study group on JavaScript,
                      CSS, and HTML5 to provide a basic development knowledge
                    </Li>
                  </ul>
                </Column>
              </Row>
              <Row marginTop="4rem">
                <Column width="30%" textAlign="left">
                  <CompanyTitle>
                    <A href="https://kojobsillinois.com/" target="_blank">
                      Codable
                    </A>
                  </CompanyTitle>
                  <CompanyInfo>July 2017 - current (21 months)</CompanyInfo>
                  <CompanyInfo>Champaign, IL</CompanyInfo>
                </Column>
                <Column width="70%" textAlign="left">
                  <JobTitle>Founding President (Student Organization)</JobTitle>
                  <ul>
                    <Li>
                      Create operating systems and provide administrative
                      support for HR, PR, Finance, and Curriculum department
                    </Li>
                    <Li>
                      Design a Ruby on Rails curriculum with professional full
                      stack developers to provide an approachable program for
                      members
                    </Li>
                    <Li>
                      Educate members by leading weekly Ruby on Rails study
                      groups on MVC development, RESTful API, and HTTP methods.
                    </Li>
                  </ul>
                </Column>
              </Row>
              <Row marginTop="4rem">
                <Column width="30%" textAlign="left">
                  <CompanyTitle>
                    <A href="https://kojobsillinois.com/" target="_blank">
                      KoJobs
                    </A>
                  </CompanyTitle>
                  <CompanyInfo>
                    September 2016 - current (31 months)
                  </CompanyInfo>
                  <CompanyInfo>Champaign, IL</CompanyInfo>
                </Column>
                <Column width="70%" textAlign="left">
                  <JobTitle>Vice President (Student Organization)</JobTitle>
                  <ul>
                    <Li>
                      Facilitate workshops with start-up entrepreneurs, content
                      creators, and web developers to offer insights into
                      start-up industry
                    </Li>
                    <Li>
                      Arrange mock interviews, resume sessions, and office tours
                      by contacting professionals at local corporations and
                      start-ups
                    </Li>
                    <Li>
                      Educate members by leading weekly Python study groups on
                      OOP, data wrangling, visualization, and machine learning
                    </Li>
                  </ul>
                </Column>
              </Row>
            </Section>
          </SectionContainer>
          <br />
          <br />
          <SectionContainer>
            <Title>Academic</Title>
            <Section flexDirection="column">
              {/* <Row>
                <Column width="30%" textAlign="left">
                  <CompanyTitle>
                    University of Illinois
                  </CompanyTitle>
                  <CompanyInfo>January 2016 - current (39 months)</CompanyInfo>
                  <CompanyInfo>Urbana-Champaign, IL</CompanyInfo>
                </Column>
                <Column width="70%" textAlign="left">
                  <JobTitle>Bachelors of Science in Statistics</JobTitle>
                  <ul>
                    <Li>
                      Analysis: ANOVA analysis, A/B testing, correlation
                      analysis, regression analysis, permutation testing,
                      hypothesis testing
                    </Li>
                    <Li>
                      Modeling: logistic regression, k-means, SVM, random
                      forest, decision tree, naïve Bayes, cross-validation,
                      XGBoost, PCA
                    </Li>
                    <Li>
                      Certificates: Certificate in Data Science from University
                      of Illinois at Urbana-Champaign, Nanodegree in Data
                      Analytics from Udacity
                    </Li>
                  </ul>
                </Column>
              </Row> */}
              <Row>
                <Column width="50%" textAlign="left">
                  <SchoolTitle>
                    {/* <A href="https://kojobsillinois.com/" target="_blank"> */}
                    University of Illinois at Urbana-Champaign
                    {/* </A> */}
                  </SchoolTitle>
                  <SchoolInfo>Graduatation: May 2019</SchoolInfo>
                </Column>
                <Column width="50%" textAlign="right">
                  <SchoolTitle fontWeight="400">
                    Bachelors of Science in Statistics
                  </SchoolTitle>
                  <SchoolInfo>Minor in Computer Science</SchoolInfo>
                </Column>
              </Row>
              <Row marginTop="4rem">
                <Column width="50%" textAlign="center">
                  <h1>Analytics</h1>
                </Column>
                <Column width="50%" textAlign="center">
                  <h1>Modeling</h1>
                </Column>
              </Row>
            </Section>
          </SectionContainer>
        </ResumeContainer>
      </>
    );
  }
}
