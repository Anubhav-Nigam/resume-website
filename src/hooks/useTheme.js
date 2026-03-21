import { useEffect, useState } from "react"

export default function useTheme() {
  const [theme, setTheme] = useState("system")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")

    if (savedTheme) {
      setTheme(savedTheme)
      applyTheme(savedTheme)
    } else {
      applySystemTheme()
    }
  }, [])

  const applyTheme = (mode) => {
    const root = document.documentElement

    root.classList.remove("light", "dark")

    if (mode === "dark") root.classList.add("dark")
    if (mode === "light") root.classList.add("light")
  }

  const applySystemTheme = () => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    applyTheme(isDark ? "dark" : "light")
  }

  const changeTheme = (mode) => {
    setTheme(mode)
    localStorage.setItem("theme", mode)

    if (mode === "system") {
      localStorage.removeItem("theme")
      applySystemTheme()
    } else {
      applyTheme(mode)
    }
  }

  return { theme, changeTheme }
}