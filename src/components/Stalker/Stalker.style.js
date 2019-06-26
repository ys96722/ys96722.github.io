import styled from "styled-components"

export const StalkerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  width: 50%;
  height: 50%;
  color: white;
`
