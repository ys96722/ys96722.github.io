import React, { Component } from "react";
import {
  MableContainer,
  Row,
  Filler,
  DiceSquare,
  CountSquare
} from "./JuRuMaBle.style";
import Square from "./Square";
import Player from "./Player";
import { Div, Flex } from "../../style/grid";

// 8 rows by 12 cols
let squares = [];
for (let i = 1; i <= 28; i++) {
  squares.push(<Square id={i} />);
}

// squares[1].props.append(<Player />)

class JuRuMaBle extends Component {
  state = {
    // players: [<Player index="1"/>, <Player />, <Player />, <Player />],
    playerOne: 1,
    playerOneCount: 0,
    playerTwo: 1,
    playerTwoCount: 0,
    playerThree: 1,
    playerThreeCount: 0,

    currentPlayer: 1,
    currentRoll: 0,
    gameOver: false
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

  rollDice = currentPlayer => {
    let generatedNumber = Math.floor(Math.random() * (7 - 1) + 1);
    this.setState(prevState => {
      return { currentRoll: generatedNumber };
    });

    if (
      (this.state.playerOneCount === "Done" &&
        this.state.playerTwoCount === "Done") ||
      (this.state.playerOneCount === "Done" &&
        this.state.playerThreeCount === "Done") ||
      (this.state.playerTwoCount === "Done" &&
        this.state.playerThreeCount === "Done")
    ) {
      this.setState({
        gameOver: true
      });
      return <h1>Drink up</h1>;
    }

    // Roll Logics

    // Player 1's turn
    if (currentPlayer === 1) {
      // Skip if done.
      if (this.state.playerOneCount === "Done") {
        this.setState({
          currentPlayer: 2
        });
        return this.rollDice(2);
      }
      // Mark done
      else if (
        this.state.playerOne + generatedNumber >= 37 &&
        this.state.playerOneCount === 2
      ) {
        return this.setState({
          playerOne: 1,
          playerOneCount: "Done",
          currentPlayer: 2
        });
      }
      // If not done, increase the round count
      else if (this.state.playerOne + generatedNumber >= 37) {
        this.setState(prevState => {
          return {
            playerOne: prevState.playerOne + generatedNumber - 36,
            playerOneCount: prevState.playerOneCount + 1,
            currentPlayer: 2
          };
        });
      }
      // Get on backtrack
      else if (this.state.playerOne === 21) {
        this.setState({
          playerOne: -generatedNumber,
          currentPlayer: 2
        });
      }
      // If on backtrack, follow back track
      else if (Math.sign(this.state.playerOne) === -1) {
        if (this.state.playerOne - generatedNumber <= -9) {
          this.setState(prevState => {
            return {
              playerOne: Math.abs(prevState.playerOne - generatedNumber) - 1,
              currentPlayer: 2
            };
          });
        } else {
          this.setState(prevState => {
            return {
              playerOne: prevState.playerOne - generatedNumber,
              currentPlayer: 2
            };
          });
        }
      }
      // Normally move forward
      else {
        this.setState(prevState => {
          return {
            playerOne: prevState.playerOne + generatedNumber,
            currentPlayer: 2
          };
        });
      }
    }
    // Player 2's turn
    else if (currentPlayer === 2) {
      // Skip if done
      if (this.state.playerTwoCount === "Done") {
        this.setState({
          currentPlayer: 3
        });
        return this.rollDice(3);
      }
      // Mark done
      else if (
        this.state.playerTwo + generatedNumber >= 37 &&
        this.state.playerTwoCount === 2
      ) {
        return this.setState({
          playerTwo: 1,
          playerTwoCount: "Done",
          currentPlayer: 3
        });
      }
      // If not done, increment round
      else if (this.state.playerTwo + generatedNumber >= 37) {
        this.setState(prevState => {
          return {
            playerTwo: prevState.playerTwo + generatedNumber - 36,
            playerTwoCount: prevState.playerTwoCount + 1,
            currentPlayer: 3
          };
        });
      }
      // Get on backtrack
      else if (this.state.playerTwo === 21) {
        this.setState({
          playerTwo: -generatedNumber,
          currentPlayer: 3
        });
      }
      // Move on backtrack
      else if (Math.sign(this.state.playerTwo) === -1) {
        if (this.state.playerTwo - generatedNumber <= -9) {
          this.setState(prevState => {
            return {
              playerTwo: Math.abs(prevState.playerTwo - generatedNumber) - 1,
              currentPlayer: 3
            };
          });
        } else {
          this.setState(prevState => {
            return {
              playerTwo: prevState.playerTwo - generatedNumber,
              currentPlayer: 3
            };
          });
        }
      }
      // Move normally
      else {
        this.setState(prevState => {
          return {
            playerTwo: prevState.playerTwo + generatedNumber,
            currentPlayer: 3
          };
        });
      }
    }
    // Player 3's turn
    else if (currentPlayer === 3) {
      // If done, skip
      if (this.state.playerThreeCount === "Done") {
        this.setState({
          currentPlayer: 1
        });
        return this.rollDice(1);
      }
      // Mark done
      else if (
        this.state.playerThree + generatedNumber >= 37 &&
        this.state.playerThreeCount === 2
      ) {
        return this.setState({
          playerThree: 1,
          playerThreeCount: "Done",
          currentPlayer: 1
        });
      }
      // If not done, increment round
      else if (this.state.playerThree + generatedNumber >= 37) {
        this.setState(prevState => {
          return {
            playerThree: prevState.playerThree + generatedNumber - 36,
            playerThreeCount: prevState.playerThreeCount + 1,
            currentPlayer: 1
          };
        });
      }
      // Get on backtrack
      else if (this.state.playerThree === 21) {
        this.setState({
          playerThree: -generatedNumber,
          currentPlayer: 1
        });
      }
      // Move on backtrack
      else if (Math.sign(this.state.playerThree) === -1) {
        if (this.state.playerThree - generatedNumber <= -9) {
          this.setState(prevState => {
            return {
              playerThree:
                Math.abs(prevState.playerThree - generatedNumber) - 1,
              currentPlayer: 1
            };
          });
        } else {
          this.setState(prevState => {
            return {
              playerThree: prevState.playerThree - generatedNumber,
              currentPlayer: 1
            };
          });
        }
      }
      // Move normally
      else {
        this.setState(prevState => {
          return {
            playerThree: prevState.playerThree + generatedNumber,
            currentPlayer: 1
          };
        });
      }
    }
  };

  render() {
    return (
      <Div width="100%">
        <MableContainer>
          {/* Row 1 */}
          <Row>
            <Square index="1">
              <h1>START</h1>
              {this.state.playerOne === 1 ? <Player color="red" /> : null}
              {this.state.playerTwo === 1 ? <Player color="blue" /> : null}
              {this.state.playerThree === 1 ? <Player color="white" /> : null}
            </Square>
            <Square index="2">
              {this.state.playerOne === 2 ? <Player color="red" /> : null}
              {this.state.playerTwo === 2 ? <Player color="blue" /> : null}
              {this.state.playerThree === 2 ? <Player color="white" /> : null}
            </Square>
            <Square index="3">
              {this.state.playerOne === 3 ? <Player color="red" /> : null}
              {this.state.playerTwo === 3 ? <Player color="blue" /> : null}
              {this.state.playerThree === 3 ? <Player color="white" /> : null}
            </Square>
            <Square index="4">
              {this.state.playerOne === 4 ? <Player color="red" /> : null}
              {this.state.playerTwo === 4 ? <Player color="blue" /> : null}
              {this.state.playerThree === 4 ? <Player color="white" /> : null}
            </Square>
            <Square index="5">
              {this.state.playerOne === 5 ? <Player color="red" /> : null}
              {this.state.playerTwo === 5 ? <Player color="blue" /> : null}
              {this.state.playerThree === 5 ? <Player color="white" /> : null}
            </Square>
            <Square index="6">
              {this.state.playerOne === 6 ? <Player color="red" /> : null}
              {this.state.playerTwo === 6 ? <Player color="blue" /> : null}
              {this.state.playerThree === 6 ? <Player color="white" /> : null}
            </Square>
            <Square index="7">
              {this.state.playerOne === 7 ? <Player color="red" /> : null}
              {this.state.playerTwo === 7 ? <Player color="blue" /> : null}
              {this.state.playerThree === 7 ? <Player color="white" /> : null}
            </Square>
            <Square index="8">
              {this.state.playerOne === 8 ? <Player color="red" /> : null}
              {this.state.playerTwo === 8 ? <Player color="blue" /> : null}
              {this.state.playerThree === 8 ? <Player color="white" /> : null}
            </Square>
            <Square index="9">
              {this.state.playerOne === 9 ? <Player color="red" /> : null}
              {this.state.playerTwo === 9 ? <Player color="blue" /> : null}
              {this.state.playerThree === 9 ? <Player color="white" /> : null}
            </Square>
            <Square index="10">
              {this.state.playerOne === 10 ? <Player color="red" /> : null}
              {this.state.playerTwo === 10 ? <Player color="blue" /> : null}
              {this.state.playerThree === 10 ? <Player color="white" /> : null}
            </Square>
            <Square index="11">
              {this.state.playerOne === 11 ? <Player color="red" /> : null}
              {this.state.playerTwo === 11 ? <Player color="blue" /> : null}
              {this.state.playerThree === 11 ? <Player color="white" /> : null}
            </Square>
            <Square index="12">
              {this.state.playerOne === 12 ? <Player color="red" /> : null}
              {this.state.playerTwo === 12 ? <Player color="blue" /> : null}
              {this.state.playerThree === 12 ? <Player color="white" /> : null}
            </Square>
          </Row>
          {/* Row 2 */}
          <Row>
            <Square index="36">
              {this.state.playerOne === 36 ? <Player color="red" /> : null}
              {this.state.playerTwo === 36 ? <Player color="blue" /> : null}
              {this.state.playerThree === 36 ? <Player color="white" /> : null}
            </Square>
            <DiceSquare>
              <h1>T1: {this.state.playerOneCount} </h1>
              <h1>T2: {this.state.playerTwoCount} </h1>
              <h1>T3: {this.state.playerThreeCount} </h1>
            </DiceSquare>
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Square index="-8">
              {this.state.playerOne === -8 ? <Player color="red" /> : null}
              {this.state.playerTwo === -8 ? <Player color="blue" /> : null}
              {this.state.playerThree === -8 ? <Player color="white" /> : null}
            </Square>
            <Filler />
            <Filler />
            <Filler />
            <Square index="13">
              {this.state.playerOne === 13 ? <Player color="red" /> : null}
              {this.state.playerTwo === 13 ? <Player color="blue" /> : null}
              {this.state.playerThree === 13 ? <Player color="white" /> : null}
            </Square>
          </Row>
          {/* Row 3 */}
          <Row>
            <Square index="35">
              {this.state.playerOne === 35 ? <Player color="red" /> : null}
              {this.state.playerTwo === 35 ? <Player color="blue" /> : null}
              {this.state.playerThree === 35 ? <Player color="white" /> : null}
            </Square>
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Square index="-7">
              {this.state.playerOne === -7 ? <Player color="red" /> : null}
              {this.state.playerTwo === -7 ? <Player color="blue" /> : null}
              {this.state.playerThree === -7 ? <Player color="white" /> : null}
            </Square>
            <Filler />
            <Filler />
            <Filler />
            <Square index="14">
              {this.state.playerOne === 14 ? <Player color="red" /> : null}
              {this.state.playerTwo === 14 ? <Player color="blue" /> : null}
              {this.state.playerThree === 14 ? <Player color="white" /> : null}
            </Square>
          </Row>
          {/* Row 4 */}
          <Row>
            <Square index="34">
              {this.state.playerOne === 34 ? <Player color="red" /> : null}
              {this.state.playerTwo === 34 ? <Player color="blue" /> : null}
              {this.state.playerThree === 34 ? <Player color="white" /> : null}
            </Square>
            <Filler />
            <Filler />
            <CountSquare>
              {this.state.gameOver ? (
                <h1>Game Over</h1>
              ) : (
                <h1>{this.state.currentRoll}</h1>
              )}
            </CountSquare>
            <Filler />

            <DiceSquare>
              <button onClick={() => this.rollDice(this.state.currentPlayer)}>
                Roll
              </button>
            </DiceSquare>

            <Filler />
            <Square index="-6">
              {this.state.playerOne === -6 ? <Player color="red" /> : null}
              {this.state.playerTwo === -6 ? <Player color="blue" /> : null}
              {this.state.playerThree === -6 ? <Player color="white" /> : null}
            </Square>
            <Square index="-5">
              {this.state.playerOne === -5 ? <Player color="red" /> : null}
              {this.state.playerTwo === -5 ? <Player color="blue" /> : null}
              {this.state.playerThree === -5 ? <Player color="white" /> : null}
            </Square>
            <Square index="-4">
              {this.state.playerOne === -4 ? <Player color="red" /> : null}
              {this.state.playerTwo === -4 ? <Player color="blue" /> : null}
              {this.state.playerThree === -4 ? <Player color="white" /> : null}
            </Square>
            <Filler />
            <Square index="15">
              {this.state.playerOne === 15 ? <Player color="red" /> : null}
              {this.state.playerTwo === 15 ? <Player color="blue" /> : null}
              {this.state.playerThree === 15 ? <Player color="white" /> : null}
            </Square>
          </Row>
          {/* Row 5 */}
          <Row>
            <Square index="33">
              {this.state.playerOne === 33 ? <Player color="red" /> : null}
              {this.state.playerTwo === 33 ? <Player color="blue" /> : null}
              {this.state.playerThree === 33 ? <Player color="white" /> : null}
            </Square>
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Square index="-3">
              {this.state.playerOne === -3 ? <Player color="red" /> : null}
              {this.state.playerTwo === -3 ? <Player color="blue" /> : null}
              {this.state.playerThree === -3 ? <Player color="white" /> : null}
            </Square>
            <Filler />
            <Square index="16">
              {this.state.playerOne === 16 ? <Player color="red" /> : null}
              {this.state.playerTwo === 16 ? <Player color="blue" /> : null}
              {this.state.playerThree === 16 ? <Player color="white" /> : null}
            </Square>
          </Row>
          {/* Row 6 */}
          <Row>
            <Square index="32">
              {this.state.playerOne === 32 ? <Player color="red" /> : null}
              {this.state.playerTwo === 32 ? <Player color="blue" /> : null}
              {this.state.playerThree === 32 ? <Player color="white" /> : null}
            </Square>
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Square index="-2">
              {this.state.playerOne === -2 ? <Player color="red" /> : null}
              {this.state.playerTwo === -2 ? <Player color="blue" /> : null}
              {this.state.playerThree === -2 ? <Player color="white" /> : null}
            </Square>
            <Filler />
            <Square index="17">
              {this.state.playerOne === 17 ? <Player color="red" /> : null}
              {this.state.playerTwo === 17 ? <Player color="blue" /> : null}
              {this.state.playerThree === 17 ? <Player color="white" /> : null}
            </Square>
          </Row>
          {/* Row 7 */}
          <Row>
            <Square index="31">
              {this.state.playerOne === 31 ? <Player color="red" /> : null}
              {this.state.playerTwo === 31 ? <Player color="blue" /> : null}
              {this.state.playerThree === 31 ? <Player color="white" /> : null}
            </Square>
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Filler />
            <Square index="-1">
              {this.state.playerOne === -1 ? <Player color="red" /> : null}
              {this.state.playerTwo === -1 ? <Player color="blue" /> : null}
              {this.state.playerThree === -1 ? <Player color="white" /> : null}
            </Square>
            <Filler />
            <Square index="18">
              {this.state.playerOne === 18 ? <Player color="red" /> : null}
              {this.state.playerTwo === 18 ? <Player color="blue" /> : null}
              {this.state.playerThree === 18 ? <Player color="white" /> : null}
            </Square>
          </Row>
          {/* Row 8 */}
          <Row>
            <Square index="30">
              {this.state.playerOne === 30 ? <Player color="red" /> : null}
              {this.state.playerTwo === 30 ? <Player color="blue" /> : null}
              {this.state.playerThree === 30 ? <Player color="white" /> : null}
            </Square>
            <Square index="29">
              {this.state.playerOne === 29 ? <Player color="red" /> : null}
              {this.state.playerTwo === 29 ? <Player color="blue" /> : null}
              {this.state.playerThree === 29 ? <Player color="white" /> : null}
            </Square>
            <Square index="28">
              {this.state.playerOne === 28 ? <Player color="red" /> : null}
              {this.state.playerTwo === 28 ? <Player color="blue" /> : null}
              {this.state.playerThree === 28 ? <Player color="white" /> : null}
            </Square>
            <Square index="27">
              {this.state.playerOne === 27 ? <Player color="red" /> : null}
              {this.state.playerTwo === 27 ? <Player color="blue" /> : null}
              {this.state.playerThree === 27 ? <Player color="white" /> : null}
            </Square>
            <Square index="26">
              {this.state.playerOne === 26 ? <Player color="red" /> : null}
              {this.state.playerTwo === 26 ? <Player color="blue" /> : null}
              {this.state.playerThree === 26 ? <Player color="white" /> : null}
            </Square>
            <Square index="25">
              {this.state.playerOne === 25 ? <Player color="red" /> : null}
              {this.state.playerTwo === 25 ? <Player color="blue" /> : null}
              {this.state.playerThree === 25 ? <Player color="white" /> : null}
            </Square>
            <Square index="24">
              {this.state.playerOne === 24 ? <Player color="red" /> : null}
              {this.state.playerTwo === 24 ? <Player color="blue" /> : null}
              {this.state.playerThree === 24 ? <Player color="white" /> : null}
            </Square>
            <Square index="23">
              {this.state.playerOne === 23 ? <Player color="red" /> : null}
              {this.state.playerTwo === 23 ? <Player color="blue" /> : null}
              {this.state.playerThree === 23 ? <Player color="white" /> : null}
            </Square>
            <Square index="22">
              {this.state.playerOne === 22 ? <Player color="red" /> : null}
              {this.state.playerTwo === 22 ? <Player color="blue" /> : null}
              {this.state.playerThree === 22 ? <Player color="white" /> : null}
            </Square>
            <Square index="21">
              {this.state.playerOne === 21 ? <Player color="red" /> : null}
              {this.state.playerTwo === 21 ? <Player color="blue" /> : null}
              {this.state.playerThree === 21 ? <Player color="white" /> : null}
            </Square>
            <Square index="20">
              {this.state.playerOne === 20 ? <Player color="red" /> : null}
              {this.state.playerTwo === 20 ? <Player color="blue" /> : null}
              {this.state.playerThree === 20 ? <Player color="white" /> : null}
            </Square>
            <Square index="19">
              {this.state.playerOne === 19 ? <Player color="red" /> : null}
              {this.state.playerTwo === 19 ? <Player color="blue" /> : null}
              {this.state.playerThree === 19 ? <Player color="white" /> : null}
            </Square>
          </Row>
        </MableContainer>
      </Div>
    );
  }
}

export default JuRuMaBle;
