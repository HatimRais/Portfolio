import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { translations } from "../i18n/translations"

const LanguageContext = createContext(null)

const STORAGE_KEY = "portfolio-lang"

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return "en"
    return localStorage.getItem(STORAGE_KEY) || "en"
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang === "fr" ? "fr" : "en"
  }, [lang])

  const t = useMemo(() => translations[lang] || translations.en, [lang])

  const toggleLang = () => setLang((l) => (l === "en" ? "fr" : "en"))

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}
