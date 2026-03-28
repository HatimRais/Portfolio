import { useLanguage } from "../../context/LanguageContext"

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200/80 bg-white/40 py-10 backdrop-blur-sm dark:border-white/10 dark:bg-slate-950/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-slate-500 dark:text-slate-400 md:flex-row md:text-left">
        <p>
          © {year} Hatim Rais. {t.footer.rights}
        </p>
        <div className="max-w-md text-slate-400 dark:text-slate-500">
          <p>{t.footer.built}</p>
          <p className="mt-2 text-xs text-slate-400/90 dark:text-slate-500">{t.footer.commandHint}</p>
        </div>
      </div>
    </footer>
  )
}
