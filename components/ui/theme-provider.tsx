"use client"

import * as React from "react"

type Theme = "white" | "green"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined)

export function useTheme() {
  const context = React.useContext(ThemeContext)
  if (!context) throw new Error("useTheme must be used within ThemeProvider")
  return context
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState<Theme>("green")
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    const stored = localStorage.getItem("app-theme") as Theme | null
    if (stored === "white" || stored === "green") {
      setTheme(stored)
    }
    setMounted(true)
  }, [])

  React.useEffect(() => {
    if (!mounted) return
    localStorage.setItem("app-theme", theme)
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme, mounted])

  // Set initial attribute on mount
  React.useEffect(() => {
    if (mounted) {
      // Clean up any old next-themes state
      document.documentElement.classList.remove('dark')
      document.documentElement.setAttribute("data-theme", theme)
    }
  }, [mounted, theme])

  const toggleTheme = React.useCallback(() => {
    setTheme((prev) => (prev === "white" ? "green" : "white"))
  }, [])

  return (
    <ThemeContext value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext>
  )
}