import { motion } from "framer-motion"
import { useLanguage } from "../../context/LanguageContext"
import { GlassCard } from "../ui/GlassCard"
import { SectionHeading } from "../ui/SectionHeading"

const points = ["validation", "jwt", "sql", "testing"]

export function TestingSecurity() {
  const { t } = useLanguage()

  return (
    <section id="engineering" className="scroll-mt-24 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={t.engineering.subtitle} title={t.engineering.title} />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GlassCard className="p-8 md:p-10">
            <ul className="grid gap-6 md:grid-cols-2">
              {points.map((key, i) => (
                <motion.li
                  key={key}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex gap-4"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-sm font-bold text-slate-900 dark:text-white">
                      {t.engineering.points[key].title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {t.engineering.points[key].body}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
