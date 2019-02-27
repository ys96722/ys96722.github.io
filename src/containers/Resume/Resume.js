import React, { Component } from "react";
import { Title } from "../../style/variables";
import Card from "../../components/Card/Card";
import { Flex } from "../../style/grid";
import axios from "axios";

// import { Container } from "../../style/grid"; Moved it to App

export default class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
      // error: null,
      // isLoaded: false,
      // items: []
    };
  }

  // componentDidMount() {
  //   axios
  //     .get("https://soundcloud.com/oembed", {
  //       params: {
  //         format: "json",
  //         url: "https://soundcloud.com/yooni-verse/happier"
  //       }
  //     })
  //     .then(
  //       result => {
  //         // console.log(result);
  //         // console.log(this);
  //         this.setState({
  //           isLoaded: true,
  //           items: result
  //         });
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       error => {
  //         // console.log(error);
  //         this.setState({
  //           isLoaded: true,
  //           error
  //         });
  //       }
  //     );
  // }

  componentDidMount() {
    this.setState({
      isLoading: false
    })
  }

  render() {
    return (
      <h1>HELLOOOOOOOOOO!!!!!!!!!!!!!</h1>
      // <>
      //   {this.state.items.data === undefined ? (
      //     <div>Loading</div>
      //   ) : (
          
      //     <div>
      //       <iframe
      //         width="100%"
      //         height="300"
      //         scrolling="no"
      //         frameborder="no"
      //         allow="autoplay"
      //         src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/512176407&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      //       />
        
      // </>
    );
  }
}
