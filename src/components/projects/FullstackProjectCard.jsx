import { motion } from "framer-motion"
import { GlassCard } from "../ui/GlassCard"

function UIChromePreview({ previewFrom = "from-brand-light/25", previewTo = "to-emerald-500/20" }) {
  return (
    <div
      className={`relative mb-5 overflow-hidden rounded-xl border border-brand-light/20 bg-gradient-to-br ${previewFrom} ${previewTo} p-3 shadow-inner shadow-brand-light/10 dark:border-brand-light/15`}
    >
      <div className="mb-2 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-red-400/90" />
        <span className="h-2 w-2 rounded-full bg-amber-400/90" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/90" />
        <div className="ml-2 h-2 flex-1 rounded-full bg-white/40 dark:bg-slate-900/50" />
      </div>
      <div className="space-y-2 rounded-lg border border-white/30 bg-white/40 p-3 dark:border-white/10 dark:bg-slate-950/40">
        <div className="h-2 w-[66%] rounded-full bg-brand-light/25 dark:bg-brand-light/20" />
        <div className="grid grid-cols-3 gap-2">
          <div className="h-14 rounded-md bg-gradient-to-br from-brand-light/20 to-emerald-500/15 dark:from-brand-light/15 dark:to-emerald-500/10" />
          <div className="h-14 rounded-md bg-gradient-to-br from-emerald-500/15 to-teal-500/20 dark:from-emerald-400/10 dark:to-teal-400/15" />
          <div className="h-14 rounded-md bg-gradient-to-br from-teal-500/20 to-brand-light/15 dark:from-teal-400/15 dark:to-brand-light/10" />
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
    <GlassCard className="group relative h-full min-w-0 overflow-hidden border-brand-light/15 p-4 transition duration-300 sm:p-6 md:p-8 md:hover:border-brand-light/35">
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-light/10 blur-3xl transition duration-500 group-hover:scale-110 group-hover:bg-brand-light/20 dark:bg-brand-light/10" />
      {categoryLabel ? (
        <span className="mb-3 inline-flex rounded-full border border-brand-light/25 bg-brand-light/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand dark:border-brand-light/25 dark:bg-brand-light/15 dark:text-brand-light">
          {categoryLabel}
        </span>
      ) : null}
      <UIChromePreview previewFrom={previewFrom} previewTo={previewTo} />
      <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand dark:text-brand-light/90">{uiPreviewLabel}</p>
      <h3 className="break-words font-[family-name:var(--font-display)] text-lg font-bold text-slate-900 dark:text-white sm:text-xl">{title}</h3>
      <p className="mt-3 break-phone text-sm leading-relaxed text-slate-600 dark:text-slate-400">{description}</p>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand dark:text-brand-light">{stackLabel}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span
            key={tech}
            className="rounded-lg border border-brand-light/20 bg-brand-light/5 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-brand-light/20 dark:bg-brand-light/10 dark:text-brand-light/90"
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
          className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-300/80 bg-white/70 px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-brand-light/60 hover:text-brand dark:border-white/15 dark:bg-slate-800/50 dark:text-slate-100 dark:hover:border-brand-light/40 dark:hover:text-brand-light"
        >
          {githubLabel}
        </motion.a>
        {internalDemoId ? (
          <motion.button
            type="button"
            onClick={() => scrollTo(internalDemoId)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-gradient-to-r from-brand-light to-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-light/25 dark:from-brand-light dark:to-emerald-500"
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
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-gradient-to-r from-brand-light to-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-light/25 dark:from-brand-light dark:to-emerald-500"
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
