import React, { Component } from "react";
import { SideContainer } from "./SideBar.style";
import { SocialIcon } from "react-social-icons";
import ReactGA from "react-ga";
import "./SideBar.css";

class SideBar extends Component {
  state = {};

  handleClick = event => {
    ReactGA.event({
      category: "SideBar",
      action: event
    });
  };

  render() {
    return (
      <SideContainer>
        {/* <SocialIcon url="https://www.linkedin.com/in/yoonchang/" />
        <SocialIcon url="https://soundcloud.com/yooni-verse/" /> */}
        <SocialIcon
          style={{ margin: "0.3rem" }}
          url="https://www.linkedin.com/in/yoonchang"
          target="_blank"
          rel="noreferrer"
          onClick={e => this.handleClick("LinkedIn")}
        />
        <SocialIcon
          style={{ margin: "0.3rem" }}
          url="mailto:yoonsees@gmail.com"
          target="_blank"
          rel="noreferrer"
          onClick={e => this.handleClick("Email")}
        />
        <SocialIcon
          style={{ margin: "0.3rem" }}
          url="https://soundcloud.com/yooni-verse"
          target="_blank"
          rel="noreferrer"
          onClick={e => this.handleClick("SoundCloud")}
        />
        <SocialIcon
          style={{ margin: "0.3rem" }}
          url="https://github.com/ys96722"
          target="_blank"
          rel="noreferrer"
          onClick={e => this.handleClick("GitHub")}
        />
        {/* <SocialButton
          href="https://www.linkedin.com/in/yoonchang/"
          target="_blank"
        >
          in
        </SocialButton>
        <SocialButton href="mailto:yoonsees@gmail.com" target="_blank">
          E
        </SocialButton> */}
      </SideContainer>
    );
  }
}

export default SideBar;
