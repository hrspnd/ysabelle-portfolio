import DesktopShortcut from '../components/DesktopShortcut.jsx'
import { asset } from '../data/portfolio.js'
import './Hero.css'

export default function Hero() {
  return (
    <div className="hero-content">
      <div className="portrait-window">
        <div className="portrait-titlebar" aria-hidden="true" />
        <div className="portrait-crop">
          <img src={asset('portrait')} alt="Mary Alexa Ysabelle V. Pineda" fetchPriority="high" />
        </div>
      </div>
      <section className="hero-introduction" aria-labelledby="hero-name">
        <p className="hero-greeting">hi! i’m</p>
        <h1 id="hero-name"><span>Mary Alexa </span><span>Ysabelle V. Pineda</span></h1>
        <p className="hero-description">a fourth-year computer science student<br className="hero-line-break" /> at Holy Angel University</p>
      </section>
      <nav className="hero-shortcuts" aria-label="Portfolio">
        <DesktopShortcut icon="about" label="about me" destination="#about" />
        <DesktopShortcut icon="projects" label="projects" destination="#projects" />
        <DesktopShortcut icon="contact" label="contact me" destination="#contact" />
      </nav>
    </div>
  )
}


