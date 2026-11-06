import './DesktopWindow.css'
import { asset } from '../data/portfolio.js'

export default function DesktopWindow({ id, title, icon, children }) {
  return (
    <section className="desktop-window" id={id} aria-labelledby={id + '-title'}>
      <header className="window-titlebar">
        <div className="window-label">
          <img src={asset(icon)} alt="" />
          <span id={id + '-title'}>{title}</span>
        </div>
        {id !== 'home' && (
          <a className="window-back" href="#home" aria-label="Back home" title="Back home">
            <img src={asset('home')} alt="" />
          </a>
        )}
      </header>
      <div className="window-body">{children}</div>
    </section>
  )
}

