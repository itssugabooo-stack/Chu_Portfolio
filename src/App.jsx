import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {
  return <><a className="skip-link" href="#main">Skip to content</a><Hero /><main id="main"><About /><Experience /><Skills /><Projects /><Contact /></main></>
}

export default App
