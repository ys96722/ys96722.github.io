import React from "react";
import {
  PopupContainer,
  PopupInner,
  PopupContentContainer,
  PopupImageContainer,
  Content,
  People,
  PopupFooter
} from "./Popup.style";
import PopupSlider from "./PopupSlider/PopupSlider";
import TextSlider from "../TextSlider/TextSlider"
import { CloseButton, A, P } from "../../style/types";

const popup = props => {
  return (
    <PopupContainer>
      <PopupInner>
        <PopupImageContainer>
          <PopupSlider imagePaths={props.popupInfo.images} />
        </PopupImageContainer>
        <PopupContentContainer>
          <h1>{props.popupInfo.title}</h1>
          <TextSlider content={props.popupInfo.content} testimonial={props.popupInfo.testimonial} people={props.popupInfo.people} />
          {/* <P>{props.popupInfo.content}</P>
          <PopupFooter>
            <People>{props.popupInfo.people}</People>
            <A href={props.popupInfo.link} target="_blank">
              <span>Take a look!</span>
            </A>
          </PopupFooter> */}
          <span><A href={props.popupInfo.link} target="_blank">
            Take a look!
          </A></span>
        </PopupContentContainer>
        <CloseButton close onClick={props.closePopup} />
      </PopupInner>
    </PopupContainer>
  );
};

export default popup;
