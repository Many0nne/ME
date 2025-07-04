import type { Theme } from "../types"

export const defaultTheme: Theme = {
  name: "Default",
  colors: {
    "--color-bg": "#1e1e1e",
    "--color-fg": "#ffffff",
    "--color-accent": "#00ffff",
    "--color-window": "#2a2a2a"
  },
  typography: {
    fontFamily: "monospace",
    baseSize: "16px"
  },
  wallpaper: {
    url: "",
    style: "cover"
  },
  effects: {}
}
