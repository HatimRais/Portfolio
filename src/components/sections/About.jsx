import { motion } from "framer-motion"
import { useLanguage } from "../../context/LanguageContext"
import { GlassCard } from "../ui/GlassCard"
import { SectionHeading } from "../ui/SectionHeading"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="scroll-mt-24 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={t.about.subtitle} title={t.about.title} />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="p-8 md:p-10">
              <p className="leading-relaxed text-slate-600 dark:text-slate-300">{t.about.p1}</p>
              <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">{t.about.p2}</p>
            </GlassCard>
          </motion.div>

          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <GlassCard className="h-full p-6 md:p-8">
                <h3 className="mb-4 flex items-center gap-2 font-[family-name:var(--font-display)] text-lg font-bold text-slate-900 dark:text-white">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 shadow-[0_0_12px_rgba(139,92,246,0.7)]" />
                  {t.about.edu}
                </h3>
                <ul className="space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  <li className="rounded-xl border border-slate-200/60 bg-slate-50/50 px-4 py-3 dark:border-white/10 dark:bg-slate-800/40">
                    {t.about.edu1}
                  </li>
                  <li className="rounded-xl border border-slate-200/60 bg-slate-50/50 px-4 py-3 dark:border-white/10 dark:bg-slate-800/40">
                    {t.about.edu2}
                  </li>
                </ul>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 }}
            >
              <GlassCard className="h-full p-6 md:p-8">
                <h3 className="mb-4 flex items-center gap-2 font-[family-name:var(--font-display)] text-lg font-bold text-slate-900 dark:text-white">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 shadow-[0_0_12px_rgba(6,182,212,0.6)]" />
                  {t.about.exp}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {t.about.exp1}
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
