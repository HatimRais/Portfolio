import { useCallback, useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "../../context/LanguageContext"
import { useTheme } from "../../context/ThemeContext"

const profileLinks = [
  { id: "about", key: "about" },
  { id: "expertise", key: "expertise" },
  { id: "skills", key: "skills" },
  { id: "fullstack", key: "fullstack" },
]

const moreLinks = [
  { id: "case-studies", key: "caseStudies" },
  { id: "metrics", key: "metrics" },
  { id: "how-i-work", key: "howIWork" },
  { id: "engineering", key: "engineering" },
  { id: "learning", key: "learning" },
]

export function Navbar() {
  const { t, lang, setLang } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileGroup, setMobileGroup] = useState(null)
  const [openDropdown, setOpenDropdown] = useState(null)
  const navRef = useRef(null)

  const scrollTo = useCallback((id) => {
    setMobileOpen(false)
    setMobileGroup(null)
    setOpenDropdown(null)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [])

  useEffect(() => {
    const onDoc = (e) => {
      if (openDropdown && navRef.current && !navRef.current.contains(e.target)) setOpenDropdown(null)
    }
    document.addEventListener("mousedown", onDoc)
    return () => document.removeEventListener("mousedown", onDoc)
  }, [openDropdown])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpenDropdown(null)
        setMobileOpen(false)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [mobileOpen])

  const topLinkClass =
    "inline-flex shrink-0 items-center gap-0.5 rounded-lg px-2 py-2 text-[11px] font-medium text-slate-600 transition hover:bg-brand/10 hover:text-brand dark:text-slate-300 dark:hover:bg-brand/15 dark:hover:text-brand-light lg:px-2.5 lg:text-xs"

  const toggleDropdown = (id) => {
    setOpenDropdown((cur) => (cur === id ? null : id))
  }

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="fixed left-0 right-0 top-0 z-50 safe-px px-2 pt-[max(0.5rem,env(safe-area-inset-top))] sm:px-4 sm:pt-3 md:px-6"
    >
      <nav
        ref={navRef}
        className="mx-auto flex min-w-0 max-w-6xl flex-nowrap items-center justify-between gap-2 border-b border-ink/10 bg-paper/95 px-2 py-2.5 backdrop-blur-md dark:border-paper/10 dark:bg-surface-dark/95 sm:gap-3 sm:px-3 sm:py-3 md:px-4"
        aria-label="Main"
      >
        <button
          type="button"
          onClick={() => scrollTo("home")}
          className="min-w-0 max-w-[42vw] truncate shrink font-[family-name:var(--font-display)] text-base font-bold tracking-tight text-ink sm:max-w-none sm:text-lg dark:text-paper"
        >
          Hatim Rais
        </button>

        <ul className="hidden list-none flex-row flex-wrap items-center justify-end gap-x-0.5 md:flex lg:flex-nowrap">
          <li className="shrink-0">
            <button type="button" onClick={() => scrollTo("home")} className={topLinkClass}>
              {t.nav.home}
            </button>
          </li>
          <li className="relative shrink-0">
            <button
              type="button"
              className={`${topLinkClass} ${openDropdown === "profile" ? "bg-brand/10 text-brand dark:text-brand-light" : ""}`}
              aria-expanded={openDropdown === "profile"}
              aria-haspopup="true"
              onClick={() => toggleDropdown("profile")}
            >
              {t.nav.menuProfile}
              <Chevron className={`h-3.5 w-3.5 opacity-60 transition ${openDropdown === "profile" ? "rotate-180" : ""}`} />
            </button>
            <DropdownPanel open={openDropdown === "profile"} items={profileLinks} t={t} onPick={scrollTo} />
          </li>
          <li className="shrink-0">
            <button type="button" onClick={() => scrollTo("projects")} className={topLinkClass}>
              {t.nav.projects}
            </button>
          </li>
          <li className="relative shrink-0">
            <button
              type="button"
              className={`${topLinkClass} ${openDropdown === "more" ? "bg-brand/10 text-brand dark:text-brand-light" : ""}`}
              aria-expanded={openDropdown === "more"}
              aria-haspopup="true"
              onClick={() => toggleDropdown("more")}
            >
              {t.nav.menuMore}
              <Chevron className={`h-3.5 w-3.5 opacity-60 transition ${openDropdown === "more" ? "rotate-180" : ""}`} />
            </button>
            <DropdownPanel open={openDropdown === "more"} items={moreLinks} t={t} onPick={scrollTo} />
          </li>
          <li className="shrink-0">
            <button type="button" onClick={() => scrollTo("ai")} className={topLinkClass}>
              {t.nav.ai}
            </button>
          </li>
          <li className="shrink-0">
            <button type="button" onClick={() => scrollTo("contact")} className={topLinkClass}>
              {t.nav.contact}
            </button>
          </li>
        </ul>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <div
            className="flex shrink-0 rounded-lg border border-slate-200/80 bg-slate-100/80 p-0.5 sm:rounded-xl dark:border-white/10 dark:bg-slate-800/80"
            role="group"
            aria-label="Language"
          >
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`min-h-11 min-w-11 rounded-md px-3 py-2 text-xs font-semibold transition sm:rounded-lg ${
                lang === "en"
                  ? "bg-white text-brand shadow-sm dark:bg-slate-700 dark:text-brand-light"
                  : "text-slate-500 dark:text-slate-400"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("fr")}
              className={`min-h-11 min-w-11 rounded-md px-3 py-2 text-xs font-semibold transition sm:rounded-lg ${
                lang === "fr"
                  ? "bg-white text-brand shadow-sm dark:bg-slate-700 dark:text-brand-light"
                  : "text-slate-500 dark:text-slate-400"
              }`}
            >
              FR
            </button>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-200/80 bg-slate-100/80 text-slate-700 transition hover:border-brand-light/50 hover:text-brand dark:border-white/10 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:text-brand-light"
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
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-200/80 bg-slate-100/80 md:hidden dark:border-white/10 dark:bg-slate-800/80"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-label="Menu"
          >
            <span className="sr-only">Menu</span>
            <div className="flex w-5 flex-col gap-1">
              <span
                className={`h-0.5 rounded-full bg-slate-700 transition dark:bg-slate-200 ${mobileOpen ? "translate-y-1.5 rotate-45" : ""}`}
              />
              <span
                className={`h-0.5 rounded-full bg-slate-700 transition dark:bg-slate-200 ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 rounded-full bg-slate-700 transition dark:bg-slate-200 ${mobileOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[45] bg-slate-950/50 backdrop-blur-[2px] md:hidden"
            aria-hidden
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ type: "spring", stiffness: 420, damping: 32 }}
            className="fixed left-3 right-3 z-[55] max-h-[min(calc(100dvh-5.5rem-env(safe-area-inset-top)-env(safe-area-inset-bottom)),85dvh)] overflow-y-auto overscroll-contain rounded-2xl border border-slate-200/80 bg-white/98 shadow-2xl dark:border-white/10 dark:bg-slate-950/98 md:hidden"
            style={{ top: "max(5rem, calc(env(safe-area-inset-top) + 4rem))" }}
            role="dialog"
            aria-modal="true"
            aria-label={t.nav.mobileMenuTitle}
          >
            <div className="safe-pb p-2 sm:p-3">
              <button
                type="button"
                onClick={() => scrollTo("home")}
                className="min-h-12 w-full rounded-xl px-4 py-3.5 text-left text-sm font-medium text-slate-700 hover:bg-brand/10 dark:text-slate-200"
              >
                {t.nav.home}
              </button>

              <MobileGroup
                title={t.nav.menuProfile}
                open={mobileGroup === "profile"}
                onToggle={() => setMobileGroup((g) => (g === "profile" ? null : "profile"))}
                links={profileLinks}
                t={t}
                onPick={scrollTo}
              />
              <button
                type="button"
                onClick={() => scrollTo("projects")}
                className="min-h-12 w-full rounded-xl px-4 py-3.5 text-left text-sm font-medium text-slate-700 hover:bg-brand/10 dark:text-slate-200"
              >
                {t.nav.projects}
              </button>
              <MobileGroup
                title={t.nav.menuMore}
                open={mobileGroup === "more"}
                onToggle={() => setMobileGroup((g) => (g === "more" ? null : "more"))}
                links={moreLinks}
                t={t}
                onPick={scrollTo}
              />
              <button
                type="button"
                onClick={() => scrollTo("ai")}
                className="min-h-12 w-full rounded-xl px-4 py-3.5 text-left text-sm font-medium text-slate-700 hover:bg-brand/10 dark:text-slate-200"
              >
                {t.nav.ai}
              </button>
              <p className="px-4 pb-1 pt-2 text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
                {t.nav.mobileAiHint}
              </p>
              <button
                type="button"
                onClick={() => scrollTo("ai-action")}
                className="w-full rounded-xl px-4 py-2.5 pl-8 text-left text-sm text-slate-600 hover:bg-brand/10 dark:text-slate-300"
              >
                {t.nav.aiAction}
              </button>
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="min-h-12 w-full rounded-xl px-4 py-3.5 text-left text-sm font-medium text-slate-700 hover:bg-brand/10 dark:text-slate-200"
              >
                {t.nav.contact}
              </button>
              <p className="border-t border-slate-200/80 px-4 py-3 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400">
                {t.nav.paletteHint}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

function DropdownPanel({ open, items, t, onPick }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.15 }}
          className="absolute left-0 top-full z-[60] mt-1 min-w-[12.5rem] rounded-xl border border-slate-200/90 bg-white/95 py-1 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/95"
          role="menu"
        >
          {items.map(({ id, key }) => (
            <button
              key={id}
              type="button"
              role="menuitem"
              className="block w-full px-3 py-2 text-left text-xs font-medium text-slate-700 hover:bg-brand/10 dark:text-slate-200"
              onClick={() => onPick(id)}
            >
              {t.nav[key]}
            </button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function MobileGroup({ title, open, onToggle, links, t, onPick }) {
  return (
    <div className="border-t border-slate-200/60 dark:border-white/10">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-700 hover:bg-brand/10 dark:text-slate-200"
        aria-expanded={open}
      >
        {title}
        <Chevron className={`h-4 w-4 shrink-0 opacity-50 transition ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <ul className="space-y-0.5 pb-2 pl-2">
              {links.map(({ id, key }) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => onPick(id)}
                    className="w-full rounded-lg px-6 py-2.5 text-left text-sm text-slate-600 hover:bg-brand/10 dark:text-slate-300"
                  >
                    {t.nav[key]}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function Chevron({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
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
