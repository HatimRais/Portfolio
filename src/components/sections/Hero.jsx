import { motion } from "framer-motion"
import { useMemo } from "react"
import { useLanguage } from "../../context/LanguageContext"
import { useToast } from "../../context/ToastContext"
import { TypingText } from "../ui/TypingText"

export function Hero() {
  const { t, lang } = useLanguage()
  const { showToast } = useToast()

  const phrases = useMemo(
    () =>
      lang === "fr"
        ? [
            "Plateformes e-learning scalables",
            "APIs REST & expériences React",
            "Données & bases du machine learning",
          ]
        : [
            "Scalable e-learning platforms",
            "REST APIs & React experiences",
            "Data & machine learning foundations",
          ],
    [lang],
  )

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const onCvClick = (e) => {
    e.preventDefault()
    showToast(t.toast.cv)
    window.open("/cv.pdf", "_blank", "noopener,noreferrer")
  }

  return (
    <section
      id="home"
      className="relative flex min-h-dvh flex-col justify-center overflow-x-clip px-3 pb-[max(6rem,env(safe-area-inset-bottom))] pt-[max(5.5rem,env(safe-area-inset-top))] sm:px-4 sm:pb-24 sm:pt-28 md:px-6 md:pb-32 md:pt-32"
    >
      <div className="mx-auto w-full min-w-0 max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400"
        >
          {t.hero.greeting}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          className="font-[family-name:var(--font-display)] text-[1.75rem] font-extrabold leading-[1.08] tracking-tight text-slate-900 min-[360px]:text-3xl min-[400px]:text-4xl dark:text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Hatim Rais
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 max-w-3xl space-y-2"
        >
          <p className="text-lg font-semibold leading-snug text-slate-700 min-[400px]:text-xl dark:text-slate-200 md:text-2xl">
            {t.hero.title}
          </p>
          <p className="text-sm text-violet-600/90 min-[400px]:text-base dark:text-violet-400/90 md:text-lg">
            {t.hero.subtitle}
          </p>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-600 min-[400px]:text-base dark:text-slate-400 md:text-lg">
            {t.hero.tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-6 min-h-[2.25rem] min-w-0 max-w-full text-base min-[400px]:mt-8 min-[400px]:min-h-[2.5rem] min-[400px]:text-lg md:text-xl"
        >
          <TypingText key={lang} phrases={phrases} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-8 flex w-full min-w-0 flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap"
        >
          <motion.button
            type="button"
            onClick={() => scrollTo("projects")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="min-h-12 w-full rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/35 min-[420px]:w-auto min-[420px]:px-8 dark:from-violet-500 dark:via-fuchsia-500 dark:to-cyan-500"
          >
            {t.hero.ctaProjects}
          </motion.button>
          <motion.a
            href="/cv.pdf"
            onClick={onCvClick}
            whileHover={{ scale: 1.03, borderColor: "rgba(139, 92, 246, 0.45)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl border border-slate-300/90 bg-white/60 px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur-sm min-[420px]:w-auto min-[420px]:px-8 dark:border-white/15 dark:bg-slate-900/50 dark:text-slate-100"
          >
            <motion.span
              aria-hidden
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <DownloadIcon className="h-5 w-5 text-violet-600 dark:text-violet-400" />
            </motion.span>
            {t.hero.ctaCv}
          </motion.a>
        </motion.div>
      </div>

      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => scrollTo("about")}
        className="absolute bottom-[max(1.25rem,env(safe-area-inset-bottom))] left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-xs font-medium text-slate-500 dark:text-slate-400"
        aria-label={t.hero.scroll}
      >
        <span className="uppercase tracking-widest">{t.hero.scroll}</span>
        <motion.span
          className="h-8 w-5 rounded-full border-2 border-slate-400/50 dark:border-slate-500"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <span className="mx-auto mt-1.5 block h-1.5 w-1 rounded-full bg-violet-500" />
        </motion.span>
      </motion.button>
    </section>
  )
}

function DownloadIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  )
}
