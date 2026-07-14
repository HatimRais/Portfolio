import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function SkillBar({ name, level }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-ink/80 dark:text-paper/85">{name}</span>
        <span className="tabular-nums text-ink/50 dark:text-paper/50">{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-sm bg-mist dark:bg-white/10">
        <motion.div
          className="h-full rounded-sm bg-brand dark:bg-brand-light"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}
