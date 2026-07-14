import { motion } from "framer-motion"
import { useLanguage } from "../../context/LanguageContext"
import { GlassCard } from "../ui/GlassCard"
import { SectionHeading } from "../ui/SectionHeading"
import { PROJECT_FILTER_EVENT } from "../../constants/portfolioEvents"

function CodeStackIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  )
}

function NeuralIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  )
}

export function MyExpertise() {
  const { t } = useLanguage()

  const goProjects = (domain) => {
    window.dispatchEvent(new CustomEvent(PROJECT_FILTER_EVENT, { detail: { domain } }))
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const cards = [
    {
      key: "fullstack",
      icon: CodeStackIcon,
      accent:
        "border-brand-light/25 bg-gradient-to-br from-brand-light/10 via-white/40 to-emerald-500/10 shadow-brand-light/10 hover:border-brand-light/50 hover:shadow-[0_20px_50px_-20px_rgba(6,182,212,0.45)] dark:from-brand-light/10 dark:via-slate-900/40 dark:to-emerald-500/10 dark:hover:shadow-[0_20px_50px_-20px_rgba(34,211,238,0.25)]",
      iconWrap: "border-brand-light/30 bg-brand-light/15 text-brand dark:text-brand-light",
      btnClass:
        "rounded-xl bg-gradient-to-r from-brand-light to-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-light/25 transition group-hover:shadow-brand-light/40 dark:from-brand-light dark:to-emerald-500",
      onExplore: () => goProjects("fullstack"),
    },
    {
      key: "ai",
      icon: NeuralIcon,
      accent:
        "border-brand/25 bg-gradient-to-br from-brand/10 via-white/40 to-brand/10 shadow-brand/10 hover:border-brand-light/50 hover:shadow-[0_20px_50px_-20px_rgba(139,92,246,0.45)] dark:from-brand/10 dark:via-slate-900/40 dark:to-brand/10 dark:hover:shadow-[0_20px_50px_-20px_rgba(167,139,250,0.22)]",
      iconWrap: "border-brand/30 bg-brand/15 text-brand dark:text-brand-light",
      btnClass:
        "rounded-xl bg-gradient-to-r from-brand to-brand px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand/25 transition group-hover:shadow-brand/40 dark:from-brand-light dark:to-brand",
      onExplore: () => goProjects("ai"),
    },
  ]

  return (
    <section id="expertise" className="section-anchor px-3 py-14 sm:px-4 sm:py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={t.expertise.subtitle} title={t.expertise.title} />

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {cards.map((c, i) => {
            const Icon = c.icon
            const copy = t.expertise[c.key]
            return (
              <motion.div
                key={c.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
              >
                <GlassCard
                  className={`group relative h-full overflow-hidden p-8 transition duration-300 md:p-10 ${c.accent}`}
                >
                  <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/30 blur-2xl dark:bg-white/5" />
                  <div
                    className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border transition duration-300 group-hover:scale-105 ${c.iconWrap}`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900 dark:text-white">
                    {copy.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{copy.description}</p>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {t.expertise.techLabel}
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-800 dark:text-slate-200">{copy.tech}</p>
                  <motion.button
                    type="button"
                    onClick={c.onExplore}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`mt-8 ${c.btnClass}`}
                  >
                    {t.expertise.explore}
                  </motion.button>
                </GlassCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
