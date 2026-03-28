import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useLanguage } from "../../context/LanguageContext"
import { useTheme } from "../../context/ThemeContext"

function isTypingTarget(el) {
  if (!el || !(el instanceof HTMLElement)) return false
  const tag = el.tagName
  return tag === "INPUT" || tag === "TEXTAREA" || el.isContentEditable
}

function stripAccents(s) {
  return s.normalize("NFD").replace(/\p{M}/gu, "")
}

function matchesQuery(item, query) {
  const q = stripAccents(query.trim().toLowerCase())
  if (!q) return true
  const blob = stripAccents(
    [item.label, item.navId, item.id, ...(item.keywords || [])].filter(Boolean).join(" ").toLowerCase(),
  )
  return blob.includes(q)
}

function highlightMatch(text, query) {
  const q = query.trim()
  if (!q) return text
  const lower = text.toLowerCase()
  const ql = q.toLowerCase()
  const idx = lower.indexOf(ql)
  if (idx < 0) return text
  const before = text.slice(0, idx)
  const match = text.slice(idx, idx + ql.length)
  const after = text.slice(idx + ql.length)
  return (
    <>
      {before}
      <mark className="rounded bg-violet-500/25 px-0.5 text-inherit dark:bg-violet-400/20">{match}</mark>
      {after}
    </>
  )
}

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [selected, setSelected] = useState(0)
  const inputRef = useRef(null)
  const itemRefs = useRef({})
  const openRef = useRef(false)
  const { t } = useLanguage()
  const { toggleTheme } = useTheme()

  const commands = useMemo(() => {
    const kw = {
      home: ["home", "accueil", "hero", "debut"],
      about: ["about", "apropos", "moi", "bio"],
      skills: ["skills", "competences", "stack", "tech"],
      projects: ["projects", "projets", "work", "portfolio"],
      "case-studies": ["case", "etudes", "cas", "learnhub"],
      metrics: ["metrics", "impact", "stats", "chiffres"],
      "how-i-work": ["method", "methode", "process", "agile", "scrum"],
      engineering: ["engineering", "quality", "qualite", "security", "tests"],
      learning: ["learning", "veille", "learn", "cours"],
      ai: ["ai", "ia", "data", "machine"],
      "ai-action": ["spam", "demo", "classifier", "interactive"],
      contact: ["contact", "email", "message", "hire"],
    }
    const nav = (id, navId, icon) => ({
      id,
      navId,
      label: t.nav[id === "case-studies" ? "caseStudies" : id === "how-i-work" ? "howIWork" : id === "ai-action" ? "aiAction" : id === "engineering" ? "engineering" : id === "learning" ? "learning" : id === "metrics" ? "metrics" : id],
      icon,
      keywords: kw[navId] || [],
      group: "nav",
    })

    return [
      nav("home", "home", "home"),
      nav("about", "about", "user"),
      nav("skills", "skills", "code"),
      nav("projects", "projects", "folder"),
      nav("case-studies", "case-studies", "layers"),
      nav("metrics", "metrics", "chart"),
      nav("how-i-work", "how-i-work", "cycle"),
      nav("engineering", "engineering", "shield"),
      nav("learning", "learning", "book"),
      nav("ai", "ai", "spark"),
      nav("ai-action", "ai-action", "cpu"),
      nav("contact", "contact", "mail"),
      {
        id: "__theme",
        navId: null,
        label: t.commandPalette.toggleTheme,
        icon: "theme",
        keywords: ["theme", "dark", "light", "sombre", "clair", "mode"],
        group: "action",
      },
    ]
  }, [t])

  const filtered = useMemo(() => commands.filter((c) => matchesQuery(c, query)), [commands, query])

  useEffect(() => {
    openRef.current = open
  }, [open])

  const cursor = useMemo(
    () => (filtered.length === 0 ? 0 : Math.min(selected, filtered.length - 1)),
    [selected, filtered.length],
  )

  useEffect(() => {
    const el = itemRefs.current[cursor]
    el?.scrollIntoView({ block: "nearest", behavior: "smooth" })
  }, [cursor])

  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    setOpen(false)
  }, [])

  const execute = useCallback(
    (item) => {
      if (!item) return
      if (item.id === "__theme") {
        toggleTheme()
        setOpen(false)
        return
      }
      if (item.navId) scrollTo(item.navId)
    },
    [scrollTo, toggleTheme],
  )

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && openRef.current) {
        e.preventDefault()
        setOpen(false)
        return
      }
      if (e.key !== "/" || e.ctrlKey || e.metaKey || e.altKey) return
      if (isTypingTarget(document.activeElement) && !openRef.current) return
      e.preventDefault()
      if (openRef.current) {
        setOpen(false)
      } else {
        setQuery("")
        setSelected(0)
        setOpen(true)
        requestAnimationFrame(() => inputRef.current?.focus())
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const onPaletteKeyDown = (e) => {
    const n = filtered.length
    if (e.key === "ArrowDown") {
      e.preventDefault()
      if (!n) return
      setSelected((s) => {
        const cur = Math.min(s, n - 1)
        return (cur + 1) % n
      })
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (!n) return
      setSelected((s) => {
        const cur = Math.min(s, n - 1)
        return (cur - 1 + n) % n
      })
    } else if (e.key === "Enter") {
      e.preventDefault()
      execute(filtered[cursor])
    }
  }

  const navItems = filtered.filter((c) => c.group === "nav")
  const actionItems = filtered.filter((c) => c.group === "action")
  const showGroups = query.trim() === "" && navItems.length && actionItems.length

  const renderRow = (item, indexInFiltered) => {
    const isActive = cursor === indexInFiltered
    return (
      <button
        key={item.id}
        type="button"
        ref={(el) => {
          itemRefs.current[indexInFiltered] = el
        }}
        onClick={() => execute(item)}
        onMouseEnter={() => setSelected(indexInFiltered)}
        className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition ${
          isActive
            ? "bg-gradient-to-r from-violet-500/20 to-cyan-500/10 text-slate-900 ring-1 ring-violet-500/40 dark:text-white dark:ring-violet-400/35"
            : "text-slate-700 hover:bg-violet-500/10 dark:text-slate-200 dark:hover:bg-violet-500/10"
        }`}
      >
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${
            isActive
              ? "border-violet-500/40 bg-violet-500/15 text-violet-700 dark:text-violet-300"
              : "border-slate-200/80 bg-slate-100/80 text-slate-500 dark:border-white/10 dark:bg-slate-800/80 dark:text-slate-400"
          }`}
        >
          <CmdIcon name={item.icon} className="h-4 w-4" />
        </span>
        <span className="min-w-0 flex-1 truncate">{highlightMatch(item.label, query)}</span>
        {isActive && (
          <kbd className="hidden shrink-0 rounded border border-slate-300/80 bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] text-slate-500 dark:border-white/15 dark:bg-slate-800 dark:text-slate-400 sm:inline">
            ↵
          </kbd>
        )}
      </button>
    )
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={t.commandPalette.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200] flex items-start justify-center bg-slate-950/65 p-4 pt-[8vh] backdrop-blur-md dark:bg-black/75 md:pt-[12vh]"
          onClick={() => setOpen(false)}
          onKeyDown={onPaletteKeyDown}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: -16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-violet-500/20 bg-white/95 shadow-[0_0_0_1px_rgba(139,92,246,0.08),0_24px_80px_-20px_rgba(91,33,182,0.45)] dark:border-violet-400/15 dark:bg-slate-950/95 dark:shadow-[0_0_0_1px_rgba(167,139,250,0.12),0_24px_80px_-20px_rgba(0,0,0,0.65)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent dark:via-violet-400/40" />

            <div className="border-b border-slate-200/90 px-4 pb-3 pt-4 dark:border-white/10">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
                    {t.commandPalette.title}
                  </p>
                  <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-400">{t.commandPalette.subtitle}</p>
                </div>
                <kbd className="shrink-0 rounded-lg border border-slate-300/90 bg-slate-100 px-2 py-1 font-mono text-xs font-medium text-slate-600 dark:border-white/15 dark:bg-slate-800 dark:text-slate-400">
                  /
                </kbd>
              </div>

              <div className="relative mt-4">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
                  <SearchIcon className="h-4 w-4" />
                </span>
                <input
                  ref={inputRef}
                  type="search"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value)
                    setSelected(0)
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter") {
                      e.preventDefault()
                      onPaletteKeyDown(e)
                    }
                  }}
                  placeholder={t.commandPalette.searchPlaceholder}
                  className="w-full rounded-xl border border-slate-200/90 bg-slate-50/90 py-2.5 pl-10 pr-3 text-sm text-slate-900 outline-none ring-violet-500/20 transition placeholder:text-slate-400 focus:border-violet-500/50 focus:ring-2 dark:border-white/10 dark:bg-slate-900/60 dark:text-white dark:placeholder:text-slate-500"
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck={false}
                />
              </div>
            </div>

            <div className="max-h-[min(52vh,22rem)] overflow-y-auto overscroll-contain px-2 pb-2 pt-1 [scrollbar-width:thin]">
              {filtered.length === 0 ? (
                <p className="px-4 py-10 text-center text-sm text-slate-500 dark:text-slate-400">
                  {t.commandPalette.noResults}
                </p>
              ) : showGroups ? (
                <>
                  {navItems.length ? (
                    <div className="px-2 pt-2">
                      <p className="mb-2 px-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                        {t.commandPalette.groupGoTo}
                      </p>
                      <ul className="space-y-0.5">
                        {navItems.map((item) => {
                          const idx = filtered.indexOf(item)
                          return <li key={item.id}>{renderRow(item, idx)}</li>
                        })}
                      </ul>
                    </div>
                  ) : null}
                  {actionItems.length ? (
                    <div className="px-2 pt-3">
                      <p className="mb-2 px-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                        {t.commandPalette.groupActions}
                      </p>
                      <ul className="space-y-0.5">
                        {actionItems.map((item) => {
                          const idx = filtered.indexOf(item)
                          return <li key={item.id}>{renderRow(item, idx)}</li>
                        })}
                      </ul>
                    </div>
                  ) : null}
                </>
              ) : (
                <ul className="space-y-0.5 p-2">
                  {filtered.map((item, idx) => (
                    <li key={item.id}>{renderRow(item, idx)}</li>
                  ))}
                </ul>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-200/80 px-4 py-2.5 text-[10px] text-slate-500 dark:border-white/10 dark:text-slate-500">
              <span>{t.commandPalette.hint}</span>
              <div className="flex flex-wrap gap-2">
                <KbdHint label={t.commandPalette.kbdUpDown} keys={["↑", "↓"]} />
                <KbdHint label={t.commandPalette.kbdEnter} keys={["↵"]} />
                <KbdHint label={t.commandPalette.kbdEsc} keys={["Esc"]} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function KbdHint({ label, keys }) {
  return (
    <span className="inline-flex items-center gap-1">
      {keys.map((k) => (
        <kbd
          key={k}
          className="rounded border border-slate-300/80 bg-slate-100 px-1 py-0.5 font-mono text-[10px] dark:border-white/12 dark:bg-slate-800"
        >
          {k}
        </kbd>
      ))}
      <span className="text-slate-400 dark:text-slate-500">{label}</span>
    </span>
  )
}

function SearchIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  )
}

function CmdIcon({ name, className }) {
  switch (name) {
    case "home":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    case "user":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    case "code":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    case "folder":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      )
    case "layers":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7l8-4 8 4M4 12l8 4 8-4M4 17l8 4 8-4" />
        </svg>
      )
    case "chart":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    case "cycle":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    case "shield":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    case "book":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    case "spark":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    case "cpu":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    case "mail":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    case "theme":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    default:
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
  }
}
