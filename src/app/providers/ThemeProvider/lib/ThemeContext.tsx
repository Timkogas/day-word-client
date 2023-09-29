import { createContext } from 'react'

export enum Theme {
  LIGHT = 'app_light_theme',
  DARK = 'app_dark_theme',
}

export interface ThemeContextProps {
  theme?: Theme | undefined
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({})
