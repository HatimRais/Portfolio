import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export function TypingText({ phrases, className = "" }) {
  const [index, setIndex] = useState(0)
  const [display, setDisplay] = useState("")
  const [deleting, setDeleting] = useState(false)

  const full = phrases[index] || ""

  useEffect(() => {
    const speed = deleting ? 42 : 78
    const t = window.setTimeout(() => {
      if (!deleting) {
        if (display.length < full.length) {
          setDisplay(full.slice(0, display.length + 1))
        } else {
          window.setTimeout(() => setDeleting(true), 2200)
        }
      } else {
        if (display.length > 0) {
          setDisplay(full.slice(0, display.length - 1))
        } else {
          setDeleting(false)
          setIndex((i) => (i + 1) % phrases.length)
        }
      }
    }, speed)
    return () => window.clearTimeout(t)
  }, [display, deleting, full, phrases.length, index])

  return (
    <span className={`inline-flex min-w-0 max-w-full items-baseline break-words ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index + display}
          initial={{ opacity: 0.85 }}
          animate={{ opacity: 1 }}
          className="break-words font-[family-name:var(--font-serif)] text-brand italic dark:text-brand-light"
        >
          {display}
        </motion.span>
      </AnimatePresence>
      <motion.span
        className="ml-0.5 inline-block h-[1.1em] w-0.5 translate-y-0.5 bg-ochre"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.55, repeat: Infinity, repeatType: "reverse" }}
        aria-hidden
      />
    </span>
  )
}
