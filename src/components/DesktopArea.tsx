import React, { useEffect, useRef, useState } from "react"
import AnimatedText from "./AnimatedText"
import Competences from "./Competences"
import Projets from "./Projets"
import Hobbies from "./Hobbies"
import Parcours from "./Parcours"
import Contact from "./Contact"

const MENU = [
  { label: "Mes compétences", component: <Competences /> },
  { label: "Mes projets / réalisations", component: <Projets /> },
  { label: "Mes hobbies", component: <Hobbies /> },
  { label: "Mon parcours / objectif", component: <Parcours /> },
  { label: "Me contacter", component: <Contact /> },
]

export default function DesktopArea({ children }: { children?: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.loop = true
    audio.volume = 0.5
    audio.play().catch(() => {})
    return () => { audio.pause() }
  }, [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") setSelected(s => (s - 1 + MENU.length) % MENU.length)
      if (e.key === "ArrowDown") setSelected(s => (s + 1) % MENU.length)
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [])

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      {/* Overlay scanlines */}
      <div className="pointer-events-none absolute inset-0 z-10 opacity-20 mix-blend-overlay scanlines" />
      {/* Cadre et titre */}
      <div className="relative z-20 w-[95svw] h-[90svh] border-8 border-black rounded-lg bg-[color:rgba(31,59,44,0.92)] flex flex-row p-6 font-mono text-[color:var(--color-fg)] shadow-none">
        <audio ref={audioRef} src={import.meta.env.BASE_URL + "src/assets/alien-background.mp3"} />
        {/* Menu à gauche */}
        <nav className="flex flex-col gap-4 items-start justify-start mt-8">
          {MENU.map((item, i) => (
            <button
              key={item.label}
              className={`text-left px-2 py-1 transition-colors ${i === selected ? "border-b-2 border-accent" : "hover:bg-zinc-800"}`}
              tabIndex={0}
              onClick={() => setSelected(i)}
            >
              <AnimatedText>{item.label}</AnimatedText>
            </button>
          ))}
        </nav>
        {/* Contenu */}
        <div className="flex-1 flex flex-col items-center justify-center ml-12">
          <div className="w-full">{MENU[selected].component}</div>
          {children}
        </div>
      </div>
    </div>
  )
}
