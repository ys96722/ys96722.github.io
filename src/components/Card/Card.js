import React, { Component } from "react"
import { CardContainer, CardFront, CardBack, Inner } from "./Card.style"
import { OpenButton } from "../../style/types"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// React component for the card (main component)
export default class Card extends Component {
  // Props: (wp or react), img, title, header, content, link
  state = {
    loaded: false,
    error: false
  }

  componentDidMount() {
    const img = new Image()
    img.onload = () => {
      this.setState({
        loaded: true
      })
    }
    img.onerror = () => {
      this.setState({
        error: true
      })
    }
    img.src = this.props.imgPath
  }

  render() {
    return (
      <CardContainer onClick="">
        {this.state.loaded ? (
          <CardFront
            imgPath={this.props.imgPath}
            bgSize={this.props.bgSize}
            tool={this.props.tool}
            onClick=""
          />
        ) : (
          <CardFront
            imgPath={this.props.unloadedSrc}
            bgSize={this.props.bgSize}
            tool={this.props.tool}
            onClick=""
          />
        )}
        {/* <CardFront
          imgPath={this.props.imgPath}
          bgSize={this.props.bgSize}
          tool={this.props.tool}
          onClick=""
        /> */}
        <CardBack imgPath={this.props.imgPath}>
          <Inner>
            <h3>
              <span>Tools</span>
            </h3>
            <p>{this.props.tools}</p>
            <OpenButton
              onClick={() => {
                this.props.togglePopup(this.props.popupInfo)
              }}
            >
              Read more
            </OpenButton>
            {/* <A href={props.link} target="_blank">
            Take a look!
          </A> */}
          </Inner>
        </CardBack>
      </CardContainer>
    )
  }
}
