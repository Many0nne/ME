import type { Theme } from "../types"

export const alienTheme: Theme = {
  name: "Alien",
  colors: {
    "--color-bg": "#052b06", // vert très foncé (fond)
    "--color-fg": "#f6e75a", // jaune pâle (texte principal)
    "--color-accent": "#7cad42", // vert clair (accent)
    "--color-accent-dark": "#147027", // vert moyen (accent foncé)
    "--color-window": "#010300" // noir profond
  },
  typography: {
    fontFamily: "'Courier Prime', monospace",
    baseSize: "14px"
  },
  wallpaper: {
    url: "/themes/alien/assets/bg.jpg",
    style: "cover",
    filter: "contrast(1.2) brightness(0.8)"
  },
  effects: {
    scanlines: true,
    glitchProbability: 0.1
  }
}
