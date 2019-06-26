import React from "react"
import { HeroBanner } from "./Parallex.style"

export default function Parallax(props) {
  const ref = React.useRef(null)
  let width = undefined
  React.useEffect(() => {
    if (!ref.current || !ref.current.getBoundingClientRect().width) return
    // console.log("do something with", ref.current.getBoundingClientRect().width)
    width = ref.current.getBoundingClientRect().width
  }, [ref.current])
  return (
    <HeroBanner
      onMouseMove={props.onMouseMove}
      onMouseLeave={props.onMouseLeave}
      ref={ref}
    >
      {props.children}
    </HeroBanner>
  )
}
