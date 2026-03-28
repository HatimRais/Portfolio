import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function SkillBar({ name, level }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-slate-700 dark:text-slate-200">{name}</span>
        <span className="tabular-nums text-slate-500 dark:text-slate-400">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-200/80 dark:bg-slate-800/80">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 shadow-[0_0_12px_rgba(139,92,246,0.45)]"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}
