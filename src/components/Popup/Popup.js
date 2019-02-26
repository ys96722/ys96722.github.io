import React from "react";
import {
  PopupContainer,
  PopupInner,
  PopupContent,
  Content,
  People
} from "./Popup.style";
import PopupSlider from "./PopupSlider/PopupSlider";
import { CloseButton, A } from "../../style/types";

const popup = props => {
  return (
    <PopupContainer>
      <PopupInner>
        <PopupSlider imagePaths={props.popupInfo.images} />
        <PopupContent>
          <h1>{props.text}</h1>
          <h1>{props.popupInfo.title}</h1>
          <Content>{props.popupInfo.content}</Content>
          <People>{props.popupInfo.people}</People>
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