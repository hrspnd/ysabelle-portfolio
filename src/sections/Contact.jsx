import { asset } from '../data/portfolio.js'
import emailCircle from '../assets/portfolio/contact-circle.svg'
import './Contact.css'

const contacts = [
  { id: 'email', image: 'contact-email', href: 'mailto:ysabellepineda26@gmail.com', label: 'Email ysabellepineda26@gmail.com' },
  { id: 'linkedin', image: 'contact-linkedin', href: 'https://www.linkedin.com/in/ysabelle-pineda', label: 'Visit Ysabelle Pineda on LinkedIn (opens in a new tab)', external: true },
  { id: 'github', image: 'contact-github', href: 'https://github.com/hrspnd', label: 'Visit hrspnd on GitHub (opens in a new tab)', external: true },
]

export default function Contact() {
  return (
    <nav className="contact-content" aria-label="Contact links">
      {contacts.map(contact => (
        <a key={contact.id} className={`contact-link contact-link--${contact.id}`}
          href={contact.href} aria-label={contact.label}
          target={contact.external ? '_blank' : undefined}
          rel={contact.external ? 'noopener noreferrer' : undefined}>
          <span className="contact-image">
            {contact.id === 'email' && <img className="contact-email-circle" src={emailCircle} alt="" />}
            <img className="contact-logo" src={asset(contact.image)} alt="" loading="lazy" />
          </span>
          <span>{contact.id}</span>
        </a>
      ))}
    </nav>
  )
}

