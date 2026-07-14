import { motion } from "framer-motion"
import { GlassCard } from "../ui/GlassCard"

function MiniSparkline() {
  const pts = [40, 65, 45, 78, 55, 88, 62]
  return (
    <div className="mb-4 flex h-16 items-end justify-between gap-1 rounded-lg border border-brand/20 bg-gradient-to-t from-brand/10 to-brand/5 px-2 pb-1 pt-2 dark:border-brand-light/20">
      {pts.map((h, i) => (
        <motion.div
          key={i}
          className="w-full max-w-[0.55rem] rounded-t-sm bg-gradient-to-t from-brand to-brand-light opacity-90 dark:from-brand-light dark:to-ochre"
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
    </div>
  )
}

export function AIProjectCard({
  title,
  description,
  stack,
  github,
  demo,
  internalDemoId,
  metrics = [],
  resultTags = [],
  categoryLabel,
  stackLabel,
  githubLabel,
  demoLabel,
  tryDemoLabel,
  keyMetricsLabel,
}) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <GlassCard className="group relative h-full min-w-0 overflow-hidden border-brand/20 p-4 transition duration-300 sm:p-6 md:p-8 md:hover:border-brand-light/40">
      <div className="pointer-events-none absolute -left-8 bottom-0 h-36 w-36 rounded-full bg-brand/15 blur-3xl transition duration-500 group-hover:scale-110 dark:bg-brand/20" />
      {categoryLabel ? (
        <span className="mb-3 inline-flex rounded-full border border-brand/30 bg-brand/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand dark:border-brand-light/30 dark:bg-brand/15 dark:text-brand-light">
          {categoryLabel}
        </span>
      ) : null}
      <MiniSparkline />
      <h3 className="break-words font-[family-name:var(--font-display)] text-lg font-bold text-slate-900 dark:text-white sm:text-xl">{title}</h3>
      <p className="mt-3 break-phone text-sm leading-relaxed text-slate-600 dark:text-slate-400">{description}</p>
      {metrics.length ? (
        <>
          <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-brand dark:text-brand-light">{keyMetricsLabel}</p>
          <dl className="mt-2 grid grid-cols-2 gap-2 min-[420px]:grid-cols-3">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-lg border border-brand/15 bg-brand/5 px-2 py-2 text-center dark:border-brand-light/15 dark:bg-brand/10"
              >
                <dt className="break-words text-[10px] font-medium uppercase leading-tight tracking-wide text-slate-500 dark:text-slate-400">{m.label}</dt>
                <dd className="mt-1 break-words font-[family-name:var(--font-display)] text-sm font-bold text-brand dark:text-brand-light">{m.value}</dd>
              </div>
            ))}
          </dl>
        </>
      ) : null}
      {resultTags.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {resultTags.map((tag) => (
            <span
              key={tag.label}
              className="rounded-md border border-brand/25 bg-brand/10 px-2 py-1 text-[11px] font-medium text-brand dark:border-brand-light/25 dark:bg-brand/15 dark:text-brand-light"
            >
              {tag.label}
            </span>
          ))}
        </div>
      ) : null}
      <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-brand dark:text-brand-light">{stackLabel}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span
            key={tech}
            className="rounded-lg border border-slate-200/80 bg-slate-50/90 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-brand-light/15 dark:bg-slate-800/70 dark:text-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-col gap-3 min-[380px]:flex-row min-[380px]:flex-wrap">
        <motion.a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-300/80 bg-white/70 px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-brand-light/60 hover:text-brand dark:border-white/15 dark:bg-slate-800/50 dark:text-slate-100 dark:hover:border-brand-light/40"
        >
          {githubLabel}
        </motion.a>
        {internalDemoId ? (
          <motion.button
            type="button"
            onClick={() => scrollTo(internalDemoId)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-gradient-to-r from-brand to-brand px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand/30 dark:from-brand-light dark:to-brand"
          >
            {tryDemoLabel}
          </motion.button>
        ) : demo ? (
          <motion.a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-gradient-to-r from-brand to-brand px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand/30 dark:from-brand-light dark:to-brand"
          >
            {demoLabel}
          </motion.a>
        ) : (
          <span className="inline-flex min-h-11 cursor-not-allowed items-center justify-center rounded-xl border border-dashed border-slate-300/80 px-4 py-2.5 text-sm text-slate-400 dark:border-white/15 dark:text-slate-500">
            {demoLabel}
          </span>
        )}
      </div>
    </GlassCard>
  )
}
