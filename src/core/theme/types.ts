export type Theme = {
  name: string
  colors: Record<string, string>
  typography: {
    fontFamily: string
    baseSize: string
  }
  wallpaper: {
    url: string
    style?: "cover" | "contain"
    filter?: string
  }
  effects: {
    scanlines?: boolean
    glitchProbability?: number
  }
  ui?: {
    buttonStyle?: "flat" | "3d" | "ghost"
    borderRadius?: string
  }
}

export interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}
