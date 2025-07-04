import { useRef } from "react"
import { useWindowStore } from "../core/windowStore"
import { useDrag } from "@use-gesture/react"
import { animated, useSpring } from "@react-spring/web"

type Props = {
  id: string
  title: string
  children: React.ReactNode
  zIndex: number
}

export default function Window({ id, title, children, zIndex }: Props) {
  const { closeWindow, focusWindow } = useWindowStore()
  const ref = useRef(null)

  const [{ x, y }, api] = useSpring(() => ({ x: 100, y: 100 }))
  useDrag(({ offset: [dx, dy] }) => api.start({ x: dx, y: dy }), {
    target: ref
  })

  return (
    <animated.div
      style={{ x, y, zIndex }}
      className="absolute bg-window text-fg border border-accent w-96"
      onMouseDown={() => focusWindow(id)}
    >
      <div
        ref={ref}
        className="bg-green-900 px-2 py-1 cursor-move font-bold flex justify-between"
      >
        <span>{title}</span>
        <button onClick={() => closeWindow(id)}>✕</button>
      </div>
      <div className="p-4">{children}</div>
    </animated.div>
  )
}
