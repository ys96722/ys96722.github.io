import React from "react";
import Square from "./Square";
import { Flex, Div } from "../../style/grid";

const cardList = props => {
    const numCols = Number(props.numCols);
    const numRows = Number(props.numRows);
    const squareWidth = props.cardWidth;

    // 1. Create Cards
    const squares = [];
    for (let item of props.infos) {
        squares.push(
            <Square />
        );
    }
    // console.log(numRows, cards);

    // 2. Generate rows
    const rows = [];
    let counter = 0;
    for (let curRow = 1; curRow <= numRows; curRow++) {
        rows.push(
            <Flex row justify="center" key={curRow}>
                {squares.slice(counter, counter + numCols)}
            </Flex>
        );
        // console.log("Counter before:", counter);
        counter += numCols;
        // console.log("Counter after:", counter);
    }
    counter = 0;
    // console.log(rows, counter);

    return (
        <Div marginTop="4rem" marginBottom="4rem">
            {rows}
        </Div>
    );
};

export default cardList;