import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "../../context/LanguageContext"
import { useTheme } from "../../context/ThemeContext"

const links = [
  { id: "home", key: "home" },
  { id: "about", key: "about" },
  { id: "skills", key: "skills" },
  { id: "projects", key: "projects" },
  { id: "case-studies", key: "caseStudies" },
  { id: "metrics", key: "metrics" },
  { id: "how-i-work", key: "howIWork" },
  { id: "engineering", key: "engineering" },
  { id: "learning", key: "learning" },
  { id: "ai", key: "ai" },
  { id: "ai-action", key: "aiAction" },
  { id: "contact", key: "contact" },
]

export function Navbar() {
  const { t, lang, setLang } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    setOpen(false)
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const linkClass =
    "shrink-0 rounded-lg px-2 py-2 text-[11px] font-medium text-slate-600 transition hover:bg-violet-500/10 hover:text-violet-700 dark:text-slate-300 dark:hover:bg-violet-500/15 dark:hover:text-violet-300 lg:px-2.5 lg:text-xs"

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-6"
    >
      <nav
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200/70 bg-white/75 px-3 py-3 shadow-lg shadow-violet-500/5 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70 dark:shadow-violet-500/10 md:flex-nowrap md:px-4"
        aria-label="Main"
      >
        <button
          type="button"
          onClick={() => scrollTo("home")}
          className="shrink-0 font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-slate-900 dark:text-white"
        >
          <span className="bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-cyan-400">
            Hatim Rais
          </span>
        </button>

        <ul
          className="hidden max-h-[2.75rem] min-w-0 flex-1 list-none flex-row flex-wrap justify-center gap-x-0.5 gap-y-0 overflow-hidden md:flex lg:max-h-none lg:flex-nowrap lg:justify-end lg:overflow-x-auto lg:[scrollbar-width:none] lg:[&::-webkit-scrollbar]:hidden"
        >
          {links.map(({ id, key }) => (
            <li key={id} className="shrink-0">
              <button type="button" onClick={() => scrollTo(id)} className={linkClass}>
                {t.nav[key]}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <div
            className="flex rounded-xl border border-slate-200/80 bg-slate-100/80 p-0.5 dark:border-white/10 dark:bg-slate-800/80"
            role="group"
            aria-label="Language"
          >
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition ${
                lang === "en"
                  ? "bg-white text-violet-700 shadow-sm dark:bg-slate-700 dark:text-violet-300"
                  : "text-slate-500 dark:text-slate-400"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("fr")}
              className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition ${
                lang === "fr"
                  ? "bg-white text-violet-700 shadow-sm dark:bg-slate-700 dark:text-violet-300"
                  : "text-slate-500 dark:text-slate-400"
              }`}
            >
              FR
            </button>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-slate-100/80 text-slate-700 transition hover:border-violet-400/50 hover:text-violet-700 dark:border-white/10 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:text-violet-300"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </button>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-slate-100/80 md:hidden dark:border-white/10 dark:bg-slate-800/80"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label="Menu"
          >
            <span className="sr-only">Menu</span>
            <div className="flex w-5 flex-col gap-1">
              <span
                className={`h-0.5 rounded-full bg-slate-700 transition dark:bg-slate-200 ${open ? "translate-y-1.5 rotate-45" : ""}`}
              />
              <span
                className={`h-0.5 rounded-full bg-slate-700 transition dark:bg-slate-200 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 rounded-full bg-slate-700 transition dark:bg-slate-200 ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mx-auto mt-2 max-h-[70vh] max-w-6xl overflow-y-auto md:hidden"
          >
            <ul className="rounded-2xl border border-slate-200/70 bg-white/90 p-3 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/90">
              {links.map(({ id, key }) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(id)}
                    className="w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-700 hover:bg-violet-500/10 dark:text-slate-200"
                  >
                    {t.nav[key]}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

function SunIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  )
}

function MoonIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  )
}
