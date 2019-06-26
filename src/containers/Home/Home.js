// Import Dependencies
import React, { Component } from "react"
import WhenInView from "../../components/WhenInView/WhenInView"
import { findDOMNode } from "react-dom"

// Import Style Components
// import { Container } from "../../style/grid"; Moved it to App
import {
  Hero,
  SubHeader,
  RevealP,
  HomeContainer,
  HeroText,
  MovieText,
  HeroBanner
} from "./Home.style"
import { A, NavButton, BottomDiv } from "../../style/types"
import { Div } from "../../style/grid"
import lqip from "lqip.macro"

export default class Home extends Component {
  state = {
    loaded: false,
    error: false,
    mouseX: 0,
    mouseY: 0,
    width: 0,
    height: 0,
    heroRef: React.createRef(),
    count: 0
  }

  componentDidMount() {
    // const img = new Image()
    // img.onload = () => {
    //   this.setState({
    //     loaded: true
    //   })
    // }
    // img.onerror = () => {
    //   this.setState({
    //     error: true
    //   })
    // }
    // img.src = require("../../assets/finalHero.jpeg")
    this.setState({ loaded: true })
    // console.log(this.refs)
  }

  handleMouseEnter = e => {
    this.setState({
      width: this.state.heroRef.current.getBoundingClientRect().width,
      height: this.state.heroRef.current.getBoundingClientRect().height
    })
  }

  handleMouseMove = e => {
    // if (this.state.count % 5 === 0) {
    console.log(this.state.mouseX)
    this.setState({
      mouseX:
        (window.innerWidth - this.state.width) / 2 +
        this.state.width / 2 -
        e.nativeEvent.pageX, // - (this.state.width * 3) / 2
      mouseY:
        (window.innerHeight - this.state.height) / 2 +
        this.state.height / 2 -
        e.nativeEvent.pageY // - (this.state.height * 3) / 2
    })
  }
  // this.setState((prevState, props) => ({
  //   count: prevState.count + 1
  // }))
  // }

  handleMouseLeave = e => {
    this.setState({
      mouseX: 0,
      mouseY: 0,
      width: 0,
      height: 0,
      count: 0
    })
  }

