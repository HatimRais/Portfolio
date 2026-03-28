import { useState } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "../../context/LanguageContext"
import { useToast } from "../../context/ToastContext"
import { GlassCard } from "../ui/GlassCard"
import { SectionHeading } from "../ui/SectionHeading"

const SOCIAL = [
  {
    name: "GitHub",
    href: "https://github.com/HatimRais",
    icon: GitHubIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/hatim-rais",
    icon: LinkedInIcon,
  },
  {
    name: "Email",
    href: "mailto:raishatim8@gmail.com",
    icon: MailIcon,
  },
]

export function Contact() {
  const { t } = useLanguage()
  const { showToast } = useToast()
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const onSubmit = (e) => {
    e.preventDefault()
    showToast(t.toast.sent)
    setForm({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="scroll-mt-24 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={t.contact.subtitle} title={t.contact.title} />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8 md:p-10">
              <form onSubmit={onSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    {t.contact.name}
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder={t.contact.placeholderName}
                    className="w-full rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3 text-slate-900 outline-none ring-violet-500/30 transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-2 dark:border-white/10 dark:bg-slate-800/50 dark:text-white dark:placeholder:text-slate-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    {t.contact.email}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder={t.contact.placeholderEmail}
                    className="w-full rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3 text-slate-900 outline-none ring-violet-500/30 transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-2 dark:border-white/10 dark:bg-slate-800/50 dark:text-white dark:placeholder:text-slate-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    {t.contact.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder={t.contact.placeholderMessage}
                    className="w-full resize-y rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3 text-slate-900 outline-none ring-violet-500/30 transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-2 dark:border-white/10 dark:bg-slate-800/50 dark:text-white dark:placeholder:text-slate-500"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 dark:from-violet-500 dark:via-fuchsia-500 dark:to-cyan-500"
                >
                  {t.contact.send}
                </motion.button>
              </form>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="flex flex-col gap-6"
          >
            <GlassCard className="p-8 md:p-10">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-slate-900 dark:text-white">
                {t.contact.social}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                raishatim8@gmail.com
              </p>
              <ul className="mt-6 space-y-3">
                {SOCIAL.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-xl border border-slate-200/60 bg-slate-50/50 px-4 py-3 text-sm font-medium text-slate-800 transition hover:border-violet-400/50 hover:bg-white dark:border-white/10 dark:bg-slate-800/40 dark:text-slate-100 dark:hover:border-violet-400/35"
                    >
                      <s.icon className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function GitHubIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedInIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function MailIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}
