import styled, { css } from "styled-components";
import { Flex } from "../../style/grid";
import { A, P } from "../../style/types";
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

export const PopupImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  height: 100%;
  width: 50%;
`;

export const PopupContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  text-align: center;
  padding: ${paddingValue};
  white-space: pre-wrap;

  ${P} {
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
`;

export const PopupFooter = styled.div`
  margin-top: auto;
  position: relative;
  font-size: 1.3rem;
  /* align-self: flex-end; */
  /* justify-self: flex-end; */
  width: 100%;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
  display: flex;
  bottom: ${paddingValue};
  flex-direction: column;

  ${A} {
    margin-top: 1.5rem;
    align-self: center;
  }
`;

export const People = styled.p`
  position: relative;
  margin-top: 1.5rem;
  text-align: left;
`;
