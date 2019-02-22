import React, { Component } from "react";
import { Title } from "../../style/variables";
import Card from "../../components/Card/Card";
import { Flex } from "../../style/grid";
import axios from "axios";

// import { Container } from "../../style/grid"; Moved it to App

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    axios
      .get("https://soundcloud.com/oembed", {
        params: {
          format: "json",
          url: "https://soundcloud.com/yooni-verse/happier"
        }
      })
      .then(
        result => {
          // console.log(result);
          // console.log(this);
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          // console.log(error);
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    return (
      <>
        {this.state.items.data === undefined ? (
          <div>Loading</div>
        ) : (
          // <div>{this.state.items.data.html}</div>
          // <div dangerouslySetInnerHTML={this.state.items.data.html} />
          <div>
            <iframe
              width="100%"
              height="300"
              scrolling="no"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/512176407&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            />
            {/* {console.log(this.state.items.data.html)}
            {console.log(this.state.items.data)}
            <iframe
              height={this.state.items.data.html.height}
              width={this.state.items.data.html.width}
              scroll={this.state.items.data.html.scrolling}
              frameBorder={this.state.items.data.html.frameborder}
              src={this.state.items.data.html.src}
            /> */}
          </div>
        )}
        {/* {console.log(this.state.items.data)} */}
        {/* {this.state.items.data} */}
        {/* {JSON.parse(this.state.items.data)} */}
        {/* <Title>This is About.</Title> */}
        {/* <img src={require("../../assets/song_banners/happier_cover.jpeg")} alt="img"></img> */}
        {/* <div style={{ position: 'relative', backgroundImage: 'url(require("../../assets/song_banners/forever.jpeg"))', width: '50vw', height: '50vh'}}></div> */}
      </>
    );
  }
}

export default About;
