import styled, { css } from "styled-components";

export const PlayerContainer = styled.div`
  align-self: center;
  justify-self: middle;
  /* margin-top: auto; */
  position: relative;
  /* background-color: red; */
  ${ ({ color }) => 
    color && css`
        background-color: ${color};
    `
  }
  display: flex;
  width: 20%;
  height: 20%;
  /* border: 5px solid red; */
  border-radius: 10px;
  z-index: 2;
`;