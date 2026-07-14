import { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { projects } from "../../data/projects"
import { PROJECT_FILTER_EVENT } from "../../constants/portfolioEvents"
import { useLanguage } from "../../context/LanguageContext"
import { SectionHeading } from "../ui/SectionHeading"
import { FullstackProjectCard } from "../projects/FullstackProjectCard"
import { AIProjectCard } from "../projects/AIProjectCard"

const DOMAIN_FILTERS = [
  { key: "filterAll", domain: "all" },
  { key: "filterFullstack", domain: "fullstack" },
  { key: "filterAi", domain: "ai" },
]

export function Projects() {
  const { t, lang } = useLanguage()
  const [activeDomain, setActiveDomain] = useState("all")

  useEffect(() => {
    const onFilter = (e) => {
      const d = e.detail?.domain
      if (d === "fullstack" || d === "ai" || d === "all") setActiveDomain(d)
    }
    window.addEventListener(PROJECT_FILTER_EVENT, onFilter)
    return () => window.removeEventListener(PROJECT_FILTER_EVENT, onFilter)
  }, [])

  const filtered = useMemo(
    () => (activeDomain === "all" ? projects : projects.filter((p) => p.domain === activeDomain)),
    [activeDomain],
  )

  const cat = (key) => (key && t.projects.categories?.[key] ? t.projects.categories[key] : null)

  return (
    <section id="projects" className="section-anchor px-3 py-16 sm:px-4 sm:py-20 md:px-6 md:py-28">
      <div className="mx-auto min-w-0 max-w-6xl">
        <SectionHeading eyebrow={t.projects.subtitle} title={t.projects.title} />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-wrap justify-center gap-1.5 px-0.5 sm:mb-10 sm:gap-2"
        >
          {DOMAIN_FILTERS.map(({ key, domain }) => {
            const isActive = activeDomain === domain
            const fullstackActive =
              isActive && domain === "fullstack"
                ? "border-transparent bg-gradient-to-r from-brand-light to-emerald-600 text-white shadow-lg shadow-brand-light/30 dark:from-brand-light dark:to-emerald-500"
                : ""
            const aiActive =
              isActive && domain === "ai"
                ? "border-transparent bg-gradient-to-r from-brand to-brand text-white shadow-lg shadow-brand/35 dark:from-brand-light dark:to-brand"
                : ""
            const allActive =
              isActive && domain === "all"
                ? "border-transparent bg-gradient-to-r from-slate-700 to-slate-600 text-white shadow-lg dark:from-slate-600 dark:to-slate-500"
                : ""
            const activeClass = fullstackActive || aiActive || allActive
            return (
              <button
                key={domain}
                type="button"
                onClick={() => setActiveDomain(domain)}
                className={`rounded-full border px-3 py-2 text-[10px] font-semibold uppercase tracking-wide transition min-[400px]:px-4 min-[400px]:text-xs min-[400px]:tracking-wider ${
                  activeClass ||
                  "border-slate-300/80 bg-white/50 text-slate-600 hover:border-brand-light/40 dark:border-white/10 dark:bg-slate-900/40 dark:text-slate-300 dark:hover:border-brand-light/40"
                }`}
              >
                {t.projects[key]}
              </button>
            )
          })}
        </motion.div>

        <motion.div layout className="grid gap-8 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => {
              const title = lang === "fr" ? p.titleFr : p.title
              const description = lang === "fr" ? p.descriptionFr : p.description
              const categoryLabel = p.categoryKey ? cat(p.categoryKey) : null
              const metrics =
                p.metrics?.map((m) => ({
                  label: lang === "fr" ? m.labelFr : m.label,
                  value: m.value,
                })) ?? []
              const tags =
                p.resultTags?.map((tag) => ({
                  label: lang === "fr" ? tag.labelFr : tag.label,
                })) ?? []

              return (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  whileHover={{ y: -5 }}
                >
                  {p.domain === "ai" ? (
                    <AIProjectCard
                      title={title}
                      description={description}
                      stack={p.stack}
                      github={p.github}
                      demo={p.demo}
                      internalDemoId={p.internalDemoId}
                      metrics={metrics}
                      resultTags={tags}
                      categoryLabel={categoryLabel}
                      stackLabel={t.projects.stack}
                      githubLabel={t.projects.github}
                      demoLabel={t.projects.demo}
                      tryDemoLabel={t.projects.tryDemo}
                      keyMetricsLabel={t.projects.keyMetrics}
                    />
                  ) : (
                    <FullstackProjectCard
                      title={title}
                      description={description}
                      stack={p.stack}
                      github={p.github}
                      demo={p.demo}
                      internalDemoId={p.internalDemoId}
                      previewFrom={p.previewFrom}
                      previewTo={p.previewTo}
                      categoryLabel={categoryLabel}
                      stackLabel={t.projects.stack}
                      githubLabel={t.projects.github}
                      demoLabel={t.projects.demo}
                      tryDemoLabel={t.projects.tryDemo}
                      uiPreviewLabel={t.projects.uiPreview}
                    />
                  )}
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
