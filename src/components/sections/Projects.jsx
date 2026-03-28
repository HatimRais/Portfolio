import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { projects } from "../../data/projects"
import { useLanguage } from "../../context/LanguageContext"
import { GlassCard } from "../ui/GlassCard"
import { SectionHeading } from "../ui/SectionHeading"

const filters = [
  { key: "filterAll", cat: "all" },
  { key: "filterFullstack", cat: "fullstack" },
  { key: "filterBackend", cat: "backend" },
  { key: "filterEcommerce", cat: "ecommerce" },
  { key: "filterMobile", cat: "mobile" },
  { key: "filterWeb", cat: "web" },
]

export function Projects() {
  const { t, lang } = useLanguage()
  const [active, setActive] = useState("all")

  const filtered = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.category === active)),
    [active],
  )

  return (
    <section id="projects" className="scroll-mt-24 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={t.projects.subtitle} title={t.projects.title} />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {filters.map(({ key, cat }) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                active === cat
                  ? "border-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/30 dark:from-violet-500 dark:to-fuchsia-500"
                  : "border-slate-300/80 bg-white/50 text-slate-600 hover:border-violet-400/50 dark:border-white/10 dark:bg-slate-900/40 dark:text-slate-300"
              }`}
            >
              {t.projects[key]}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid gap-8 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ type: "spring", stiffness: 350, damping: 28 }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <GlassCard className="group relative h-full overflow-hidden p-6 transition duration-300 md:p-8 md:hover:shadow-[0_0_48px_-12px_rgba(139,92,246,0.4)]">
                  <div className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full bg-violet-500/10 blur-3xl transition duration-500 group-hover:scale-110 group-hover:bg-violet-500/25 dark:bg-violet-500/15" />
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-slate-900 dark:text-white">
                    {lang === "fr" ? p.titleFr : p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {lang === "fr" ? p.descriptionFr : p.description}
                  </p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400">
                    {t.projects.stack}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {p.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-slate-200/80 bg-slate-50/80 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-slate-800/60 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <motion.a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center rounded-xl border border-slate-300/80 bg-white/70 px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-violet-400/60 hover:text-violet-700 dark:border-white/15 dark:bg-slate-800/50 dark:text-slate-100 dark:hover:border-violet-400/40"
                    >
                      {t.projects.github}
                    </motion.a>
                    {p.demo ? (
                      <motion.a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-violet-500/25 dark:from-violet-500 dark:to-cyan-500"
                      >
                        {t.projects.demo}
                      </motion.a>
                    ) : (
                      <span className="inline-flex cursor-not-allowed items-center rounded-xl border border-dashed border-slate-300/80 px-4 py-2.5 text-sm text-slate-400 dark:border-white/15 dark:text-slate-500">
                        {t.projects.demo}
                      </span>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
