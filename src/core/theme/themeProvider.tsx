import { createContext, useContext, useEffect, useState } from "react"
import type { Theme } from "./types"
import { alienTheme } from "./themes/alien"

const ThemeContext = createContext<{ theme: Theme; setTheme: (t: Theme) => void }>({
  theme: alienTheme,
  setTheme: () => {}
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(alienTheme)

  useEffect(() => {
    const root = document.documentElement

    // Couleurs
    Object.entries(theme.colors).forEach(([key, val]) => {
      root.style.setProperty(key, val)
    })

    // Typo
    root.style.fontFamily = theme.typography.fontFamily
    root.style.fontSize = theme.typography.baseSize

    // Wallpaper
    root.style.backgroundImage = `url(${theme.wallpaper.url})`
    root.style.backgroundSize = theme.wallpaper.style || "cover"
    root.style.filter = theme.wallpaper.filter || "none"
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
