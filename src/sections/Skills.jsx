import { motion } from "framer-motion"
import SectionWrapper from "../components/SectionWrapper"
import { skills } from "../data/skills"

function SkillBlock({ title, items }) {
  const isFrontend = title === "Frontend"

  return (
    <div className="border border-[var(--color-border)] rounded-xl p-6 bg-[var(--color-secondary)]">
      
      <h3
        className={`text-lg font-semibold mb-4 ${
          isFrontend ? "text-[var(--color-accent)]" : ""
        }`}
      >
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {items.map((skill, index) => (
          <span
            key={index}
            className="text-sm px-3 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-muted)] hover:text-[var(--color-text)] transition"
          >
            {skill}
          </span>
        ))}
      </div>

    </div>
  )
}

export default function Skills() {
  return (
    <SectionWrapper id="skills">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >

        <h2 className="text-3xl font-semibold mb-10">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <SkillBlock title="Frontend" items={skills.frontend} />
          <SkillBlock title="Backend" items={skills.backend} />
          <SkillBlock title="Tools" items={skills.tools} />
        </div>

      </motion.div>

    </SectionWrapper>
  )
}