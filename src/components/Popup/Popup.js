import React from "react";
import { PopupContainer, PopupInner, PopupContent, PopupSlide } from "./Popup.style";
import { CloseButton, A } from "../../style/types";

const popup = props => {
  return (
    <PopupContainer>
      <PopupInner>
        <PopupSlide><img src={require("../../assets/hero.jpeg")} alt="" style={{width: "100%", height: "100%", objectFit: "cover"}}/></PopupSlide>
        <PopupContent>
          <h1>{props.text}</h1>
          <h1>{props.popupInfo.title}</h1>
          <A href={props.popupInfo.link} target="_blank">
            Take a look!
          </A>
        </PopupContent>
        <CloseButton close onClick={props.closePopup} />
      </PopupInner>
    </PopupContainer>
  );
};

export default popup;
