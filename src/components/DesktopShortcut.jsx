import { asset } from '../data/portfolio.js'
import './DesktopShortcut.css'

export default function DesktopShortcut({ icon, label, destination }) {
  const content = <><img src={asset(icon)} alt="" /><span>{label}</span></>
  return destination
    ? <a className="desktop-shortcut" href={destination}>{content}</a>
    : <button className="desktop-shortcut" type="button" disabled title="Contact details have not been provided">{content}</button>
}

