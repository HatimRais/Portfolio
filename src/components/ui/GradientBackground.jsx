export function GradientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-paper dark:bg-surface-dark" />
      <div className="bg-grain absolute inset-0 opacity-80 dark:opacity-40" />
      <div className="absolute -right-24 top-0 h-[70vh] w-[55vw] max-w-3xl bg-[radial-gradient(ellipse_at_top_right,rgba(31,107,92,0.14),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(61,154,134,0.12),transparent_60%)]" />
      <div className="absolute -left-16 bottom-0 h-[50vh] w-[45vw] bg-[radial-gradient(ellipse_at_bottom_left,rgba(196,120,44,0.1),transparent_65%)] dark:bg-[radial-gradient(ellipse_at_bottom_left,rgba(196,120,44,0.08),transparent_65%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
    </div>
  )
}
