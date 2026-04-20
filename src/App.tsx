import React from "react"
import { BrowserRouter } from "react-router-dom"
import Providers from "providers/Providers"
import NavigationBar from "components/NavigationBar/NavigationBar"
import Hero from "sections/Hero/Hero"
import Experience from "sections/Experience/Experience"
import Projects from "sections/Projects/Projects"
import Skills from "sections/Skills/Skills"
import Contact from "sections/Contact/Contact"
import * as C from "constants/ColorConstants"
import { AppContainer } from "./App.style"

const App: React.FC = () => {
  const [currentTheme, setCurrentTheme] = React.useState<C.ITheme>(C.blackTheme)

  const handleChangeTheme = () => {
    if (currentTheme.background === C.blackTheme.background) {
      setCurrentTheme(C.whiteTheme)
    } else {
      setCurrentTheme(C.blackTheme)
    }
  }

  return (
    <Providers currentTheme={currentTheme}>
      <BrowserRouter>
        <AppContainer>
          <NavigationBar onThemeToggle={handleChangeTheme} isDark={currentTheme.background === C.blackTheme.background} />
          <main>
            <Hero />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
          </main>
        </AppContainer>
      </BrowserRouter>
    </Providers>
  )
}

export default App
