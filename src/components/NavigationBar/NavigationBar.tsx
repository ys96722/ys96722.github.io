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
    const observers: IntersectionObserver[] = []

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.35 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
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
      <ThemeToggle onClick={onThemeToggle} aria-label="Toggle theme">
        {isDark ? "☀" : "●"}
      </ThemeToggle>
    </NavigationContainer>
  )
}

export default NavigationBar
