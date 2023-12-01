import { ThemeProvider } from 'styled-components'

import About from './containers/About'
import Projects from './containers/Projects'
import Sidebar from './containers/Sidebar'
import EstiloGlobal, { Container } from './styles'
import LightTheme from './themes/light'

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
