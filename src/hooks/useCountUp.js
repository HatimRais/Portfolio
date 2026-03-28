import { useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export function useCountUp(end, options = {}) {
  const { duration = 2000, decimals = 0 } = options
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-20%" })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const startTime = performance.now()

    const tick = (now) => {
      const elapsed = now - startTime
      const p = Math.min(elapsed / duration, 1)
      const eased = 1 - (1 - p) ** 3
      const current = end * eased
      setValue(decimals > 0 ? Number(current.toFixed(decimals)) : Math.round(current))
      if (p < 1) requestAnimationFrame(tick)
    }

    const id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
  }, [inView, end, duration, decimals])

  return { ref, value }
}
