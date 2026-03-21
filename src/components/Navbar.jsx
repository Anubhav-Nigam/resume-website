import { useEffect, useState } from "react"
import { FaMoon, FaSun, FaDesktop } from "react-icons/fa"
import useTheme from "../hooks/useTheme"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { theme, changeTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-primary)]/70 backdrop-blur border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="font-semibold text-lg text-[var(--color-text)]">
          Anubhav Nigam
        </h1>

        <div className="flex items-center gap-6">

          {/* Nav Links */}
          <div className="hidden md:flex gap-6 text-sm text-[var(--color-muted)]">
            <a href="#about" className="hover:text-[var(--color-text)] transition">
              About
            </a>
            <a href="#projects" className="hover:text-[var(--color-text)] transition">
              Projects
            </a>
            <a href="#experience" className="hover:text-[var(--color-text)] transition">
              Experience
            </a>
            <a href="#contact" className="hover:text-[var(--color-text)] transition">
              Contact
            </a>
          </div>

          {/* Theme Toggle */}
          <div className="flex gap-1 border border-[var(--color-border)] rounded-lg p-1">

            {/* Light */}
            <button
              onClick={() => changeTheme("light")}
              className={`p-2 rounded transition ${
                theme === "light"
                  ? "bg-[var(--color-secondary)] text-[var(--color-text)]"
                  : "text-[var(--color-muted)]"
              }`}
            >
              <FaSun size={14} />
            </button>

            {/* Dark */}
            <button
              onClick={() => changeTheme("dark")}
              className={`p-2 rounded transition ${
                theme === "dark"
                  ? "bg-[var(--color-secondary)] text-[var(--color-text)]"
                  : "text-[var(--color-muted)]"
              }`}
            >
              <FaMoon size={14} />
            </button>

            {/* System */}
            <button
              onClick={() => changeTheme("system")}
              className={`p-2 rounded transition ${
                theme === "system"
                  ? "bg-[var(--color-secondary)] text-[var(--color-text)]"
                  : "text-[var(--color-muted)]"
              }`}
            >
              <FaDesktop size={14} />
            </button>

          </div>

        </div>

      </div>
    </nav>
  )
}