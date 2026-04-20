import { useState, useEffect, useRef } from "react"

interface UseTypewriterResult {
  displayText: string
}

const useTypewriter = (
  texts: string[],
  typeSpeed: number = 40,
  deleteSpeed: number = 25,
  pauseMs: number = 1800
): UseTypewriterResult => {
  const [displayText, setDisplayText] = useState("")
  const indexRef = useRef(0)       // which string we're on
  const charRef = useRef(0)        // current character position
  const deletingRef = useRef(false)
  const pauseRef = useRef(false)

  useEffect(() => {
    if (texts.length === 0) return

    let timeout: ReturnType<typeof setTimeout>

    const tick = () => {
      const current = texts[indexRef.current]

      if (pauseRef.current) {
        pauseRef.current = false
        deletingRef.current = true
        timeout = setTimeout(tick, deleteSpeed)
        return
      }

      if (!deletingRef.current) {
        // typing
        charRef.current += 1
        setDisplayText(current.slice(0, charRef.current))

        if (charRef.current >= current.length) {
          // finished typing — pause before deleting
          pauseRef.current = true
          timeout = setTimeout(tick, pauseMs)
        } else {
          timeout = setTimeout(tick, typeSpeed)
        }
      } else {
        // deleting
        charRef.current -= 1
        setDisplayText(current.slice(0, charRef.current))

        if (charRef.current <= 0) {
          // finished deleting — move to next string
          deletingRef.current = false
          indexRef.current = (indexRef.current + 1) % texts.length
          timeout = setTimeout(tick, typeSpeed)
        } else {
          timeout = setTimeout(tick, deleteSpeed)
        }
      }
    }

    timeout = setTimeout(tick, typeSpeed)
    return () => clearTimeout(timeout)
  }, [texts, typeSpeed, deleteSpeed, pauseMs])

  return { displayText }
}

export default useTypewriter
