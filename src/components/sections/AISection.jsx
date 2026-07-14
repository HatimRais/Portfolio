import { motion, useInView } from "framer-motion"
import { useId, useRef } from "react"
import { useLanguage } from "../../context/LanguageContext"
import { GlassCard } from "../ui/GlassCard"
import { SectionHeading } from "../ui/SectionHeading"

const bars = [
  { h: 62, delay: 0, color: "from-brand to-brand-light", kind: "train" },
  { h: 78, delay: 0.08, color: "from-brand to-brand-light", kind: "eval" },
  { h: 55, delay: 0.16, color: "from-brand to-ochre", kind: "train" },
  { h: 88, delay: 0.24, color: "from-brand to-blue-500", kind: "eval" },
  { h: 48, delay: 0.32, color: "from-ochre to-brand", kind: "train" },
  { h: 70, delay: 0.4, color: "from-blue-500 to-brand", kind: "eval" },
]

const valCurvePath = "M 20 34 L 72 30 L 124 26 L 176 21 L 228 16 L 280 11"
const valAreaPath = "M 20 48 L 20 34 L 72 30 L 124 26 L 176 21 L 228 16 L 280 11 L 280 48 Z"

export function AISection() {
  const { t } = useLanguage()
  const chartRef = useRef(null)
  const inView = useInView(chartRef, { once: true, margin: "-40px" })
  const rawId = useId().replace(/:/g, "")
  const gradLineId = `ai-line-${rawId}`
  const gradAreaId = `ai-area-${rawId}`

  const periods = t.aiSection.activityPeriods
  const periodsShort = t.aiSection.activityPeriodsShort
  const weekRows = t.aiSection.activityWeekRows
  const steps = t.aiSection.activitySteps

  const cards = [
    { title: t.aiSection.ml, desc: t.aiSection.mlDesc },
    { title: t.aiSection.data, desc: t.aiSection.dataDesc },
    { title: t.aiSection.viz, desc: t.aiSection.vizDesc },
  ]

  const useCases = t.aiSection.useCases

  return (
    <section className="px-3 py-16 sm:px-4 sm:py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={t.aiSection.subtitle} title={t.aiSection.title} />

        <div className="grid items-stretch gap-6 sm:gap-8 lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="h-full border-brand/15 p-5 sm:p-8 md:p-10">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">{t.aiSection.lead}</p>
              <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4">
                {cards.map((c, i) => (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="rounded-xl border border-brand/20 bg-gradient-to-br from-brand/10 to-brand/5 p-4 dark:border-brand-light/15"
                  >
                    <h4 className="font-[family-name:var(--font-display)] text-sm font-bold text-slate-900 dark:text-white">
                      {c.title}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">{c.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2">
                <div className="rounded-xl border border-brand/20 bg-brand/5 p-4 dark:border-brand-light/20 dark:bg-brand/10">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand dark:text-brand-light">
                    {t.aiSection.python.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{t.aiSection.python.body}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {t.aiSection.python.badges.map((b) => (
                      <span
                        key={b}
                        className="rounded-md border border-brand-light/25 bg-brand/10 px-2 py-0.5 text-[11px] font-medium text-brand dark:text-brand-light"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-brand/20 bg-gradient-to-br from-brand/8 to-blue-500/5 p-4 dark:border-brand-light/15">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand dark:text-brand-light">
                    {t.aiSection.useCasesTitle}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    {useCases.map((line) => (
                      <li key={line} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand dark:bg-brand-light" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
            <GlassCard className="relative h-full min-h-0 overflow-hidden border-brand/15 p-5 sm:min-h-[360px] sm:p-8 md:min-h-[380px] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand dark:text-brand-light">
                {t.aiSection.activity}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{t.aiSection.activityLead}</p>

              <div className="mt-4 rounded-xl border border-brand/15 bg-brand/[0.06] p-3 dark:border-brand-light/15 dark:bg-brand/10">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-brand dark:text-brand-light">
                  {t.aiSection.activityPipelineTitle}
                </p>
                <div className="mt-3 flex snap-x snap-mandatory gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:justify-between sm:overflow-visible">
                  {steps.map((label, i) => (
                    <div key={label} className="flex shrink-0 snap-center items-center gap-2 sm:shrink">
                      <span className="whitespace-nowrap rounded-lg border border-brand-light/30 bg-white/80 px-2.5 py-1.5 text-[11px] font-semibold text-brand shadow-sm dark:border-brand/25 dark:bg-slate-900/80 dark:text-brand-light">
                        {label}
                      </span>
                      {i < steps.length - 1 ? (
                        <span
                          className="hidden h-px w-4 shrink-0 bg-gradient-to-r from-brand-light/50 to-brand-light/50 sm:block sm:w-6 md:w-10"
                          aria-hidden
                        />
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-2 text-[11px] font-medium text-slate-600 sm:mt-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 dark:text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-sm bg-gradient-to-br from-brand to-ochre shadow-sm shadow-brand/30" />
                  {t.aiSection.activityTrain}
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-sm bg-gradient-to-br from-brand to-blue-500 shadow-sm shadow-brand/30" />
                  {t.aiSection.activityVal}
                </span>
                <span className="text-slate-500 dark:text-slate-500">· {t.aiSection.activityBarsLegend}</span>
              </div>

              <div className="relative mt-4 rounded-xl border border-brand/10 bg-slate-50/50 p-2.5 sm:mt-5 sm:p-3 dark:border-white/5 dark:bg-slate-950/40">
                <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand dark:text-brand-light">
                  {t.aiSection.activityCurveLabel}
                </p>
                <p className="mb-2 text-[11px] leading-snug text-slate-500 dark:text-slate-500">{t.aiSection.activityCurveCaption}</p>
                <svg viewBox="0 0 300 48" className="h-12 w-full min-h-[3rem]" preserveAspectRatio="none" aria-hidden>
                  <defs>
                    <linearGradient id={gradAreaId} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgb(139 92 246)" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="rgb(99 102 241)" stopOpacity="0.02" />
                    </linearGradient>
                    <linearGradient id={gradLineId} x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="rgb(139 92 246)" />
                      <stop offset="100%" stopColor="rgb(99 102 241)" />
                    </linearGradient>
                  </defs>
                  <line x1="16" y1="40" x2="284" y2="40" stroke="currentColor" strokeWidth="1" className="text-slate-400/25" />
                  <motion.path
                    d={valAreaPath}
                    fill={`url(#${gradAreaId})`}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  />
                  <motion.path
                    d={valCurvePath}
                    fill="none"
                    stroke={`url(#${gradLineId})`}
                    strokeWidth="2.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>

              <div className="mt-4 flex min-h-[11rem] gap-1.5 sm:mt-5 sm:min-h-[12.5rem] sm:gap-2 md:min-h-[13rem]">
                <div className="flex w-9 shrink-0 flex-col justify-between pb-7 text-right text-[9px] font-medium uppercase leading-none tracking-tight text-slate-400 sm:w-10 sm:pb-8 sm:text-[10px] dark:text-slate-500">
                  <span className="translate-y-0.5">{t.aiSection.activityAxisHigh}</span>
                  <span>{t.aiSection.activityAxisLow}</span>
                </div>
                <div className="flex min-w-0 flex-1 items-end justify-between gap-0.5 sm:gap-1.5">
                  {bars.map((b, i) => (
                    <div key={i} className="flex min-w-0 max-w-[20%] flex-1 flex-col items-center gap-1.5 sm:max-w-none sm:gap-2">
                      <div className="flex h-36 w-full max-w-[2.5rem] flex-col justify-end sm:h-40 sm:max-w-[2.75rem] md:h-44">
                        <motion.div
                          className={`w-full rounded-t-md bg-gradient-to-t ${b.color} shadow-[0_0_14px_-4px_rgba(99,102,241,0.45)] sm:rounded-t-lg`}
                          initial={{ height: 0 }}
                          animate={inView ? { height: `${b.h}%` } : { height: 0 }}
                          transition={{ duration: 0.85, delay: b.delay, ease: [0.22, 1, 0.36, 1] }}
                          title={b.kind === "train" ? t.aiSection.activityTrain : t.aiSection.activityVal}
                        />
                      </div>
                      <span className="w-full max-w-[3.25rem] text-center text-[9px] font-semibold leading-tight text-slate-500 sm:text-[10px] dark:text-slate-400">
                        <span className="sm:hidden">{periodsShort[i]}</span>
                        <span className="hidden sm:inline">{periods[i]}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-2 text-center text-[10px] font-medium text-slate-400 dark:text-slate-500">{t.aiSection.activitySnapshotMeta}</p>
              <p className="mt-2 text-[11px] leading-relaxed text-slate-500 dark:text-slate-500">{t.aiSection.activityFootnote}</p>

              <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200/80 dark:border-white/10">
                <table className="w-full min-w-[260px] border-collapse text-left text-[11px] sm:text-xs">
                  <caption className="border-b border-slate-200/80 px-3 py-2 text-left text-[10px] font-semibold uppercase tracking-wider text-brand dark:border-white/10 dark:text-brand-light">
                    {t.aiSection.activityWeekTitle}
                  </caption>
                  <thead>
                    <tr className="border-b border-slate-200/60 bg-slate-50/90 text-slate-600 dark:border-white/10 dark:bg-slate-900/50 dark:text-slate-400">
                      <th className="px-2 py-2 pl-3 font-semibold sm:px-3">{t.aiSection.activityWeekColDay}</th>
                      <th className="px-2 py-2 font-semibold sm:px-3">{t.aiSection.activityWeekColTrain}</th>
                      <th className="px-2 py-2 pr-3 font-semibold sm:px-3">{t.aiSection.activityWeekColEval}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {weekRows.map((row, i) => (
                      <tr
                        key={`${i}-${periods[i]}`}
                        className="border-b border-slate-100/90 odd:bg-white/50 even:bg-slate-50/40 dark:border-white/5 dark:odd:bg-transparent dark:even:bg-slate-900/30"
                      >
                        <td className="px-2 py-1.5 pl-3 font-medium text-slate-700 sm:px-3 dark:text-slate-200">{periods[i]}</td>
                        <td className="px-2 py-1.5 font-[family-name:var(--font-display)] text-brand sm:px-3 dark:text-brand-light">
                          {row.train}
                        </td>
                        <td className="px-2 py-1.5 pr-3 font-[family-name:var(--font-display)] text-brand sm:px-3 dark:text-brand-light">
                          {row.ev}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-2 border-t border-slate-200/60 pt-5 min-[400px]:grid-cols-3 dark:border-white/10 sm:mt-6 sm:pt-6">
                {t.aiSection.signalBlocks.map((blk, i) => (
                  <motion.div
                    key={blk.label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.08 }}
                    className="rounded-lg border border-brand/15 bg-brand/5 px-2 py-3 text-center dark:border-brand-light/15 dark:bg-brand/10"
                  >
                    <p className="text-[10px] font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      {blk.label}
                    </p>
                    <p className="mt-1 font-[family-name:var(--font-display)] text-base font-bold text-brand sm:text-lg dark:text-brand-light">
                      {blk.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
