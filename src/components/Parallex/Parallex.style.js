import styled from "styled-components"
import { Flex } from "../../style/grid"
import { mint } from "../../style/variables"

export const HeroBanner = styled(Flex)`
  flex-direction: column;
  /* font-size: 6em;
  font-weight: bold;
  line-height: 1; */
  position: relative;
  width: 400px;
  height: 270px;
  /* margin: 0.25em; */
  /* padding: 0.5em 0.75em; */
  text-align: center;
  justify-content: center;
  align-items: center;
  /* border: 0.125em solid ${mint}; */
  border: 1rem solid ${mint};
  color: ${mint};
  background-color: black;
  border-radius: 10px;
  margin-bottom: 4rem;
  margin-top: 4rem;
  h1 {
    font-size: 6em;
    font-weight: bold;
    line-height: 1;
  }
  h3 {
    font-size: 2em;
  }
`
