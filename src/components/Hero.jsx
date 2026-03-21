import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >

        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[var(--color-text)]">
          Full Stack Developer <br />
          <span className="text-[var(--color-muted)]">
            building scalable frontend systems
          </span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          I design and build performant web applications with a strong focus
          on frontend architecture, scalability, and user experience.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-[var(--color-accent)] px-6 py-3 rounded-lg hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-[var(--color-border)] px-6 py-3 rounded-lg hover:border-white transition"
          >
            Contact Me
          </a>
        </div>

      </motion.div>

    </section>
  )
}