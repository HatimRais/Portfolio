import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useLanguage } from "../../context/LanguageContext"
import { classifySpamMessage } from "../../utils/spamClassifier"
import { GlassCard } from "../ui/GlassCard"
import { SectionHeading } from "../ui/SectionHeading"

export function AIInAction() {
  const { t } = useLanguage()
  const [text, setText] = useState("")
  const [result, setResult] = useState(null)
  const [busy, setBusy] = useState(false)

  const runAnalyze = () => {
    setBusy(true)
    setResult(null)
    window.setTimeout(() => {
      const r = classifySpamMessage(text)
      setResult(r)
      setBusy(false)
    }, 520)
  }

  return (
    <section
      id="ai-action"
      className="section-anchor border-t border-slate-200/60 px-3 pb-16 pt-12 dark:border-white/10 sm:px-4 sm:pb-20 sm:pt-16 md:px-6 md:pb-28 md:pt-20"
      aria-label={t.aiAction.title}
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={t.aiAction.subtitle} title={t.aiAction.title} />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GlassCard className="mx-auto max-w-xl p-6 md:p-8">
            <p className="mb-4 text-center text-sm text-slate-600 dark:text-slate-400">{t.aiAction.hint}</p>
            <textarea
              value={text}
              onChange={(e) => {
                setText(e.target.value)
                setResult(null)
              }}
              rows={4}
              placeholder={t.aiAction.placeholder}
              className="w-full resize-y rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3 text-base text-slate-900 outline-none ring-brand/25 transition focus:border-brand focus:ring-2 sm:text-sm dark:border-white/10 dark:bg-slate-800/60 dark:text-white"
            />
            <motion.button
              type="button"
              disabled={busy || text.trim().length < 2}
              onClick={runAnalyze}
              whileHover={{ scale: busy ? 1 : 1.02 }}
              whileTap={{ scale: busy ? 1 : 0.98 }}
              className="mt-4 min-h-12 w-full rounded-xl bg-gradient-to-r from-brand to-ochre py-3 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition disabled:cursor-not-allowed disabled:opacity-50 dark:from-brand-light dark:to-ochre"
            >
              {busy ? t.aiAction.analyzing : t.aiAction.analyze}
            </motion.button>

            <AnimatePresence mode="wait">
              {result?.label && (
                <motion.div
                  key={result.label}
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  className="mt-6 flex flex-col items-center gap-2"
                >
                  <span
                    className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-bold uppercase tracking-wider shadow-lg ${
                      result.label === "spam"
                        ? "border-rose-500/40 bg-rose-500/15 text-rose-700 shadow-rose-500/10 dark:text-rose-300"
                        : "border-emerald-500/40 bg-emerald-500/15 text-emerald-800 shadow-emerald-500/10 dark:text-emerald-300"
                    }`}
                  >
                    {result.label === "spam" ? t.aiAction.spam : t.aiAction.notSpam}
                  </span>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t.aiAction.confidence}{" "}
                    {Math.round((result.confidence || 0) * 100)}%
                  </p>
                  <p className="text-center text-[11px] text-slate-400 dark:text-slate-500">{t.aiAction.disclaimer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
