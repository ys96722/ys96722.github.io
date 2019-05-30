import React, { Component } from "react";
// import lqip from "lqip.macro";

export default class LazyImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      error: false
    };
  }

  componentDidMount() {
    const img = new Image();
    img.onload = () => {
      this.setState({
        loaded: true
      });
    };
    img.onerror = () => {
      this.setState({
        error: true
      });
    };
    img.src = this.props.src;
  }

  render() {
    if (this.state.error) {
      return (
        <img
          src={this.props.unloadedSrc}
          style={this.props.style}
          alt={this.props.alt}
        />
      );
    } else if (!this.state.loaded) {
      return (
        <img
          src={this.props.unloadedSrc}
          style={this.props.style}
          alt={this.props.alt}
        />
      );
    }
    return (
      <img style={this.props.style} src={this.props.src} alt={this.props.alt} />
    );
  }
}
