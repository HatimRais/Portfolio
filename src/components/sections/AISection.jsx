import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useLanguage } from "../../context/LanguageContext"
import { GlassCard } from "../ui/GlassCard"
import { SectionHeading } from "../ui/SectionHeading"

const bars = [
  { h: 72, delay: 0, color: "from-violet-500 to-fuchsia-500" },
  { h: 55, delay: 0.08, color: "from-fuchsia-500 to-pink-500" },
  { h: 88, delay: 0.16, color: "from-cyan-500 to-violet-500" },
  { h: 64, delay: 0.24, color: "from-violet-600 to-cyan-500" },
  { h: 48, delay: 0.32, color: "from-fuchsia-600 to-violet-500" },
  { h: 76, delay: 0.4, color: "from-cyan-400 to-fuchsia-500" },
]

export function AISection() {
  const { t } = useLanguage()
  const chartRef = useRef(null)
  const inView = useInView(chartRef, { once: true, margin: "-60px" })

  const cards = [
    { title: t.aiSection.ml, desc: t.aiSection.mlDesc },
    { title: t.aiSection.data, desc: t.aiSection.dataDesc },
    { title: t.aiSection.viz, desc: t.aiSection.vizDesc },
  ]

  return (
    <section className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={t.aiSection.subtitle} title={t.aiSection.title} />

        <div className="grid items-stretch gap-8 lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="h-full p-8 md:p-10">
              <p className="leading-relaxed text-slate-600 dark:text-slate-300">{t.aiSection.lead}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {cards.map((c, i) => (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="rounded-xl border border-slate-200/70 bg-gradient-to-br from-violet-500/5 to-cyan-500/5 p-4 dark:border-white/10"
                  >
                    <h4 className="font-[family-name:var(--font-display)] text-sm font-bold text-slate-900 dark:text-white">
                      {c.title}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                      {c.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            ref={chartRef}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="relative h-full min-h-[280px] overflow-hidden p-8 md:p-10">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
                {t.aiSection.activity}
              </p>
              <div className="flex h-48 items-end justify-between gap-2 sm:gap-3 md:h-56">
                {bars.map((b, i) => (
                  <div key={i} className="flex flex-1 flex-col items-center gap-2">
                    <motion.div
                      className={`w-full max-w-[3rem] rounded-t-lg bg-gradient-to-t ${b.color} shadow-[0_0_20px_-4px_rgba(139,92,246,0.5)]`}
                      initial={{ height: 0 }}
                      animate={inView ? { height: `${b.h}%` } : { height: 0 }}
                      transition={{ duration: 0.9, delay: b.delay, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <span className="text-[10px] font-medium text-slate-400 dark:text-slate-500">
                      {Math.round(b.h / 10)}
                    </span>
                  </div>
                ))}
              </div>
              <motion.div
                className="pointer-events-none absolute inset-x-8 bottom-16 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent"
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
