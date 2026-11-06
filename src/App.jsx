import DesktopWindow from './components/DesktopWindow.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About/About.jsx'
import Projects from './sections/Projects.jsx'
import Contact from './sections/Contact.jsx'
import './App.css'

export default function App() {
  return (
    <div className="portfolio-desktop">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <main id="main-content" tabIndex={-1}>
        <DesktopWindow id="home" title="home" icon="home"><Hero /></DesktopWindow>
        <DesktopWindow id="about" title="about" icon="about"><About /></DesktopWindow>
        <DesktopWindow id="projects" title="projects" icon="projects"><Projects /></DesktopWindow>
        <DesktopWindow id="contact" title="contact me" icon="contact"><Contact /></DesktopWindow>
      </main>
    </div>
  )
}


