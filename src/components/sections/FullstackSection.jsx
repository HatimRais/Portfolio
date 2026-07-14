import { motion } from "framer-motion"
import { useLanguage } from "../../context/LanguageContext"
import { GlassCard } from "../ui/GlassCard"
import { SectionHeading } from "../ui/SectionHeading"

const pillars = [
  {
    key: "web",
    icon: GlobeIcon,
  },
  {
    key: "api",
    icon: ApiIcon,
  },
  {
    key: "architecture",
    icon: LayersIcon,
  },
  {
    key: "ux",
    icon: PaletteIcon,
  },
]

export function FullstackSection() {
  const { t } = useLanguage()
  const badges = t.fullstackSection.badges

  return (
    <section id="fullstack" className="section-anchor px-3 py-14 sm:px-4 sm:py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={t.fullstackSection.subtitle} title={t.fullstackSection.title} />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {badges.map((b) => (
            <span
              key={b}
              className="rounded-full border border-brand-light/25 bg-brand-light/10 px-3 py-1 text-xs font-semibold text-brand dark:border-brand-light/30 dark:bg-brand-light/15 dark:text-brand-light"
            >
              {b}
            </span>
          ))}
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((item, i) => {
            const Icon = item.icon
            const copy = t.fullstackSection.pillars[item.key]
            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4 }}
              >
                <GlassCard className="group h-full border-brand-light/15 p-6 transition duration-300 hover:border-brand-light/35 hover:shadow-[0_0_40px_-16px_rgba(6,182,212,0.35)] md:p-7">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-brand-light/25 bg-brand-light/10 text-brand transition group-hover:scale-105 dark:text-brand-light">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-slate-900 dark:text-white">
                    {copy.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{copy.body}</p>
                </GlassCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function GlobeIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
      />
    </svg>
  )
}

function ApiIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  )
}

function LayersIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7l8-4 8 4M4 12l8 4 8-4M4 17l8 4 8-4" />
    </svg>
  )
}

function PaletteIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
      />
    </svg>
  )
}
