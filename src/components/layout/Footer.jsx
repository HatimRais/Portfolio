import { useLanguage } from "../../context/LanguageContext"

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink/10 bg-mist/60 py-12 dark:border-paper/10 dark:bg-surface-dark">
      <div className="mx-auto flex min-w-0 max-w-6xl flex-col items-start justify-between gap-6 px-4 text-sm text-ink/55 sm:px-6 dark:text-paper/50 md:flex-row md:items-end">
        <div>
          <p className="font-[family-name:var(--font-display)] text-lg font-bold text-ink dark:text-paper">
            Hatim Rais
          </p>
          <p className="mt-1">
            © {year}. {t.footer.rights}
          </p>
        </div>
        <div className="max-w-sm md:text-right">
          <p>{t.footer.built}</p>
          <p className="mt-2 text-xs text-ink/40 dark:text-paper/35">{t.footer.commandHint}</p>
        </div>
      </div>
    </footer>
  )
}
