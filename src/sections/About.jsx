import { motion } from "framer-motion"
import SectionWrapper from "../components/SectionWrapper"

export default function About() {
  return (
    <SectionWrapper id="about">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >

        <h2 className="text-3xl font-semibold mb-6">
          About
        </h2>

        <p className="text-muted leading-relaxed max-w-3xl">
          I am a Full Stack Developer with over 8 years of experience
          building scalable web applications and robust frontend systems.
          My expertise lies in designing performant, maintainable UI
          architectures using modern frameworks like React, while also
          contributing across the stack when required.
        </p>

        <p className="text-muted leading-relaxed max-w-3xl mt-4">
          I have worked on complex enterprise applications, focusing on
          improving performance, enhancing user experience, and
          streamlining development workflows. I enjoy solving challenging
          problems and building systems that scale efficiently.
        </p>

      </motion.div>

    </SectionWrapper>
  )
}