import React, { Component } from 'react';
import { SquareContainer } from "./Square.style"

class Square extends Component {
    state = {  }
    render() { 
        return ( 
        <>
            <SquareContainer>
            {this.props.children}
            </SquareContainer>
        </> );
    }
}
 
export default Square;