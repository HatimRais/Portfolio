import { motion } from "framer-motion"
import { useLanguage } from "../../context/LanguageContext"
import { GlassCard } from "../ui/GlassCard"
import { SectionHeading } from "../ui/SectionHeading"

const topics = ["ai", "system", "cloud"]

export function CurrentlyLearning() {
  const { t } = useLanguage()

  return (
    <section id="learning" className="scroll-mt-24 px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={t.learning.subtitle} title={t.learning.title} />

        <div className="flex flex-wrap justify-center gap-4">
          {topics.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 380, damping: 24 }}
              whileHover={{ scale: 1.04 }}
            >
              <GlassCard className="border-violet-500/20 px-6 py-4 transition hover:border-violet-400/40 hover:shadow-[0_0_24px_-8px_rgba(139,92,246,0.4)]">
                <p className="font-[family-name:var(--font-display)] text-sm font-semibold text-slate-800 dark:text-slate-100">
                  {t.learning.topics[key]}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
