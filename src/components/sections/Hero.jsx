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
            "DeepSleep AI — classement du sommeil (1er prix DL)",
            "SICAM — vision & patrimoine marocain",
            "Fullstack e-commerce & labellisation collaborative",
          ]
        : [
            "DeepSleep AI — sleep staging (1st prize DL)",
            "SICAM — vision & Moroccan heritage",
            "Fullstack e-commerce & collaborative labeling",
          ],
    [lang],
  )

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const onCvClick = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch("/cv.pdf", { method: "HEAD" })
      if (!res.ok) {
        showToast(t.toast.cvMissing)
        return
      }
      showToast(t.toast.cv)
      window.open("/cv.pdf", "_blank", "noopener,noreferrer")
    } catch {
      showToast(t.toast.cvMissing)
    }
  }

  return (
    <section
      id="home"
      className="section-anchor relative flex flex-col justify-start overflow-x-clip px-3 pb-[max(4.5rem,env(safe-area-inset-bottom))] pt-[max(5.75rem,calc(env(safe-area-inset-top)+4.25rem))] sm:min-h-dvh sm:justify-center sm:px-6 sm:pb-20 md:px-8 md:pb-28 md:pt-32"
    >
      <div className="mx-auto grid w-full min-w-0 max-w-6xl gap-6 sm:gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
        {/* Mobile / tablet portrait */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="mx-auto w-full max-w-[10.5rem] min-[380px]:max-w-[12rem] sm:max-w-[14rem] lg:hidden"
        >
          <div className="relative aspect-[4/5] overflow-hidden border border-ink/10 dark:border-paper/15">
            <img
              src="/photo_portfolio.jpeg"
              alt="Hatim Rais"
              className="h-full w-full object-cover object-[center_20%]"
              width={448}
              height={560}
              decoding="async"
            />
          </div>
        </motion.div>

        <div className="min-w-0 text-center sm:text-left">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mb-3 font-[family-name:var(--font-serif)] text-sm italic text-brand dark:text-brand-light sm:mb-4 sm:text-base"
          >
            {t.hero.greeting}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="font-[family-name:var(--font-display)] text-[clamp(2.35rem,11vw,6.5rem)] font-bold leading-[0.94] tracking-tight text-ink dark:text-paper"
          >
            Hatim
            <br />
            Rais
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
            className="mx-auto mt-5 max-w-xl space-y-2.5 border-ochre pl-0 sm:mx-0 sm:mt-6 sm:space-y-3 sm:border-l-2 sm:pl-5"
          >
            <p className="break-words text-balance text-base font-semibold leading-snug text-ink dark:text-paper/95 sm:text-lg md:text-xl">
              {t.hero.title}
            </p>
            <p className="text-sm text-brand dark:text-brand-light md:text-base">{t.hero.subtitle}</p>
            <p className="break-phone text-sm leading-relaxed text-ink/65 dark:text-paper/60 md:text-base">
              {t.hero.tagline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-5 min-h-[2.5rem] text-sm sm:mt-7 sm:min-h-[2rem] sm:text-base md:text-lg"
          >
            <TypingText key={lang} phrases={phrases} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42 }}
            className="mt-6 flex w-full flex-col gap-3 sm:mt-8 min-[480px]:flex-row min-[480px]:justify-center sm:min-[480px]:justify-start"
          >
            <button
              type="button"
              onClick={() => scrollTo("projects")}
              className="inline-flex min-h-12 w-full items-center justify-center bg-brand px-6 py-3.5 text-sm font-semibold tracking-wide text-white transition hover:bg-brand-light min-[480px]:w-auto dark:bg-brand-light dark:text-ink dark:hover:bg-brand"
            >
              {t.hero.ctaProjects}
            </button>
            <a
              href="/cv.pdf"
              onClick={onCvClick}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 border border-ink/20 bg-transparent px-6 py-3.5 text-sm font-semibold text-ink transition hover:border-brand hover:text-brand min-[480px]:w-auto dark:border-paper/25 dark:text-paper dark:hover:border-brand-light dark:hover:text-brand-light"
            >
              <DownloadIcon className="h-4 w-4 shrink-0 text-ochre" />
              {t.hero.ctaCv}
            </a>
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative hidden min-h-[28rem] lg:block"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-3 border border-ink/12 dark:border-paper/15" />
            <div className="absolute inset-6 overflow-hidden bg-mist dark:bg-white/5">
              <img
                src="/photo_portfolio.jpeg"
                alt="Hatim Rais"
                className="h-full w-full object-cover object-[center_18%] transition duration-700 hover:scale-[1.02]"
                width={720}
                height={900}
                decoding="async"
              />
            </div>
            <div className="absolute bottom-10 left-10 right-10 bg-paper/90 p-4 backdrop-blur-sm dark:bg-surface-dark/90">
              <p className="font-[family-name:var(--font-serif)] text-sm italic leading-snug text-ink/75 dark:text-paper/70">
                {lang === "fr"
                  ? "Licence d’Excellence · FSBM · mention Bien"
                  : "Licence d’Excellence · FSBM · Mention Bien"}
              </p>
              <div className="mt-2 flex flex-wrap gap-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/45 dark:text-paper/40">
                <span>ML / DL</span>
                <span>Full-Stack</span>
              </div>
            </div>
            <div className="absolute right-4 top-4 h-3 w-3 bg-ochre" aria-hidden />
          </div>
        </motion.aside>
      </div>

      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        onClick={() => scrollTo("about")}
        className="mt-10 hidden min-h-11 items-center justify-center gap-2 self-center px-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-ink/45 sm:mt-14 sm:inline-flex dark:text-paper/40 md:absolute md:bottom-[max(1rem,env(safe-area-inset-bottom))] md:left-1/2 md:mt-0 md:-translate-x-1/2"
        aria-label={t.hero.scroll}
      >
        <span className="h-px w-8 bg-ochre" />
        {t.hero.scroll}
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
