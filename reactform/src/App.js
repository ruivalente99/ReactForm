import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import ThemeToggle from './components/Form/ThemeToggle'
import './App.css'
import { Form } from './components/Form'

const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

export default function App () {
  const [mode, setMode] = React.useState('light')
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
      }
    }),
    []
  )

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode
        }
      }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <ThemeToggle context={ColorModeContext} />
        <Form />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
