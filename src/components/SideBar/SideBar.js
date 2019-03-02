import React, { Component } from "react";
import { SideContainer, SideItem, SocialButton } from "./SideBar.style";
import { SocialIcon } from "react-social-icons";

class SideBar extends Component {
  state = {};
  render() {
    return (
      <SideContainer>
        {/* <SocialIcon url="https://www.linkedin.com/in/yoonchang/" />
        <SocialIcon url="https://soundcloud.com/yooni-verse/" /> */}
        <SocialButton
          href="https://www.linkedin.com/in/yoonchang/"
          target="_blank"
        >
          in
        </SocialButton>
        <SocialButton href="mailto:yoonsees@gmail.com" target="_blank">
          E
        </SocialButton>
      </SideContainer>
    );
  }
}

export default SideBar;
