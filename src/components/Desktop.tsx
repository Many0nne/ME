import { useWindowStore } from "../core/windowStore"
import Window from "./Window"
import DesktopArea from "./DesktopArea"
import { useTheme } from "../core/theme/themeProvider"
import { defaultTheme } from "../core/theme/themes/default"
import { alienTheme } from "../core/theme/themes/alien"

const themes = [alienTheme, defaultTheme];

export default function Desktop() {
  const { windows } = useWindowStore()
  const { theme, setTheme } = useTheme()

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black text-white font-mono relative overflow-hidden">
      {/* Affiche toujours DesktopArea */}
      <DesktopArea />

      {/* Fenêtres actives */}
      {windows.map(w => (
        <Window key={w.id} id={w.id} title={w.title} zIndex={w.zIndex}>
          {w.component}
        </Window>
      ))}

      {/* Barre système fixe */}
      <div className="absolute bottom-0 left-0 w-full h-6 bg-zinc-900 border-t border-zinc-700 flex items-center justify-between px-4 text-xs text-zinc-400">
        <span>MU-TH-UR 6000 — Interface expérimentale</span>
        <div className="flex items-center gap-2">
          <select
            className="px-2 py-1 border border-accent rounded bg-zinc-900 text-zinc-200"
            style={{ borderRadius: theme.ui?.borderRadius || '0.25rem' }}
            value={theme.name}
            onChange={e => {
              const selected = themes.find(t => t.name === e.target.value)
              if (selected) setTheme(selected)
            }}
          >
            {themes.map(t => (
              <option key={t.name} value={t.name}>{t.name}</option>
            ))}
          </select>
          <span>{new Date().toLocaleTimeString("fr-FR", { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>
    </div>
  )
}
