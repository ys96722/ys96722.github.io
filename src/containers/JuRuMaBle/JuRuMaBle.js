import React, { Component } from "react";
import { MableContainer, Square, Row, EndRow } from "./JuRuMaBle.style";
import { Div, Flex } from "../../style/grid";

// 8 rows by 12 cols

class JuRuMaBle extends Component {
  state = {};
  render() {
    return (
      <Div width="100%">
        <MableContainer>
          <Row>
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
          </Row>
          <EndRow>
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
          </EndRow>
        </MableContainer>
      </Div>
    );
  }
}

export default JuRuMaBle;
