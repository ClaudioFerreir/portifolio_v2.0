import Title from './components/Title'
import About from './containers/About'
import Sidebar from './containers/Sidebar'

function App() {
  return (
    <>
      <Sidebar></Sidebar>
      <Title>Claudio Ferreira</Title>
      <main>
        <About></About>
        <section>projetos</section>
      </main>
    </>
  )
}

export default App
