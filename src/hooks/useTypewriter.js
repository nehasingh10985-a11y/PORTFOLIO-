import { useEffect, useRef, useState } from "react"

export default function useTypewriter(words, typeMs=70, delMs=40, pauseMs=1800) {
  const [text, setText] = useState("")
  const s = useRef({ i:0, j:0, dir:1 })

  useEffect(() => {
    let t
    const tick = () => {
      const { i, j, dir } = s.current
      const w = words[i]
      if (dir === 1) {
        setText(w.slice(0, j+1))
        s.current = j+1 === w.length ? { i, j:j+1, dir:-1 } : { i, j:j+1, dir:1 }
        t = setTimeout(tick, j+1 === w.length ? pauseMs : typeMs)
      } else {
        setText(w.slice(0, j-1))
        s.current = j-1 === 0 ? { i:(i+1)%words.length, j:0, dir:1 } : { i, j:j-1, dir:-1 }
        t = setTimeout(tick, j-1 === 0 ? 300 : delMs)
      }
    }
    t = setTimeout(tick, 900)
    return () => clearTimeout(t)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return text
}
