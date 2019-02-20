import React, { Component } from "react";
import Coverflow from "react-coverflow";

// style components
// import { Div } from "../../style/grid";

import CardList from "../Card/CardList";

class Websites extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <CardList />
      </>
    );
  }
}

export default Websites;
