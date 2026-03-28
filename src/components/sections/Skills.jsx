import { motion } from "framer-motion"
import { skillGroups } from "../../data/skills"
import { useLanguage } from "../../context/LanguageContext"
import { GlassCard } from "../ui/GlassCard"
import { SectionHeading } from "../ui/SectionHeading"
import { SkillBar } from "../ui/SkillBar"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
}

export function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="scroll-mt-24 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={t.skills.subtitle} title={t.skills.title} />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group) => (
            <motion.div key={group.key} variants={item}>
              <GlassCard className="h-full p-6 md:p-8">
                <h3 className="mb-6 font-[family-name:var(--font-display)] text-lg font-bold text-slate-900 dark:text-white">
                  {t.skills[group.key]}
                </h3>
                <div className="space-y-4">
                  {group.skills.map((s) => (
                    <SkillBar key={s.name} name={s.name} level={s.level} />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
