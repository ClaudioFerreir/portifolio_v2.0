import Title from './components/Title'
import About from './containers/About'
import Projects from './containers/Projects'
import Sidebar from './containers/Sidebar'

function App() {
  return (
    <>
      <Sidebar></Sidebar>
      <Title>Claudio Ferreira</Title>
      <main>
        <About></About>
        <Projects></Projects>
      </main>
    </>
  )
}

export default App
