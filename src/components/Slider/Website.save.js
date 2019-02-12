import React, { Component } from "react";
import Coverflow from "react-coverflow";

// style components
import { Div } from "../../style/grid";
import { Card } from "./Item.style";

class Websites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIndex: undefined
    };

    // this.openModal = this.openModal.bind(this);
    // this.closeModal = this.closeModal.bind(this);
  }

  // openModal = (index = undefined) => {
  //   this.setState({
  //     modalIndex: index
  //   });
  // };

  // closeModal = () => {
  //   this.setState({
  //     modalIndex: undefined
  //   });
  // };

  render() {
    return (
      <>
        <Coverflow
          width="1200"
          height="700"
          displayQuantityOfSide={2}
          navigation={true}
          enableScroll={false}
          enableHeading={false}
          // clickable={true}
          // active={0}
          currentFigureScale={1.5}
          otherFigureScale={0.8}
        >
          {/* <InfoModal /> */}
          {/* <div
            role="menuitem"
            tabIndex="0"
            // onKeyDown={e => this.openModal(0, e)}
          > */}
          <img
            src={require("../../assets/website_banners/native_hero.png")}
            alt="Native Roots Design"
            style={{ display: "block", width: "100%" }}
          />
          {/* </div> */}
          {/* <div role="menuitem" tabIndex="1"> */}
          <img
            src={require("../../assets/website_banners/ability_logo.png")}
            alt="Ability Marketplace"
            style={{ display: "block", width: "100%" }}
            // data-action="http://andyyou.github.io/react-coverflow/"
          />
          {/* </div> */}
          {/* <Card> */}
          <img
            src={require("../../assets/website_banners/2xl_blue_logo.png")}
            alt="2XL Logistics"
            style={{
              display: "block",
              width: "100%"
              // width: "80%",
              // height: "80%",
              // position: "absolute",
              // top: "50%",
              // left: "50%",
              // transform: "translate(-50%, -50%)"
            }}
            // data-action="http://andyyou.github.io/react-coverflow/"
          />
          {/* </Card> */}
          {/* <Card> */}
          <img
            src={require("../../assets/website_banners/simbiosys_logo.png")}
            alt="Simbiosys"
            style={{ display: "block", width: "100%" }}
            // data-action="http://andyyou.github.io/react-coverflow/"
          />
          {/* </Card> */}
          {/* <div role="menuitem" tabIndex="4"> */}
          <img
            src={require("../../assets/website_banners/kojobs_logo.png")}
            alt="KoJobs"
            style={{ display: "block", width: "100%" }}
            // data-action="http://andyyou.github.io/react-coverflow/"
          />
          {/* </div> */}
          {/* <div
            role="menuitem"
            tabIndex="5"
            style={{
              height: "5em",
              backgroundColor: "white",
              margin: "auto",
              alignContent: "center"
            }}
          > */}
          <img
            src={require("../../assets/website_banners/traverse_logo.png")}
            alt="Traverse Science"
            style={{
              display: "block",
              width: "100%",
              height: "100%"
              // position: "absolute",
              // top: "50%",
              // left: "50%",
              // transform: "translate(-50%, -50%)"
            }}
            // data-action="http://andyyou.github.io/react-coverflow/"
          />
          {/* </div> */}
        </Coverflow>
        {/* {this.state.modalIndex === 0 && <InfoModal>...</InfoModal>} */}
      </>
    );
  }
}

export default Websites;
