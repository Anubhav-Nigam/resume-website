import { motion } from "framer-motion"

export default function ProjectCaseStudy({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-12 border-b border-[var(--color-border)]"
    >
      {/* Title */}
      <h3 className="text-2xl font-semibold mb-6">
        {project.title}
      </h3>

      {/* Content */}
      <div className="space-y-4 text-[var(--color-muted)] leading-relaxed max-w-3xl">

        <p>
          <span className="text-[var(--color-text)] font-medium">Problem: </span>
          {project.problem}
        </p>

        <p>
          <span className="text-[var(--color-text)] font-medium">Solution: </span>
          {project.solution}
        </p>

        <p>
          <span className="text-[var(--color-text)] font-medium">Impact: </span>
          {project.impact}
        </p>

        <p>
          <span className="text-[var(--color-text)] font-medium">Contribution: </span>
          {project.contribution}
        </p>

      </div>

      {/* Tech Stack */}
      <div className="mt-6 flex flex-wrap gap-3">
        {project.tech.map((tech, index) => (
          <span
            key={index}
            className="text-sm px-3 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-muted)]"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}