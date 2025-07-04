import { create } from "zustand"

type WindowState = {
  id: string
  title: string
  component: React.ReactNode
  minimized: boolean
  zIndex: number
}

type Store = {
  windows: WindowState[]
  openWindow: (win: Omit<WindowState, "zIndex" | "minimized">) => void
  closeWindow: (id: string) => void
  focusWindow: (id: string) => void
}

export const useWindowStore = create<Store>((set, get) => ({
  windows: [],
  openWindow: (win) => {
    const zMax = Math.max(0, ...get().windows.map(w => w.zIndex))
    set(state => ({
      windows: [
        ...state.windows,
        { ...win, minimized: false, zIndex: zMax + 1 }
      ]
    }))
  },
  closeWindow: (id) => {
    set(state => ({
      windows: state.windows.filter(w => w.id !== id)
    }))
  },
  focusWindow: (id) => {
    const zMax = Math.max(0, ...get().windows.map(w => w.zIndex))
    set(state => ({
      windows: state.windows.map(w =>
        w.id === id ? { ...w, zIndex: zMax + 1 } : w
      )
    }))
  }
}))
