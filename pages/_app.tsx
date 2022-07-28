
import { useEffect, useMemo, useState } from 'react'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import HeaderComponent from '../Header.component'
import { createTheme, CssBaseline, PaletteMode, useTheme, ThemeProvider, Badge, Typography, Box, Divider } from '@mui/material'

import MailIcon from '@mui/icons-material/Mail'

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
      <Box display='flex' justifyContent='center' alignItems='center' minHeight='100vh'>
        <div>
          <Badge badgeContent={1} color="primary">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="secondary">
            <MailIcon />
          </Badge>
          <Badge badgeContent={3} color="info">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="warning">
            <MailIcon />
          </Badge>
          <Badge badgeContent={5} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={6} color="success">
            <MailIcon />
          </Badge>
          <div style={{ height: '400px', color: customTheme.palette.warning.dark }}>
            <Typography color='primary' variant='h1'>Eduardo Lira</Typography>
            <Typography color='secondary' variant='h3'>Developer</Typography>
            <Divider />
            <Typography variant='h4'>NextJs Dark Mode Material UI</Typography>
          </div>
          <p>Ideias, Café e Tecnologias</p>
        </div>
      </Box>

      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