  render() {
    return (
      <HomeContainer animation="fadeIn">
        <HeroBanner
          onMouseMove={this.handleMouseMove}
          onMouseLeave={this.handleMouseLeave}
          onMouseEnter={this.handleMouseEnter}
          ref={this.state.heroRef}
          // src={require("../../assets/finalHero.jpeg")}
        >
          {/* <img
              alt="bg"
              src={require("../../assets/finalHero.jpeg")}
              style={{
                transform: `translateX(${(this.state.width -
                  1 * this.state.mouseX) /
                  100}px) 
                          translateY(${(this.state.height +
                            1 * this.state.mouseY) /
                            100}px)`,
                transition: "all 0.1s linear"
              }}
            /> */}
          <h1
            style={{
              transform: `translateX(${this.state.mouseX / 10}px) 
                          translateY(${this.state.mouseY / 10}px)`,
              transition: "all 0.3s ease-out"
            }}
          >
            Yoon
          </h1>
          <h3
            style={{
              transform: `translateX(${-this.state.mouseX / 10}px) 
                          translateY(${-this.state.mouseY / 10}px)`,
              transition: "all 0.3s ease-out"
            }}
          >
            Developer
          </h3>
        </HeroBanner>

        <BottomDiv>
          <NavButton href="#projects" direction="right">
            Projects >>
          </NavButton>
        </BottomDiv>
      </HomeContainer>
    )

    // <HomeContainer style={{ position: "relative" }}>
    //   {this.state.loaded ? (
    //     <Hero src={require("../../assets/finalHero.jpeg")}>
    //       <Div animation="fadeIn">
    //         <h1>Yoon Chang</h1>
    //       </Div>
    //       <Div animation="fadeIn">
    //         <h2>
    //           Creator <span>-</span> Developer
    //         </h2>
    //       </Div>
    //     </Hero>
    //   ) : (
    //     <Hero src={lqip("../../assets/finalHero.jpeg")}>
    //       <Div animation="fadeIn">
    //         <h1>Yoon Chang</h1>
    //       </Div>
    //       <Div animation="fadeIn">
    //         <h2>
    //           Creator <span>-</span> Developer
    //         </h2>
    //       </Div>
    //     </Hero>
    //   )}
    //   <SubHeader>Welcome! I am Yoon.</SubHeader>
    //   <WhenInView>
    //     {({ isInView }) => (
    //       <RevealP hide={!isInView}>
    //         I am a{" "}
    //         <span style={{ color: "#f25f5c" }}>front-end developer</span>{" "}
    //         currently living in Champaign-Urbana, Illinois. Born between an{" "}
    //         <span style={{ color: "#f25f5c" }}>opera singer</span> and an{" "}
    //         <span style={{ color: "#f25f5c" }}>entrepreneur</span> in the heat
    //         of July, I aspire to live a life full of opportunities to create
    //         new things. To view my work,{" "}
    //         <span>
    //           <A href="#projects">click here!</A>
    //         </span>
    //       </RevealP>
    //     )}
    //   </WhenInView>
    //   <SubHeader>What people say about me:</SubHeader>
    //   <WhenInView>
    //     {({ isInView }) => (
    //       <RevealP hide={!isInView}>
    //         <span style={{ color: "#424242", fontSize: "2rem" }}>“</span> One
    //         thing you can always expect from Yoon is a contagious, innovative
    //         spirit. I learned a lot when working with him on web development
    //         projects for startup companies incubating at the University of
    //         Illinois Research Park. He was always sure that the
    //         communications, graphics, and business strategy team members were
    //         heard and was careful to synthesize their materials into
    //         impressive websites. He was known for leaving work puzzled by a
    //         web development problem and coming back in the next day having
    //         already researched it thoroughly. He expects the best from himself
    //         and we could always count on him.{" "}
    //         <span style={{ color: "#424242", fontSize: "2rem" }}>”</span>{" "}
    //         <br />
    //         <span>
    //           -{" "}
    //           <A
    //             href="https://www.linkedin.com/in/aliabellwood/"
    //             target="_blank"
    //             rel="noreferrer"
    //           >
    //             Alia Bellwood
    //           </A>
    //           , Communication Consultant at Mechanodontics
    //         </span>
    //       </RevealP>
    //     )}
    //   </WhenInView>

    //   <br />
    //   <br />
    //   <br />

    //   <WhenInView>
    //     {({ isInView }) => (
    //       <RevealP hide={!isInView}>
    //         <span style={{ color: "#424242", fontSize: "2rem" }}>“</span> I
    //         worked with Yoon in multiple projects at EnterpriseWorks. I could
    //         go on and on to talk about great things that Yoon contributed to
    //         the team, but if I have to summarize it, I would describe Yoon as
    //         someone who is dependable, personable, and always goes above and
    //         beyond what you expect. Yoon is dependable because you know he
    //         will get the work done on time and with outstanding quality. His
    //         ability to see the big picture while paying attention to the small
    //         details never ceases to impress me. Yoon’s personality makes
    //         everyone in the team enjoy working with him. Yoon is an excellent
    //         communicator and listener. He listened to the client’s concerns
    //         and provided insights and solutions to the client. Lastly and the
    //         most critical thing, Yoon is passionate about what he does, and he
    //         enjoys sharing his knowledge and skills to help others. Last
    //         summer, Yoon realized that many interns at EnterpriseWorks were
    //         interested in learning web development and data analytics. Yoon
    //         not only coordinated a sharing session with other interns during
    //         work hours but also arranged a group study session twice a week
    //         after office hours for those who were interested to learn more. I
    //         could not think of anyone as well-rounded as Yoon. We are grateful
    //         to have him on the team!{" "}
    //         <span style={{ color: "#424242", fontSize: "2rem" }}>”</span>{" "}
    //         <br />
    //         <span>
    //           -{" "}
    //           <A
    //             href="https://www.linkedin.com/in/zamarrimba/"
    //             target="_blank"
    //             rel="noreferrer"
    //           >
    //             Zamar El Zimra Rimba
    //           </A>
    //           , Project Manager at EnterpriseWorks
    //         </span>
    //       </RevealP>
    //     )}
    //   </WhenInView>

    //   <br />
    //   <br />
    //   <br />

    //   <WhenInView>
    //     {({ isInView }) => (
    //       <RevealP hide={!isInView}>
    //         <span style={{ color: "#424242", fontSize: "2rem" }}>“</span> I’ve
    //         had the privilege of working with Yoon at EnterpriseWorks for
    //         almost a year. As a graphic design intern, I have worked closely
    //         on several website development projects with Yoon. Not only is he
    //         extremely enthusiastic about the work that we do for our clients,
    //         but it is evident that he genuinely cares about our clients and
    //         their needs. He consistently goes the extra mile to make sure that
    //         he is accurately recreating my designs and that the client
    //         understands how to use their new website. It is such a joy to be
    //         able to work with a developer like Yoon. Any company would be
    //         lucky to have such a hardworking, kind individual on their team.{" "}
    //         <span style={{ color: "#424242", fontSize: "2rem" }}>”</span>{" "}
    //         <br />
    //         <span>
    //           -{" "}
    //           <A
    //             href="https://sophiapresutti.com/"
    //             target="_blank"
    //             rel="noreferrer"
    //           >
    //             Sophia Presutti
    //           </A>
    //           , Senior Graphic Designer at EnterpriseWorks
    //         </span>
    //       </RevealP>
    //     )}
    //   </WhenInView>
    //   <BottomDiv>
    //     <NavButton href="#projects" direction="right">
    //       Projects >>
    //     </NavButton>
    //   </BottomDiv>
    // </HomeContainer>
  }
}
