import { motion } from "framer-motion"
import { GlassCard } from "../ui/GlassCard"

function MiniSparkline() {
  const pts = [40, 65, 45, 78, 55, 88, 62]
  return (
    <div className="mb-4 flex h-16 items-end justify-between gap-1 rounded-lg border border-violet-500/20 bg-gradient-to-t from-violet-500/10 to-indigo-500/5 px-2 pb-1 pt-2 dark:border-violet-400/20">
      {pts.map((h, i) => (
        <motion.div
          key={i}
          className="w-full max-w-[0.55rem] rounded-t-sm bg-gradient-to-t from-indigo-600 to-violet-400 opacity-90 dark:from-indigo-400 dark:to-fuchsia-400"
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
    <GlassCard className="group relative h-full overflow-hidden border-violet-500/20 p-6 transition duration-300 md:p-8 md:hover:border-violet-400/40 md:hover:shadow-[0_0_48px_-12px_rgba(139,92,246,0.45)]">
      <div className="pointer-events-none absolute -left-8 bottom-0 h-36 w-36 rounded-full bg-indigo-600/15 blur-3xl transition duration-500 group-hover:scale-110 dark:bg-violet-600/20" />
      {categoryLabel ? (
        <span className="mb-3 inline-flex rounded-full border border-violet-500/30 bg-violet-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-violet-800 dark:border-violet-400/30 dark:bg-violet-500/15 dark:text-violet-100">
          {categoryLabel}
        </span>
      ) : null}
      <MiniSparkline />
      <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{description}</p>
      {metrics.length ? (
        <>
          <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">{keyMetricsLabel}</p>
          <dl className="mt-2 grid grid-cols-3 gap-2">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-lg border border-violet-500/15 bg-violet-500/5 px-2 py-2 text-center dark:border-violet-400/15 dark:bg-violet-500/10"
              >
                <dt className="text-[10px] font-medium uppercase leading-tight tracking-wide text-slate-500 dark:text-slate-400">{m.label}</dt>
                <dd className="mt-1 font-[family-name:var(--font-display)] text-sm font-bold text-violet-700 dark:text-violet-200">{m.value}</dd>
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
              className="rounded-md border border-indigo-500/25 bg-indigo-500/10 px-2 py-1 text-[11px] font-medium text-indigo-900 dark:border-indigo-400/25 dark:bg-indigo-500/15 dark:text-indigo-100"
            >
              {tag.label}
            </span>
          ))}
        </div>
      ) : null}
      <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400">{stackLabel}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span
            key={tech}
            className="rounded-lg border border-slate-200/80 bg-slate-50/90 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-violet-400/15 dark:bg-slate-800/70 dark:text-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <motion.a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center rounded-xl border border-slate-300/80 bg-white/70 px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-violet-400/60 hover:text-violet-800 dark:border-white/15 dark:bg-slate-800/50 dark:text-slate-100 dark:hover:border-violet-400/40"
        >
          {githubLabel}
        </motion.a>
        {internalDemoId ? (
          <motion.button
            type="button"
            onClick={() => scrollTo(internalDemoId)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-violet-500/30 dark:from-violet-500 dark:to-indigo-500"
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
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-violet-500/30 dark:from-violet-500 dark:to-indigo-500"
          >
            {demoLabel}
          </motion.a>
        ) : (
          <span className="inline-flex cursor-not-allowed items-center rounded-xl border border-dashed border-slate-300/80 px-4 py-2.5 text-sm text-slate-400 dark:border-white/15 dark:text-slate-500">
            {demoLabel}
          </span>
        )}
      </div>
    </GlassCard>
  )
}
