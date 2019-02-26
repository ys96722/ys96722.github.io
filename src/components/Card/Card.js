import React from "react";
import { CardContainer, CardFront, CardBack, Inner } from "./Card.style";
import { A, OpenButton } from "../../style/types";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// React component for the card (main component)
const card = props => {
  // Props: (wp or react), img, title, header, content, link

  return (
    <CardContainer cardWidth={props.cardWidth}>
      <CardFront
        imgPath={props.imgPath}
        bgSize={props.bgSize}
        tool={props.tool}
      >
        <Inner>
          <p>{props.name}</p>
          <span>{props.tool}</span>
        </Inner>
      </CardFront>
      <CardBack imgPath={props.imgPath}>
        <Inner>
          <h3>
            <span>Tools</span>
          </h3>
          <p>{props.tools}</p>
          <OpenButton onClick={() => props.togglePopup(props.popupInfo)}>
            Read more
          </OpenButton>
          {/* <A href={props.link} target="_blank">
            Take a look!
          </A> */}
        </Inner>
      </CardBack>
    </CardContainer>
  );
};

export default card;
