import { createContext, useCallback, useContext, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const ToastContext = createContext(null)

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null)
  const timeoutRef = useRef(null)

  const showToast = useCallback((message) => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    setToast(message)
    timeoutRef.current = window.setTimeout(() => setToast(null), 3800)
  }, [])

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <AnimatePresence>
        {toast && (
          <motion.div
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 24, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 12, x: "-50%" }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="fixed bottom-8 left-1/2 z-[100] max-w-[min(90vw,28rem)] rounded-2xl border border-violet-500/30 bg-white/95 px-5 py-3 text-sm text-slate-900 shadow-[0_8px_40px_-12px_rgba(124,58,237,0.35)] backdrop-blur-xl dark:border-violet-400/25 dark:bg-slate-950/92 dark:text-white dark:shadow-[0_0_40px_-8px_rgba(139,92,246,0.55)]"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error("useToast must be used within ToastProvider")
  return ctx
}
