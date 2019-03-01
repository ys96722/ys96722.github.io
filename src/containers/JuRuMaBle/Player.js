import React, { Component } from 'react';
import { PlayerContainer } from "./Player.style"

class Player extends Component {
    state = { 
        // playerId: this.props.id
    };
    render() { 
        return ( 
            <PlayerContainer color={this.props.color}>
              
            </PlayerContainer>
        );
    }
}
 
export default Player;