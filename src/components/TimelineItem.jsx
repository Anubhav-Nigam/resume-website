import { motion } from "framer-motion"

export default function TimelineItem({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-12"
    >
      {/* Vertical Line */}
      <div className="absolute left-2 top-0 w-px h-full bg-[var(--color-border)]"></div>

      {/* Dot */}
      <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-[var(--color-accent)]"></div>

      {/* Content */}
      <p className="text-sm text-[var(--color-muted)] mb-2">
        {item.duration}
      </p>

      <h3 className="text-lg font-semibold">
        {item.company} — {item.role}
        {item.duration.includes("Present") && (
          <span className="text-xs text-[var(--color-accent)] border border-[var(--color-border)] px-2 py-0.5 rounded">
            Current
          </span>
        )}
      </h3>

      <ul className="mt-4 space-y-2 text-[var(--color-muted)]">
        {item.points.map((point, index) => (
          <li key={index}>• {point}</li>
        ))}
      </ul>
    </motion.div>
  )
}