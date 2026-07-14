import { motion } from "framer-motion"
import { caseStudiesDetail, caseStudySteps } from "../../data/caseStudiesDetail"
import { useLanguage } from "../../context/LanguageContext"
import { GlassCard } from "../ui/GlassCard"
import { SectionHeading } from "../ui/SectionHeading"

const studies = ["deepsleep", "sicam"]

function StepIcon({ type }) {
  const c = "h-5 w-5 text-brand dark:text-brand-light"
  switch (type) {
    case "target":
      return (
        <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="4" />
          <path strokeLinecap="round" d="M12 3v2M12 19v2M3 12h2M19 12h2" />
        </svg>
      )
    case "spark":
      return (
        <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    case "layers":
      return (
        <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7l8-4 8 4M4 12l8 4 8-4M4 17l8 4 8-4" />
        </svg>
      )
    case "alert":
      return (
        <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z" />
        </svg>
      )
    default:
      return (
        <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      )
  }
}

export function CaseStudies() {
  const { lang, t } = useLanguage()
  const copy = caseStudiesDetail[lang] || caseStudiesDetail.en

  return (
    <section id="case-studies" className="section-anchor px-3 py-14 sm:px-4 sm:py-20 md:px-6 md:py-28">
      <div className="mx-auto min-w-0 max-w-6xl">
        <SectionHeading eyebrow={t.caseStudies.subtitle} title={t.caseStudies.title} />

        <div className="space-y-14 sm:space-y-20 md:space-y-24">
          {studies.map((studyId, studyIndex) => {
            const data = copy[studyId]
            return (
              <motion.article
                key={studyId}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: studyIndex * 0.05 }}
                className="min-w-0"
              >
                <div className="mb-8 flex flex-col gap-2 border-b border-slate-200/80 pb-5 dark:border-white/10 sm:mb-10 sm:pb-6 md:flex-row md:items-end md:justify-between">
                  <div className="min-w-0">
                    <h3 className="break-words font-[family-name:var(--font-display)] text-xl font-bold text-slate-900 dark:text-white sm:text-2xl md:text-3xl">
                      {data.name}
                    </h3>
                    <p className="mt-1 break-phone text-sm font-medium text-brand dark:text-brand-light">{data.tag}</p>
                  </div>
                </div>

                <div className="relative">
                  <div
                    className="absolute left-[1.15rem] top-8 bottom-8 hidden w-px bg-gradient-to-b from-brand/50 via-ochre/30 to-brand-light/50 md:block"
                    aria-hidden
                  />

                  <ol className="space-y-5 sm:space-y-8">
                    {caseStudySteps.map(({ key, icon }, i) => (
                      <motion.li
                        key={key}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ delay: i * 0.06 }}
                        className="relative min-w-0 md:pl-24"
                      >
                        <div className="absolute left-0 top-0 hidden h-10 w-10 items-center justify-center rounded-xl border border-brand/30 bg-white/90 shadow-md shadow-brand/10 dark:border-brand-light/25 dark:bg-slate-900/90 md:flex">
                          <StepIcon type={icon} />
                        </div>
                        <GlassCard className="p-4 sm:p-6 md:p-8">
                          <div className="mb-3 flex items-center gap-3 md:hidden">
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand/30 bg-brand/5 dark:border-brand-light/25">
                              <StepIcon type={icon} />
                            </span>
                            <h4 className="min-w-0 break-words font-[family-name:var(--font-display)] text-base font-bold text-slate-900 dark:text-white sm:text-lg">
                              {t.caseStudies.steps[key]}
                            </h4>
                          </div>
                          <h4 className="mb-3 hidden font-[family-name:var(--font-display)] text-lg font-bold text-slate-900 dark:text-white md:block">
                            {t.caseStudies.steps[key]}
                          </h4>

                          {key === "architecture" ? (
                            <ul className="space-y-3 break-phone text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                              <li>
                                <span className="font-semibold text-brand dark:text-brand-light">
                                  {t.caseStudies.archLabels.fe}{" "}
                                </span>
                                {data.archFe}
                              </li>
                              <li>
                                <span className="font-semibold text-brand dark:text-brand-light">
                                  {t.caseStudies.archLabels.be}{" "}
                                </span>
                                {data.archBe}
                              </li>
                              <li>
                                <span className="font-semibold text-brand dark:text-brand-light">
                                  {t.caseStudies.archLabels.db}{" "}
                                </span>
                                {data.archDb}
                              </li>
                            </ul>
                          ) : (
                            <p className="break-phone text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                              {data[key]}
                            </p>
                          )}
                        </GlassCard>
                      </motion.li>
                    ))}
                  </ol>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
