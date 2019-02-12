import React, { Component } from "react";
import Coverflow from "react-coverflow";

// style components
// import { Div } from "../../style/grid";
import Card from "../Card/Card";

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
          height="800"
          displayQuantityOfSide={2}
          navigation={true}
          enableScroll={false}
          enableHeading={false}
          // clickable={true}
          // active={0}
          currentFigureScale={1.7}
          otherFigureScale={0.8}
        >
          <h1>Hello</h1>
        </Coverflow>
        {/* {this.state.modalIndex === 0 && <InfoModal>...</InfoModal>} */}
      </>
    );
  }
}

export default Websites;
