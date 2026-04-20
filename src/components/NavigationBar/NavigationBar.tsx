import React, { useEffect, useState } from "react"
import {
  NavigationContainer,
  NavAnchor,
  ThemeToggle,
} from "./NavigationBar.style"
import * as Sec from "constants/SectionConstants"

const NAV_ITEMS = [
  { label: "About", href: `#${Sec.HERO}` },
  { label: "Experience", href: `#${Sec.EXPERIENCE}` },
  { label: "Projects", href: `#${Sec.PROJECTS}` },
  { label: "Skills", href: `#${Sec.SKILLS}` },
  { label: "Contact", href: `#${Sec.CONTACT}` },
]

interface INavigationBarProps {
  onThemeToggle: () => void
  isDark: boolean
}

const NavigationBar: React.FC<INavigationBarProps> = ({ onThemeToggle, isDark }) => {
  const [activeSection, setActiveSection] = useState<string>(Sec.HERO)

  useEffect(() => {
    const sectionIds = [Sec.HERO, Sec.EXPERIENCE, Sec.PROJECTS, Sec.SKILLS, Sec.CONTACT]

    const handleScroll = () => {
      const scrollY = window.scrollY
      const offset = 80

      let current = sectionIds[0]
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop - offset <= scrollY) {
          current = id
        }
      }
      setActiveSection(current)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <NavigationContainer>
      {NAV_ITEMS.map(item => (
        <NavAnchor
          key={item.label}
          href={item.href}
          className={activeSection === item.href.slice(1) ? "active" : ""}
        >
          {item.label}
        </NavAnchor>
      ))}
      <ThemeToggle onClick={onThemeToggle} aria-label="Toggle theme" {...{ isDark }} />
    </NavigationContainer>
  )
}

export default NavigationBar
