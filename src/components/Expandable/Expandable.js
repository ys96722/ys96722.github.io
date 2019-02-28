import React, { Component } from "react";

export default class Expandable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isInView: false
        };

        this.onEnter = this.onEnter.bind(this);
    }

    // onEnter({ previousPosition }) {
    //     if (previousPosition === Waypoint.below) {
    //         this.setState({ isInView: true });
    //     }
    // }

    render() {
        return (
            <>
                <h1>Hello World</h1>
                {/* <Waypoint onEnter={this.onEnter} /> */}
                {/* {this.props.children({ isInView: this.state.isInView })} */}
            </>
        );
    }
}
