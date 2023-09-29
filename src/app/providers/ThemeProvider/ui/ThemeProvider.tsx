
import { type FC, useMemo, useState, useEffect, ReactNode } from 'react'
import { Theme, ThemeContext } from '../lib/ThemeContext'
import bridge from '@vkontakte/vk-bridge';

const defaultTheme = Theme.LIGHT

interface ThemeProviderProps {
  children?: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme])


  useEffect(() => {
    bridge.subscribe((e) => {
      if (e.detail.type === 'VKWebAppUpdateConfig') {
        if (e.detail.data.appearance) {
          if (e.detail.data.appearance === 'light') {
            setTheme(Theme.LIGHT)
          } else if (e.detail.data.appearance === 'dark') {
            setTheme(Theme.DARK)
          }
        }
      }
    });
  }, [])

  useEffect(() => {
    document.body.classList.add(theme)

    return () => {
      document.body.classList.remove(theme)
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={defaultProps} >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
