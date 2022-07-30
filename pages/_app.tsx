
import { useEffect, useMemo, useState } from 'react'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import HeaderComponent from "../components/Header.component"
import { createTheme, CssBaseline, PaletteMode, useTheme, ThemeProvider } from '@mui/material'



import { getStoredTheme, getThemeOptions, setStoredTheme } from '../utils/themes'

function MyApp({ Component, pageProps }: AppProps) {

  const [mode, setMode] = useState<PaletteMode>('dark')  // default mode is dark

  const customTheme = useTheme()

  useEffect(() => {
    const storedTheme = getStoredTheme()
    if (storedTheme) {
      setMode(storedTheme)
    }
  }, [])

  //update the theme if it changes
  const theme = useMemo(() => createTheme(getThemeOptions(mode)), [mode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HeaderComponent
        mode={mode}
        onChange={() => {
          const newMode: PaletteMode = mode === 'dark' ? 'light' : 'dark'
          setMode(newMode)
          setStoredTheme(newMode)
        }} />

      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
