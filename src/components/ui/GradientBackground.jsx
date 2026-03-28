import { motion } from "framer-motion"

export function GradientBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-slate-50 dark:bg-[#030712]" />
      <motion.div
        className="absolute -left-1/4 top-0 h-[42rem] w-[42rem] rounded-full bg-violet-500/20 blur-[100px] dark:bg-violet-600/25"
        animate={{ scale: [1, 1.08, 1], opacity: [0.45, 0.6, 0.45] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-1/4 top-1/3 h-[36rem] w-[36rem] rounded-full bg-cyan-500/15 blur-[100px] dark:bg-cyan-500/20"
        animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.5, 0.35] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/10 blur-[90px] dark:bg-fuchsia-500/15"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(15,23,42,0.04)_50%,transparent_100%)] dark:bg-[linear-gradient(to_bottom,transparent_0%,rgba(2,6,23,0.45)_100%)]" />
    </div>
  )
}
