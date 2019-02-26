import styled, { css } from "styled-components";
import { Flex } from "../../style/grid";
import { A } from "../../style/types";
import { fontSize, paddingValue } from "../../style/variables";
// import { blue, yellow } from "../../style/variables";

export const PopupContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const PopupInner = styled(Flex)`
  position: absolute;
  border-radius: 10px;
  flex-direction: row;
  left: 15%;
  right: 15%;
  top: 15%;
  bottom: 15%;
  margin: auto;
  background: white;
  overflow: hidden;
`;

export const PopupContent = styled.div`
  position: relative;
  height: 100%;
  width: 50%;
  text-align: center;
  padding: ${paddingValue};
  white-space: pre-wrap;

  ${A} {
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    bottom: ${paddingValue};
  }
`;

export const Content = styled.p`
  font-size: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  margin-top: 1rem;
`;

export const People = styled.p`
  position: relative;
  margin-top: 2rem;
  font-size: ${fontSize};
  text-align: left;
`;