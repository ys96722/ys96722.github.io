// Import Dependencies
import React, { Component } from "react"
// Import Styled Components
import { Button, ButtonContainer, ProjectContainer } from "./Projects.style"
import Websites from "../../components/Slider/Websites"
import Games from "../../components/Slider/Games"
import Songs from "../../components/Slider/Songs"
import Analytics from "../../components/Slider/Analytics"
import { PageHeader } from "../../style/grid"
import {
  PageTitle,
  PageSubTitle,
  A,
  NavButton,
  BottomDiv
} from "../../style/types"
import Popup from "../../components/Popup/Popup"
import * as R from 'constants/RouteConstants'
import { useNavigate } from "react-router-dom"

const Projects: React.FC = () => {
  const [visibleIndex, setVisibleIndex] = React.useState(0)
  const [showPopup, setShowPopup] = React.useState(false)
  const [popupInfo, setPopupInfo] = React.useState(undefined)
  const [fetchInProgress, setFetchInProgress] = React.useState(true)
  const navigate = useNavigate();

  React.useEffect(() => {
    setFetchInProgress(false)
  }, [])

  const setVisible = (index = 0) => {
    setVisibleIndex(index)
  }

  const togglePopup = infos => {
    setShowPopup(!showPopup)
    setPopupInfo(infos)
  }

    const projects = [
      <Websites key="0" togglePopup={togglePopup} />,
      <Analytics key="1" togglePopup={togglePopup} />,
      <Games key="2" togglePopup={togglePopup} />,
      <Songs
        key="3"
        togglePopup={togglePopup}
      />
    ]

    return fetchInProgress ? (
      <h1>Loading...</h1>
    ) : (
      <ProjectContainer animation="fadeIn">
        {/* List that captures Active */}
        <PageHeader>
          <PageTitle>Recent Work</PageTitle>
          <br />
          <PageSubTitle>
            Here are some of my featured projects that I am proud to have been
            part of. Got any questions? Message me on{"\u00A0"}
            <A href="https://www.linkedin.com/in/yoonchang" target="_blank">
              LinkedIn!
            </A>
          </PageSubTitle>
        </PageHeader>

        <ButtonContainer justify="center">
          <Button
            onClick={e => {
              setVisible(0)
            }}
            active={visibleIndex === 0}
          >
            Websites
          </Button>
          <Button
            onClick={e => {
              setVisible(1)
            }}
            active={visibleIndex === 1}
          >
            Analytics
          </Button>
          <Button
            onClick={e => {
              setVisible(2)
            }}
            active={visibleIndex === 2}
          >
            Games
          </Button>
          <Button
            onClick={e => {
              setVisible(3)
            }}
            active={visibleIndex === 3}
          >
            Songs
          </Button>
        </ButtonContainer>
        {/* Render Active */}
        {projects[visibleIndex]}
        {showPopup ? (
          <Popup
            closePopup={togglePopup}
            popupInfo={popupInfo}
          />
        ) : null}
        <BottomDiv>
          <NavButton direction="left" onClick={() => navigate(R.Home)}>
            &lt;&lt; Home
          </NavButton>
          <NavButton direction="right" onClick={() => navigate(R.Resume)}>
            Resume &gt;&gt;
          </NavButton>
        </BottomDiv>
      </ProjectContainer>
    )
}

export default Projects