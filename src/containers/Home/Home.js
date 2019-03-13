// Import Dependencies
import React, { Component } from "react";
import WhenInView from "../../components/WhenInView/WhenInView";

// Import Style Components
// import { Container } from "../../style/grid"; Moved it to App
import { Hero, SubHeader, RevealP } from "./Home.style";
import { P, A } from "../../style/types";

export default class Home extends Component {
  state = { isLoading: true };

  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }

  render() {
    return (
      <>
        <Hero>
          <h1>Yoon Chang</h1>
          <h2>Creator - Developer</h2>
        </Hero>
        <SubHeader>Welcome! I am Yoon.</SubHeader>
        <WhenInView>
          {({ isInView }) => (
            <RevealP hide={!isInView}>
              I am a front-end developer currently living in Champaign-Urbana,
              Illinois. Born between an opera singer and an entrepreneur in
              the heat of July, I aspire to live a life full of opportunities
              to create new things.
          </RevealP>
          )}
        </WhenInView>
        <SubHeader>What people say about me:</SubHeader>
        <WhenInView>
          {({ isInView }) => (
          
              <RevealP hide={!isInView}>
                "One thing you can always expect from Yoon is a contagious,
                innovative spirit. I learned a lot when working with him on
                web development projects for startup companies incubating at
                the University of Illinois Research Park. He was always sure
                that the communications, graphics, and business strategy
                team members were heard and was careful to synthesize their
                materials into impressive websites. He was known for leaving
                work puzzled by a web development problem and coming back in
                the next day having already researched it thoroughly. He
                expects the best from himself and we could always count on
                him."
                <P>
                  -{" "}
                  <A
                    href="https://www.linkedin.com/in/aliabellwood/"
                    target="_blank"
                  >
                    Alia Bellwood
                  </A>
                  , Communication Consultant at Mechanodontics
                </P>
              </RevealP>
            
          )}
        </WhenInView>

        <br />
        <br />
        <br />

        <WhenInView>
          {({ isInView }) => (
          
              <RevealP hide={!isInView}>
                "I worked with Yoon in multiple projects at EnterpriseWorks.
                I could go on and on to talk about great things that Yoon
                contributed to the team, but if I have to summarize it, I
                would describe Yoon as someone who is dependable,
                personable, and always goes above and beyond what you
                expect. Yoon is dependable because you know he will get the
                work done on time and with outstanding quality. His ability
                to see the big picture while paying attention to the small
                details never ceases to impress me. Yoon’s personality makes
                everyone in the team enjoy working with him. Yoon is an
                excellent communicator and listener. He listened to the
                client’s concerns and provided insights and solutions to the
                client. Lastly and the most critical thing, Yoon is
                passionate about what he does , and he enjoys sharing his
                knowledge and skills to help others. Last summer, Yoon
                realized that many interns at EnterpriseWorks were
                interested in learning web development and data analytics.
                Yoon not only coordinated a sharing session with other
                interns during work hours but also arranged a group study
                session twice a week after office hours for those who were
                interested to learn more. I could not think of anyone as
                well-rounded as Yoon. We are grateful to have him on the
                team!"
                <P>
                  -{" "}
                  <A
                    href="https://www.linkedin.com/in/zamarrimba/"
                    target="_blank"
                  >
                    Zamar El Zimra Rimba
                  </A>
                  , Project Manager at EnterpriseWorks
                </P>
              </RevealP>
            
          )}
        </WhenInView>

        <br />
        <br />
        <br />

        {/* <WhenInView>
          {({ isInView }) => (
            <>
              <SubHeader>Welcome! I'm Yoon.</SubHeader>
              <RevealP hide={!isInView}>
                Born between an opera singer and an entrepreneur in the heat of
                July in 1996, I aspire to live a life constantly creating new
                things. I am annoying-curious, cynically-analytical, and
                appropriately-sentimental.
                Experienced Web Developer adept in all stages of advanced web
                development. Knowledgeable in user interface, testing, and
                debugging processes. Bringing forth expertise in design,
                installation, testing and maintenance of web systems. Equipped
                with a diverse and promising skill-set. Proficient in an
                assortment of technologies, including Java, ASP.NET, C#, IIS,
                Tomcat, and Microsoft SQL Server. Able to effectively
                self-manage during independent projects, as well as collaborate
                in a team setting.
              </RevealP>
            </>
          )}
        </WhenInView> */}
        {/* <WhenInView>
          {({ isInView }) => (
            <>
              <SubHeader>SubHeader 2</SubHeader>
              <RevealP hide={!isInView}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
                Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Curabitur sodales ligula in libero. Sed
                dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
                Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed
                convallis tristique sem. Proin ut ligula vel nunc egestas
                porttitor. Morbi lectus risus, iaculis vel, suscipit quis,
                luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.
                Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed,
                euismod in, nibh. Quisque volutpat condimentum velit. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non
                tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum
                ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse
                potenti. Nunc feugiat mi a tellus consequat imperdiet.
                Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in
                justo eu magna luctus suscipit. Sed lectus. Integer euismod
                lacus luctus magna. Quisque cursus, metus vitae pharetra auctor,
                sem massa mattis sem, at interdum magna augue eget diam.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Morbi lacinia molestie dui. Praesent
                blandit dolor. Sed non quam. In vel mi sit amet augue congue
                elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec
                lacus nunc, viverra nec.
              </RevealP>
            </>
          )}
        </WhenInView>
        <WhenInView>
          {({ isInView }) => (
            <>
              <SubHeader>SubHeader 3</SubHeader>
              <RevealP hide={!isInView}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
                Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Curabitur sodales ligula in libero. Sed
                dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
                Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed
                convallis tristique sem. Proin ut ligula vel nunc egestas
                porttitor. Morbi lectus risus, iaculis vel, suscipit quis,
                luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.
                Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed,
                euismod in, nibh. Quisque volutpat condimentum velit. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non
                tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum
                ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse
                potenti. Nunc feugiat mi a tellus consequat imperdiet.
                Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in
                justo eu magna luctus suscipit. Sed lectus. Integer euismod
                lacus luctus magna. Quisque cursus, metus vitae pharetra auctor,
                sem massa mattis sem, at interdum magna augue eget diam.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Morbi lacinia molestie dui. Praesent
                blandit dolor. Sed non quam. In vel mi sit amet augue congue
                elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec
                lacus nunc, viverra nec.
              </RevealP>
            </>
          )}
        </WhenInView> */}
      </>
    );
  }
}
