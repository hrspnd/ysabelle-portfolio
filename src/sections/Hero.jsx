import { useCallback, useState } from 'react'
import CvDialog from '../components/CvDialog.jsx'
import DesktopShortcut from '../components/DesktopShortcut.jsx'
import { asset } from '../data/portfolio.js'
import './Hero.css'

export default function Hero() {
  const [cvOpen, setCvOpen] = useState(false)
  const closeCv = useCallback(() => setCvOpen(false), [])
  const handleViewCv = (event) => {
    if (window.matchMedia('(max-width: 600px)').matches ||
        event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return
    event.preventDefault()
    event.currentTarget.focus()
    setCvOpen(true)
  }
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
        <a className="hero-cv" href={`${import.meta.env.BASE_URL}cv.pdf`} target="_blank" rel="noopener noreferrer" aria-label="View CV (PDF)" onClick={handleViewCv}>
          <img src={asset('new-tab')} alt="" />
          View CV
        </a>
      </section>
      <nav className="hero-shortcuts" aria-label="Portfolio">
        <DesktopShortcut icon="about" label="about me" destination="#about" />
        <DesktopShortcut icon="projects" label="projects" destination="#projects" />
        <DesktopShortcut icon="contact" label="contact me" destination="#contact" />
      </nav>
      {cvOpen && <CvDialog onDismiss={closeCv} />}
    </div>
  )
}




