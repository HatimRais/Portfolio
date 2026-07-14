import { motion } from "framer-motion"

export function SectionHeading({ eyebrow, title, align = "left" }) {
  const alignClass = align === "center" ? "mx-auto max-w-2xl text-center" : "text-left"

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-8 sm:mb-12 md:mb-16 ${alignClass}`}
    >
      <p className="mb-2 font-[family-name:var(--font-serif)] text-sm italic text-brand dark:text-brand-light sm:mb-3">
        {eyebrow}
      </p>
      <h2 className="break-words text-balance font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-ink min-[360px]:text-3xl min-[400px]:text-4xl dark:text-paper md:text-5xl">
        {title}
      </h2>
      <div
        className={`mt-3 h-1 w-12 bg-ochre sm:mt-4 sm:w-14 ${align === "center" ? "mx-auto" : ""}`}
        aria-hidden
      />
    </motion.div>
  )
}
