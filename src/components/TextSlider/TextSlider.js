import React, { Component } from 'react';
import { TextSliderContainer } from "./TextSlider.style"

class TextSlider extends Component {
    state = { 
        content: this.props.content,
        testimonial: this.props.testimonial,
        people: this.props.people
    }
    render() { 
        return ( 
            <TextSliderContainer>Hello World</TextSliderContainer>
        );
    }
}
 
export default TextSlider;