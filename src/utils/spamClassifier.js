/** Lightweight mock classifier for demo UX — not a real ML model */

const SPAM_HINTS = [
  "viagra",
  "winner",
  "click here",
  "free money",
  "urgent",
  "crypto",
  "lottery",
  "congratulations",
  "100% free",
  "act now",
  "limited time",
  "you won",
  "nigerian prince",
  "bitcoin",
  "investment opportunity",
]

export function classifySpamMessage(raw) {
  const text = raw.trim().toLowerCase()
  if (text.length < 2) return { label: null, confidence: 0 }

  let score = 0
  for (const w of SPAM_HINTS) {
    if (text.includes(w)) score += 0.18
  }
  if (/!{2,}/.test(raw)) score += 0.12
  if (/\$\$|€€|££/.test(raw)) score += 0.1
  if (/\b\d{4,}\b/.test(text) && /card|verify|otp/i.test(raw)) score += 0.15
  if (text.length > 200 && /http/.test(text)) score += 0.08

  const noise = (text.length % 7) * 0.02
  const confidence = Math.min(0.97, Math.max(0.55, score + noise))

  const isSpam = score >= 0.18 || (text.length > 15 && score >= 0.12)

  return {
    label: isSpam ? "spam" : "ham",
    confidence: isSpam ? confidence : 1 - confidence * 0.3,
  }
}
