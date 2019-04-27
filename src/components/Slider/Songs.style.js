import styled, { keyframes, css } from "styled-components";
// import React from "react";
// import LazyImage from "../LazyImage/LazyImage.js";

// export const HapImg = ({ doesShow }) => (
//   <SongDiv
//     show={doesShow ? "initial" : "hidden"}
//     animateIn={doesShow}
//     animateOut={!doesShow}
//     zVal="1"
//   >
//     <LazyImage
//       src={require("../../assets/song_banners/happier_cover.jpeg")}
//       alt="Happier"
//       style={{
//         objectFit: "cover",
//         display: "initial",
//         width: "100%",
//         height: "100%"
//       }}
//     />
//   </SongDiv>
// );
// export const ChildImg = ({ doesShow }) => (
//   <SongDiv
//     show={doesShow ? "initial" : "hidden"}
//     animateIn={doesShow}
//     animateOut={!doesShow}
//     zVal="1"
//   >
//     <LazyImage
//       src={require("../../assets/song_banners/child_cover.jpeg")}
//       alt="Child"
//       style={{
//         objectFit: "cover",
//         display: "initial",
//         width: "100%",
//         height: "100%"
//       }}
//     />
//   </SongDiv>
// );
// export const ForImg = ({ doesShow }) => (
//   <SongDiv
//     show={doesShow ? "initial" : "hidden"}
//     animateIn={doesShow}
//     animateOut={!doesShow}
//     zVal="1"
//   >
//     <LazyImage
//       src={require("../../assets/song_banners/forever.jpeg")}
//       alt="Forever"
//       style={{
//         objectFit: "cover",
//         display: "initial",
//         width: "100%",
//         height: "100%"
//       }}
//     />
//   </SongDiv>
// );
// export const HapFrame = ({ doesShow }) => (
//   <SongDiv
//     show={doesShow ? "initial" : "hidden"}
//     animateIn={doesShow}
//     animateOut={!doesShow}
//     // zVal="-1"
//   >
//     <iframe
//       title="happier"
//       width="100%"
//       height="100%"
//       scrolling="no"
//       frameborder="no"
//       src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/512176407&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"
//     />
//   </SongDiv>
// );
// export const ChildFrame = ({ doesShow }) => (
//   <SongDiv
//     show={doesShow ? "initial" : "hidden"}
//     animateIn={doesShow}
//     animateOut={!doesShow}
//     // zVal="-1"
//   >
//     <iframe
//       title="child"
//       width="100%"
//       height="100%"
//       scrolling="no"
//       frameborder="no"
//       src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/586245420&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"
//     />
//   </SongDiv>
// );

// export const ForFrame = ({ doesShow }) => (
//   <SongDiv
//     show={doesShow ? "initial" : "hidden"}
//     animateIn={doesShow}
//     animateOut={!doesShow}
//     // zVal="-1"
//   >
//     <iframe
//       title="forever"
//       width="100%"
//       height="100%"
//       scrolling="no"
//       frameborder="no"
//       src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/528417867&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"
//     />
//   </SongDiv>
// );

export const fade_in = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  
`;

export const fade_out = keyframes`
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  
`;

export const SongDiv = styled.div`
  /* display: ${props => props.show} ; */
  visibility: ${props => props.show};
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  /* justify-content: center;
  align-items: center;
  overflow: hidden */

  /* animation: ${props => props.animation}; */
  ${({ zVal }) =>
    zVal &&
    css`
      z-index: ${zVal};
    `}

  ${({ animateIn }) =>
    animateIn &&
    css`
      animation: ${fade_in} 0.5s ease-in;
    `}

    ${({ animateOut }) =>
      animateOut &&
      css`
        animation: ${fade_out} 0.5s ease-out;
      `}
  /* animation: ${fade_in} 0.5s ease-in; */
`;
