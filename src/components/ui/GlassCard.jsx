export function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-slate-200/80 bg-white/70 shadow-xl shadow-violet-500/5 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/50 dark:shadow-violet-500/10 ${className}`}
    >
      {children}
    </div>
  )
}
