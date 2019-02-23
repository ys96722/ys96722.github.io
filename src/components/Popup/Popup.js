import React from "react";
import { PopupContainer, PopupInner } from "./Popup.style";
import { CloseButton } from "../../style/types";

const popup = props => {
  return (
    <PopupContainer>
      <PopupInner>
        <h1>{props.text}</h1>
        <CloseButton close onClick={props.closePopup} />
      </PopupInner>
    </PopupContainer>
  );
};

export default popup;
