import React, { Component } from "react";
import { Title, red, blue, green } from "../../style/variables";
import {
  A,
  PageTitle,
  PageSubTitle,
  NavButton,
  BottomDiv
} from "../../style/types";
import { Div } from "../../style/grid";
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
  SchoolInfo,
  SmallAlert
} from "./Resume.style";

import ItemMastery from "./ItemMastery";

// import { Container } from "../../style/grid"; Moved it to App

export default class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // let size = window.innerWidth;

    // if (size <= 990) {
    //   return (
    //     <SmallAlert>
    //       My online resume is not available for smaller viewports. Please
    //       contact me at yoonsees@gmail.com for more information!
    //     </SmallAlert>
    //   );
    // } else {
    return (
      <Div style={{ position: "relative" }}>
        <SmallAlert animation="fadeIn">
          <h1>
            My online resume is not available for smaller viewports. Please
            contact me at yoonsees@gmail.com for more information!
          </h1>
        </SmallAlert>
        <ResumeContainer animation="fadeIn" style={{ position: "relative" }}>
          <Div width="60%" marginLeft="auto" marginRight="auto">
            <PageTitle>Online Résumé</PageTitle>
            <br />
            <PageSubTitle>
              A summary of what I have done and what I can do. Looking for a
              more traditional resume? Message me on{"\u00A0"}
              <A href="https://www.linkedin.com/in/yoonchang" target="_blank">
                LinkedIn!
              </A>
            </PageSubTitle>
          </Div>
          <br />
          <br />
          <br />

          <SectionContainer className="skills">
            <Title>Skills</Title>
            {/* <InfoIndex /> */}
            <Section flexDirection="row" justifyContent="space-evenly">
              <Column bgColor={red}>
                <ColumnTitle bgColor={red}>Data</ColumnTitle>
                <br />
                <SubColumn>
                  <h2>Languages</h2>
                  <Item>
                    <ItemName>Python</ItemName>
                    <ItemMastery mastery={4} projects="6" semesters="6" />
                  </Item>

                  <Item>
                    <ItemName>SQL</ItemName>
                    <ItemMastery mastery={3} projects="6" semesters="4" />
                  </Item>

                  <Item>
                    <ItemName>R</ItemName>
                    <ItemMastery mastery={4} projects="2" semesters="6" />
                  </Item>

                  <Item>
                    <ItemName>SAS</ItemName>
                    <ItemMastery mastery={2} projects="2" semesters="2" />
                  </Item>

                  <Item>
                    <ItemName>Pig</ItemName>
                    <ItemMastery mastery={1} projects="1" semesters="1" />
                  </Item>
                </SubColumn>
                <br />
                <SubColumn>
                  <h2>Database</h2>

                  <Item>
                    <ItemName>SQLite3</ItemName>
                    <ItemMastery mastery={3} projects="8" semesters="4" />
                  </Item>

                  <Item>
                    <ItemName>MySQL</ItemName>
                    <ItemMastery mastery={3} projects="5" semesters="4" />
                  </Item>
                  <Item>
                    <ItemName>PostgreSQL</ItemName>
                    <ItemMastery mastery={3} projects="4" semesters="1" />
                  </Item>
                  <Item>
                    <ItemName>Firebase</ItemName>
                    <ItemMastery mastery={2} projects="1" semesters="1" />
                  </Item>

                  <Item>
                    <ItemName>RSQLite</ItemName>
                    <ItemMastery mastery={2} projects="1" semesters="1" />
                  </Item>
                  <Item>
                    <ItemName>Hive</ItemName>
                    <ItemMastery mastery={1} projects="1" semesters="1" />
                  </Item>
                </SubColumn>
                <br />
                <SubColumn>
                  <h2>Tools</h2>
                  <Item>
                    <ItemName>Anaconda3</ItemName>
                    <ItemMastery mastery={4} projects="8" semesters="1" />
                  </Item>
                  <Item>
                    <ItemName>Pandas & Numpy</ItemName>
                    <ItemMastery mastery={4} projects="8" semesters="4" />
                  </Item>
                  <Item>
                    <ItemName>Hadoop</ItemName>
                    <ItemMastery mastery={3} projects="3" semesters="2" />
                  </Item>
                  <Item>
                    <ItemName>Scikit-Learn</ItemName>
                    <ItemMastery mastery={3} projects="5" semesters="3" />
                  </Item>

                  <Item>
                    <ItemName>Seaborn & PyPlot</ItemName>
                    <ItemMastery mastery={3} projects="8" semesters="2" />
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
                    <ItemMastery
                      mastery={4}
                      projects="6"
                      semesters="6"
                      certificates="2"
                    />
                  </Item>
                  <Item>
                    <ItemName>Ruby</ItemName>
                    <ItemMastery mastery={2} projects="6" semesters="1" />
                  </Item>
                  <Item>
                    <ItemName>PHP</ItemName>
                    <ItemMastery mastery={3} projects="8" semesters="1" />
                  </Item>
                  <Item>
                    <ItemName>C#</ItemName>
                    <ItemMastery mastery={2} projects="3" semesters="1" />
                  </Item>
                  <Item>
                    <ItemName>Java</ItemName>
                    <ItemMastery mastery={2} projects="2" semesters="1" />
                  </Item>
                </SubColumn>
                <br />
                <SubColumn>
                  <h2>Frameworks</h2>
                  <Item>
                    <ItemName>React.js</ItemName>
                    <ItemMastery
                      mastery={3}
                      projects="5"
                      semesters="2"
                      certificates="2"
                    />
                  </Item>
                  <Item>
                    <ItemName>WordPress</ItemName>
                    <ItemMastery mastery={4} projects="9" semesters="2" />
                  </Item>
                  <Item>
                    <ItemName>Ruby on Rails</ItemName>
                    <ItemMastery mastery={2} projects="5" semesters="2" />
                  </Item>
                  <Item>
                    <ItemName>Unity 3D</ItemName>
                    <ItemMastery mastery={2} projects="3" semesters="1" />
                  </Item>
                  <Item>
                    <ItemName>Android Studio</ItemName>
                    <ItemMastery mastery={1} projects="1" semesters="1" />
                  </Item>
                </SubColumn>
                <br />
                <SubColumn>
                  <h2>Tools</h2>
                  <Item>
                    <ItemName>BootStrap</ItemName>
                    <ItemMastery mastery={4} projects="6" semesters="1" />
                  </Item>
                  <Item>
                    <ItemName>Webpack</ItemName>
                    <ItemMastery mastery={2} projects="5" semesters="2" />
                  </Item>
                  <Item>
                    <ItemName>Redux</ItemName>
                    <ItemMastery mastery={2} projects="5" semesters="2" />
                  </Item>
                  <Item>
                    <ItemName>Axios</ItemName>
                    <ItemMastery mastery={2} projects="5" semesters="2" />
                  </Item>
                  <Item>
                    <ItemName>Jest</ItemName>
                    <ItemMastery mastery={2} projects="5" semesters="2" />
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
                    <ItemMastery mastery={4} projects="10" semesters="6" />
                  </Item>
                  <Item>
                    <ItemName>C</ItemName>
                    <ItemMastery mastery={1} projects="0" semesters="1" />
                  </Item>
                  <Item>
                    <ItemName>C++</ItemName>
                    <ItemMastery mastery={1} projects="0" semesters="1" />
                  </Item>
                  <Item>
                    <ItemName>Verilog</ItemName>
                    <ItemMastery mastery={1} projects="0" semesters="1" />
                  </Item>
                </SubColumn>
                <br />
                <SubColumn>
                  <h2>Architectures</h2>
                  <Item>
                    <ItemName>OOP</ItemName>
                    <ItemMastery mastery={4} projects="8" semesters="6" />
                  </Item>
                  <Item>
                    <ItemName>CBD</ItemName>
                    <ItemMastery mastery={3} projects="5" semesters="2" />
                  </Item>
                  <Item>
                    <ItemName>MVC</ItemName>
                    <ItemMastery mastery={2} projects="6" semesters="2" />
                  </Item>
                  <Item>
                    <ItemName>REST API</ItemName>
                    <ItemMastery mastery={2} projects="2" semesters="1" />
                  </Item>
                  <Item>
                    <ItemName>TDD</ItemName>
                    <ItemMastery mastery={1} projects="1" semesters="1" />
                  </Item>
                </SubColumn>
                <br />
                <SubColumn>
                  <h2>Tools</h2>
                  <Item>
                    <ItemName>Git</ItemName>
                    <ItemMastery mastery={4} projects="many" semesters="6" />
                  </Item>
                  <Item>
                    <ItemName>VSCode</ItemName>
                    <ItemMastery mastery={4} projects="many" semesters="1" />
                  </Item>
                </SubColumn>
              </Column>
            </Section>
          </SectionContainer>
          <br />
          <br />
          <SectionContainer>
            {/* <Row>
                <Column width="30%" textAlign="left">
                  <CompanyTitle>University of Illinois</CompanyTitle>
                  <CompanyInfo>
                    January 2016 - current (39 months)
                  </CompanyInfo>
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
                      Certificates: Certificate in Data Science from
                      University of Illinois at Urbana-Champaign, Nanodegree
                      in Data Analytics from Udacity
                    </Li>
                  </ul>
                </Column>
              </Row> */}
            <Title>Academic</Title>
            <Section flexDirection="column">
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

                  <SchoolInfo>
                    <A
                      href="https://stat.illinois.edu/academics/undergraduate-program/degree-programs/certificate-data-science"
                      target="_blank"
                    >
                      Certificate in Data Science
                    </A>
                  </SchoolInfo>
                </Column>
              </Row>
            </Section>
            <br />
            <br />
            <br />
            <Title>Experience</Title>
            <Section flexDirection="column" justifyContent="top">
              <Row>
                <Column width="30%" textAlign="left">
                  <CompanyTitle>
                    <A href="http://researchpark.illinois.edu/" target="_blank">
                      Enterprise Works
                    </A>
                  </CompanyTitle>
                  <CompanyInfo>May 2018 - current (11 months)</CompanyInfo>
                  <CompanyInfo>Champaign, IL</CompanyInfo>
                </Column>
                <Column width="70%" textAlign="left">
                  <JobTitle>Web Developer (Internship)</JobTitle>
                  <ul>
                    <Li>
                      Develop ten websites for startups using WordPress, PHP,
                      JavaScript, and CSS3 and produce tutorial videos for
                      clients
                    </Li>
                    <Li>
                      Coordinate two web development workshops to create a more
                      cohesive workflow between designers and developers
                    </Li>
                    <Li>
                      Reduce hours spent per website by approximately 20 hours
                      by devising a new SOP for web developers and graphic
                      designers
                    </Li>
                    <Li>
                      Lead biweekly web development study group on ES6, CSS3,
                      and HTML5 to provide a basic development knowledge
                    </Li>
                  </ul>
                </Column>
              </Row>
              <Row marginTop="4rem">
                <Column width="30%" textAlign="left">
                  <CompanyTitle>
                    {/* <A href="https://kojobsillinois.com/" target="_blank"> */}
                    Codable
                    {/* </A> */}
                  </CompanyTitle>
                  <CompanyInfo>July 2017 - current (22 months)</CompanyInfo>
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
                    September 2016 - current (32 months)
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
        </ResumeContainer>
        <BottomDiv>
          <NavButton href="#projects" direction="left">
            &lt;&lt; Projects
          </NavButton>
        </BottomDiv>
      </Div>
    );
  }
}
