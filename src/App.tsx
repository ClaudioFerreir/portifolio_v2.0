import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import About from './containers/About'
import Projects from './containers/Projects'
import Sidebar from './containers/Sidebar'
import EstiloGlobal, { Container } from './styles'
import LightTheme from './themes/light'
import DarkTheme from './themes/dark'

function App() {
  const [DarkThemeOn, setDarkThemeOn] = useState(false)

  function switchTheme() {
    setDarkThemeOn(!DarkThemeOn)
  }

  return (
    <ThemeProvider theme={DarkThemeOn ? DarkTheme : LightTheme}>
      <EstiloGlobal />
      <Container>
        <Sidebar switchTheme={switchTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
