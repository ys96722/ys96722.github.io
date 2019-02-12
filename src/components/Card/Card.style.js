import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  z-index: 1;
  /* margin: 32px auto; */
  margin: auto;
  max-width: 400px;
  height: 500px;
  perspective: 1000px;
  background-color: black;
`;
export const CardImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;
export const CardTitle = styled.h1``;
export const CardHeader = styled.h2``;
export const CardContent = styled.p``;
export const CardLink = styled.a``;
