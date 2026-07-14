export function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-xl border border-ink/10 bg-white/90 dark:border-white/12 dark:bg-surface-dark/80 ${className}`}
    >
      {children}
    </div>
  )
}
