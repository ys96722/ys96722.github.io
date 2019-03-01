import React, { Component } from "react";
import { MableContainer, Row, Filler } from "./JuRuMaBle.style";
import Square from "./Square"
import Player from "./Player"
import { Div, Flex } from "../../style/grid";

// 8 rows by 12 cols
let squares = [];
for (let i = 1; i <= 28; i++) {
  squares.push(<Square id={i} />);
};

// squares[1].props.append(<Player />)

class JuRuMaBle extends Component {
  state = {
    // players: [<Player index="1"/>, <Player />, <Player />, <Player />],
    playerOne: 1,
    playerTwo: 1,
    playerThree: 1,
    currentPlayer: 1
  };

  // popuplateSquares() {
  //   let temp_squares=[];
  //   for (let i = 1; i <= 28; i++) {
  //     temp_squares.push(<Square id={i} />);
  //   };

  //   this.setState({ squares: temp_squares });
  // }

  // renderPlayer(player, index) {
  //   // let playerIndex = player.curIndex;
  //   console.log(this.state.squares[index]);
  //   // this.state.squares[index].children = player;
  // }

  // componentDidMount(){
  //   // this.popuplateSquares();
  //   // this.renderPlayer(this.state.players[1], 2)
  // }

  rollDice = (currentPlayer) => {
    let generatedNumber = Math.floor(Math.random() * (6 - 1) + 1);
    if (currentPlayer === 1) {
      // if(this.state.playerOne === )
      this.setState(prevState => {
        return { playerOne: prevState.playerOne + generatedNumber, currentPlayer: 2 }
      })
    }
    else if (currentPlayer === 2) {
      this.setState(prevState => {
        return { playerTwo: prevState.playerTwo + generatedNumber, currentPlayer: 3 }
      })
    }
    else {
      this.setState(prevState => {
        return { playerThree: prevState.playerThree + generatedNumber, currentPlayer: 1 }
      })
    }

  }

  render() {
    return (
      <Div width="100%">
        <button onClick={() => this.rollDice(this.state.currentPlayer)}>Roll</button>
        <MableContainer>
          {/* Row 1 */}
          <Row>
            <Square key="1">
              {this.state.playerOne === 1 ? <Player color="red"></Player> : null}
              {this.state.playerTwo === 1 ? <Player color="blue"></Player> : null}
              {this.state.playerThree === 1 ? <Player color="white"></Player> : null}
            </Square>
            <Square key="2">
              {this.state.playerOne === 2 ? <Player color="red"></Player> : null}
              {this.state.playerTwo === 2 ? <Player color="blue"></Player> : null}
              {this.state.playerThree === 2 ? <Player color="white"></Player> : null}
            </Square>
            <Square key="3">
              {this.state.playerOne === 3 ? <Player color="red"></Player> : null}
              {this.state.playerTwo === 3 ? <Player color="blue"></Player> : null}
              {this.state.playerThree === 3 ? <Player color="white"></Player> : null}
            </Square>
            <Square key="4">
              {this.state.playerOne === 4 ? <Player color="red"></Player> : null}
              {this.state.playerTwo === 4 ? <Player color="blue"></Player> : null}
              {this.state.playerThree === 4 ? <Player color="white"></Player> : null}
            </Square>
            <Square key="5">
              {this.state.playerOne === 5 ? <Player color="red"></Player> : null}
              {this.state.playerTwo === 5 ? <Player color="blue"></Player> : null}
              {this.state.playerThree === 5 ? <Player color="white"></Player> : null}
            </Square>
            <Square key="6">
              {this.state.playerOne === 6 ? <Player color="red"></Player> : null}
              {this.state.playerTwo === 6 ? <Player color="blue"></Player> : null}
              {this.state.playerThree === 6 ? <Player color="white"></Player> : null}
            </Square>
            <Square key="7">
              {this.state.playerOne === 7 ? <Player color="red"></Player> : null}
              {this.state.playerTwo === 7 ? <Player color="blue"></Player> : null}
              {this.state.playerThree === 7 ? <Player color="white"></Player> : null}
            </Square>
            <Square key="8">
              {this.state.playerOne === 8 ? <Player color="red"></Player> : null}
              {this.state.playerTwo === 8 ? <Player color="blue"></Player> : null}
              {this.state.playerThree === 8 ? <Player color="white"></Player> : null}
            </Square>
            <Square key="9">
              {this.state.playerOne === 9 ? <Player color="red"></Player> : null}
              {this.state.playerTwo === 9 ? <Player color="blue"></Player> : null}
              {this.state.playerThree === 9 ? <Player color="white"></Player> : null}
            </Square>
            <Square key="10">
              {this.state.playerOne === 10 ? <Player color="red"></Player> : null}
              {this.state.playerTwo === 10 ? <Player color="blue"></Player> : null}
              {this.state.playerThree === 10 ? <Player color="white"></Player> : null}
            </Square>
            <Square key="11">
              {this.state.playerOne === 11 ? <Player color="red"></Player> : null}
              {this.state.playerTwo === 11 ? <Player color="blue"></Player> : null}
              {this.state.playerThree === 11 ? <Player color="white"></Player> : null}
            </Square>
            <Square key="12">
              {this.state.playerOne === 12 ? <Player color="red"></Player> : null}
              {this.state.playerTwo === 12 ? <Player color="blue"></Player> : null}
              {this.state.playerThree === 12 ? <Player color="white"></Player> : null}
            </Square>
          </Row>
          {/* Row 2 */}
          <Row>
            <Square key="36">
            </Square>
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Square key="-8">
            </Square>
            <Filler />
            <Filler />
            <Filler />
            <Square key="13">
            </Square>
          </Row>
          {/* Row 3 */}
          <Row>
            <Square key="35" />
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Square key="-7" />
            <Filler />
            <Filler />
            <Filler />
            <Square key="14" />
          </Row>
          {/* Row 4 */}
          <Row>
            <Square key="34" />
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Square key="-6" />
            <Square key="-5" />
            <Square key="-4" />
            <Filler />
            <Square key="15" />
          </Row>
          {/* Row 5 */}
          <Row>
            <Square key="33" />
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Square key="-3" />
            <Filler />
            <Square key="16" />
          </Row>
          {/* Row 6 */}
          <Row>
            <Square key="32" />
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Square key="-2" />
            <Filler />
            <Square key="17" />
          </Row>
          {/* Row 7 */}
          <Row>
            <Square key="31" />
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Square key="-1" />
            <Filler />
            <Square key="18" />
          </Row>
          {/* Row 8 */}
          <Row>
            <Square key="30" />
            <Square key="29" />
            <Square key="28" />
            <Square key="27" />
            <Square key="26" />
            <Square key="25" />
            <Square key="24" />
            <Square key="23" />
            <Square key="22" />
            <Square key="21" />
            <Square key="20" />
            <Square key="19" />
          </Row>
        </MableContainer>
      </Div>
    );
  }
}

export default JuRuMaBle;
