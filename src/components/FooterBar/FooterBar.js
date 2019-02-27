import React, { Component } from "react";
import {FooterBarContainer, FooterBarItem} from "./FooterBar.style"

export default class FooterBar extends Component {
    state = {};
    render() {
        return (
            <FooterBarContainer>
                <FooterBarItem
                    to="/"
                    title="Home"
                    activeClassName="activeIndexItem"
                />
                <FooterBarItem
                    to="/projects"
                    title="Projects"
                    activeClassName="activeNavItem"
                />
                <FooterBarItem
                    to="/about"
                    title="About"
                    activeClassName="activeNavItem"
                />
            </FooterBarContainer>
        );
    }
}