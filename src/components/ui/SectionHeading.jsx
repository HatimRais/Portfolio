import { motion } from "framer-motion"

export function SectionHeading({ eyebrow, title, align = "center" }) {
  const alignClass =
    align === "left" ? "text-left" : "mx-auto max-w-2xl text-center"

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 320, damping: 28 }}
      className={`mb-12 md:mb-16 ${alignClass}`}
    >
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
        {eyebrow}
      </p>
      <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-slate-900 min-[400px]:text-3xl dark:text-white md:text-4xl">
        {title}
      </h2>
    </motion.div>
  )
}
