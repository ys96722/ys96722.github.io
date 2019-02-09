import React, { Component } from "react";
import { Button } from "./Categories.style";
import Websites from "../../components/Slider/Websites";
import Games from "../../components/Slider/Games";
import Songs from "../../components/Slider/Songs";
import Analytics from "../../components/Slider/Analytics";
import { Div, Flex } from "../../style/grid";

const projects = [<Websites />, <Analytics />, <Games />, <Songs />];

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleIndex: 0
    };

    this.setVisible = this.setVisible.bind(this);
  }

  setVisible = (index = 0) => {
    this.setState({
      visibleIndex: index
    });
  };

  render() {
    return (
      <Div>
        {/* List that captures Active */}
        <Flex column justify="center">
          <Button
            onClick={e => this.setVisible(0, e)}
            active={this.state.visibleIndex === 0}
          >
            Websites
          </Button>
          <Button
            onClick={e => this.setVisible(1, e)}
            active={this.state.visibleIndex === 1}
          >
            Analytics
          </Button>
          <Button
            onClick={e => this.setVisible(2, e)}
            active={this.state.visibleIndex === 2}
          >
            Games
          </Button>
          <Button
            onClick={e => this.setVisible(3, e)}
            active={this.state.visibleIndex === 3}
          >
            Songs
          </Button>
        </Flex>
        {/* Render Active */}
        {projects[this.state.visibleIndex]}
      </Div>
    );
  }
}

export default Categories;
