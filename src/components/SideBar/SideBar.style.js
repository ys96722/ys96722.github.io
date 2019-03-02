import styled, { css } from "styled-components";
import { blue } from "../../style/variables";
import { Flex } from "../../style/grid";

export const SideContainer = styled(Flex)`
  position: fixed;
  top: 40%;
  left: 2%;
  flex-direction: column;
  background-color: white;
`;

export const SocialButton = styled.a`
  margin: 0.2rem 0;
  text-align: center;
  text-decoration: none;
  font-size: 2rem;
  border-radius: 20px;
  background-color: ${blue};
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
