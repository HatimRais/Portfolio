import { motion } from "framer-motion"
import { GlassCard } from "../ui/GlassCard"

function UIChromePreview({ previewFrom = "from-cyan-500/25", previewTo = "to-emerald-500/20" }) {
  return (
    <div
      className={`relative mb-5 overflow-hidden rounded-xl border border-cyan-500/20 bg-gradient-to-br ${previewFrom} ${previewTo} p-3 shadow-inner shadow-cyan-500/10 dark:border-cyan-400/15`}
    >
      <div className="mb-2 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-red-400/90" />
        <span className="h-2 w-2 rounded-full bg-amber-400/90" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/90" />
        <div className="ml-2 h-2 flex-1 rounded-full bg-white/40 dark:bg-slate-900/50" />
      </div>
      <div className="space-y-2 rounded-lg border border-white/30 bg-white/40 p-3 dark:border-white/10 dark:bg-slate-950/40">
        <div className="h-2 w-[66%] rounded-full bg-cyan-600/25 dark:bg-cyan-400/20" />
        <div className="grid grid-cols-3 gap-2">
          <div className="h-14 rounded-md bg-gradient-to-br from-cyan-500/20 to-emerald-500/15 dark:from-cyan-400/15 dark:to-emerald-500/10" />
          <div className="h-14 rounded-md bg-gradient-to-br from-emerald-500/15 to-teal-500/20 dark:from-emerald-400/10 dark:to-teal-400/15" />
          <div className="h-14 rounded-md bg-gradient-to-br from-teal-500/20 to-cyan-500/15 dark:from-teal-400/15 dark:to-cyan-400/10" />
        </div>
        <div className="h-2 w-full rounded-full bg-slate-300/50 dark:bg-slate-600/40" />
        <div className="h-2 w-[84%] rounded-full bg-slate-300/35 dark:bg-slate-600/30" />
      </div>
    </div>
  )
}

export function FullstackProjectCard({
  title,
  description,
  stack,
  github,
  demo,
  internalDemoId,
  previewFrom,
  previewTo,
  categoryLabel,
  stackLabel,
  githubLabel,
  demoLabel,
  tryDemoLabel,
  uiPreviewLabel,
}) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <GlassCard className="group relative h-full overflow-hidden border-cyan-500/15 p-6 transition duration-300 md:p-8 md:hover:border-cyan-400/35 md:hover:shadow-[0_0_48px_-12px_rgba(6,182,212,0.35)]">
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition duration-500 group-hover:scale-110 group-hover:bg-cyan-400/20 dark:bg-cyan-500/10" />
      {categoryLabel ? (
        <span className="mb-3 inline-flex rounded-full border border-cyan-500/25 bg-cyan-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cyan-800 dark:border-cyan-400/25 dark:bg-cyan-500/15 dark:text-cyan-200">
          {categoryLabel}
        </span>
      ) : null}
      <UIChromePreview previewFrom={previewFrom} previewTo={previewTo} />
      <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300/90">{uiPreviewLabel}</p>
      <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{description}</p>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">{stackLabel}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span
            key={tech}
            className="rounded-lg border border-cyan-500/20 bg-cyan-500/5 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-cyan-400/20 dark:bg-cyan-500/10 dark:text-cyan-100/90"
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
          className="inline-flex items-center justify-center rounded-xl border border-slate-300/80 bg-white/70 px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-cyan-400/60 hover:text-cyan-800 dark:border-white/15 dark:bg-slate-800/50 dark:text-slate-100 dark:hover:border-cyan-400/40 dark:hover:text-cyan-200"
        >
          {githubLabel}
        </motion.a>
        {internalDemoId ? (
          <motion.button
            type="button"
            onClick={() => scrollTo(internalDemoId)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 to-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-cyan-500/25 dark:from-cyan-500 dark:to-emerald-500"
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
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 to-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-cyan-500/25 dark:from-cyan-500 dark:to-emerald-500"
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
