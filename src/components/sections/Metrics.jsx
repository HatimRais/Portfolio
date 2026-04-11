import { motion } from "framer-motion"
import { useLanguage } from "../../context/LanguageContext"
import { useCountUp } from "../../hooks/useCountUp"
import { GlassCard } from "../ui/GlassCard"
import { SectionHeading } from "../ui/SectionHeading"

function StatCard({ value, suffix, label, icon }) {
  const { ref, value: n } = useCountUp(value, { duration: 2200 })

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        whileHover={{ y: -4, transition: { type: "spring", stiffness: 400, damping: 22 } }}
      >
      <GlassCard className="group relative h-full overflow-hidden p-6 transition-shadow duration-300 hover:shadow-[0_0_36px_-12px_rgba(139,92,246,0.35)] md:p-8">
        <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-violet-500/10 blur-2xl transition group-hover:bg-violet-500/20" />
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 text-violet-600 dark:border-violet-400/30 dark:bg-violet-500/15 dark:text-violet-400">
          {icon}
        </div>
        <p className="font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
          {n}
          {suffix && (
            <span className="bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-cyan-400">
              {suffix}
            </span>
          )}
        </p>
        <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">{label}</p>
      </GlassCard>
      </motion.div>
    </div>
  )
}

export function Metrics() {
  const { t } = useLanguage()

  return (
    <section id="metrics" className="scroll-mt-24 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={t.metrics.subtitle} title={t.metrics.title} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            value={10}
            suffix="+"
            label={t.metrics.statProjects}
            icon={<ProjectsIcon />}
          />
          <StatCard
            value={3}
            suffix="+"
            label={t.metrics.statFullstack}
            icon={<StackIcon />}
          />
          <StatCard
            value={1}
            label={t.metrics.statInternship}
            icon={<BriefcaseIcon />}
          />
          <StatCard
            value={15}
            suffix="+"
            label={t.metrics.statTech}
            icon={<ChipIcon />}
          />
        </div>
      </div>
    </section>
  )
}

function ProjectsIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  )
}

function StackIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  )
}

function BriefcaseIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function ChipIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  )
}
