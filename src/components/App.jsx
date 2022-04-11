import './App.css'
import Navbar from './Navbar/Navbar'
import { ThemeProvider } from '@material-ui/core/styles'
import Theme from './Theme'
import Header from './Header/Header'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Navbar />
        <Header />
        <Skills />
        <Projects />
        <Contact />
      </ThemeProvider>
    </>
  )
}

export default App
