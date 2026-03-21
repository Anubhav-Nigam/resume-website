import { useRef } from "react"
import emailjs from "@emailjs/browser"
import SectionWrapper from "../components/SectionWrapper"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
const YOUR_SERVICE_ID = 'service_cp013mn';
const YOUR_TEMPLATE_ID = 'template_q07uv0h';
const YOUR_PUBLIC_KEY = '-rC2sFUOxbj4xMw4d';

export default function Contact() {
  const formRef = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        formRef.current,
        YOUR_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!")
          formRef.current.reset()
        },
        () => {
          alert("Failed to send message. Try again.")
        }
      )
  }

  return (
    <SectionWrapper id="contact">

      <h2 className="text-3xl font-semibold mb-4">
        Contact
      </h2>

      <p className="text-[var(--color-muted)] max-w-2xl mb-10">
        Feel free to reach out for collaborations or opportunities.
      </p>

      <div className="grid md:grid-cols-2 gap-10">

        {/* LEFT — LINKS */}
        <div className="space-y-4">

          <a
            href="mailto:your-email@example.com"
            className="flex items-center gap-3 text-[var(--color-muted)] hover:text-[var(--color-text)] transition"
          >
            <FaEnvelope />
            your-email@example.com
          </a>

          <a
            href="https://github.com/your-username"
            target="_blank"
            className="flex items-center gap-3 text-[var(--color-muted)] hover:text-[var(--color-text)] transition"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            className="flex items-center gap-3 text-[var(--color-muted)] hover:text-[var(--color-text)] transition"
          >
            <FaLinkedin />
            LinkedIn
          </a>

        </div>

        {/* RIGHT — FORM */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-4"
        >

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded bg-[var(--color-secondary)] border border-[var(--color-border)] focus:outline-none"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded bg-[var(--color-secondary)] border border-[var(--color-border)] focus:outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 rounded bg-[var(--color-secondary)] border border-[var(--color-border)] focus:outline-none"
          />

          <button
            type="submit"
            className="bg-[var(--color-accent)] px-6 py-3 rounded hover:scale-105 transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </SectionWrapper>
  )
}