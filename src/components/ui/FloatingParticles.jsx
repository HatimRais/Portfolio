import { motion } from "framer-motion"

const dots = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  x: `${(i * 37) % 100}%`,
  y: `${(i * 23) % 100}%`,
  delay: (i % 7) * 0.4,
  size: 2 + (i % 4),
}))

export function FloatingParticles() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-[5] overflow-hidden opacity-40 dark:opacity-50"
      aria-hidden
    >
      {dots.map((d) => (
        <motion.span
          key={d.id}
          className="absolute rounded-full bg-brand-light/50 dark:bg-brand-light/35"
          style={{
            left: d.x,
            top: d.y,
            width: d.size,
            height: d.size,
          }}
          animate={{ y: [0, -18, 0], opacity: [0.2, 0.85, 0.2] }}
          transition={{
            duration: 5 + (d.id % 4),
            repeat: Infinity,
            delay: d.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
