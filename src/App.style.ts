import styled from "styled-components"

export const AppContainer = styled.div`
  background-color: ${props => props.theme.background};
  min-height: 100vh;
  overflow-x: hidden;
  transition: background 0.5s;
`
