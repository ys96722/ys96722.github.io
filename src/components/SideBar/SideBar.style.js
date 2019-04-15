import styled, { css } from "styled-components";
import { SocialIcon } from "react-social-icons";
import { blue } from "../../style/variables";
import { Flex } from "../../style/grid";
import media from "../../style/media";

export const SideContainer = styled(Flex)`
  position: fixed;
  top: 40%;
  left: 2%;
  flex-direction: column;
  background-color: transparent;


  ${media.tablet`
    position: relative;
    bottom: 0;
    width: fit-content;
    height: auto;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
  `}

  ${media.phone`
    padding-top: 30px;
  `}
`;

export const SocialButton = styled.a`
  margin: 0.2rem 0;
  text-align: center;
  text-decoration: none;
  font-size: 2rem;
  border-radius: 20px;
  /* background-color: ${blue}; */
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 15px 15px;
  opacity: 0.9;
  transition: background-color 0.5s, color 0.5s;

  &:hover {
    background-color: rgba(220, 220, 220, 1);
    color: ${blue};
    /* border: 1px black; */
  }
  &:active {
  }
`;
