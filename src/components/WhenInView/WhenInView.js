import React, { Component } from "react";
import Waypoint from "react-waypoint";

export default class WhenInView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInView: false
    };

    this.onEnter = this.onEnter.bind(this);
  }

  onEnter({ previousPosition }) {
    if (previousPosition === Waypoint.below) {
      this.setState({ isInView: true });
    }
  }

  render() {
    return (
      <>
        <Waypoint onEnter={this.onEnter} />
        {this.props.children({ isInView: this.state.isInView })}
      </>
    );
  }
}
