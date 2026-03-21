export default function Footer() {
    return (
      <footer className="border-t border-[var(--color-border)] mt-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-6 text-center text-sm text-[var(--color-muted)]">
          © {new Date().getFullYear()} Anubhav Nigam. Built with React, Tailwind & ☕
        </div>
      </footer>
    )
  }