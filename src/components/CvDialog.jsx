import { useLayoutEffect, useRef } from 'react'
import { asset } from '../data/portfolio.js'
import './CvDialog.css'

export default function CvDialog({ onDismiss }) {
  const dialogRef = useRef(null)
  const pdfUrl = `${import.meta.env.BASE_URL}cv.pdf`

  useLayoutEffect(() => {
    const dialog = dialogRef.current
    const trigger = document.activeElement
    const previousOverflow = document.body.style.overflow
    const mobile = window.matchMedia('(max-width: 600px)')
    const handleResize = () => { if (mobile.matches) onDismiss() }
    dialog.showModal()
    document.body.style.overflow = 'hidden'
    mobile.addEventListener('change', handleResize)
    return () => {
      mobile.removeEventListener('change', handleResize)
      dialog.close()
      document.body.style.overflow = previousOverflow
      if (trigger instanceof HTMLElement && trigger.isConnected) trigger.focus({ preventScroll: true })
    }
  }, [onDismiss])

  const handleBackdrop = (event) => {
    if (event.target !== event.currentTarget) return
    const bounds = event.currentTarget.getBoundingClientRect()
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) onDismiss()
  }

  return (
    <dialog ref={dialogRef} className="cv-dialog" aria-labelledby="cv-dialog-title"
      onClick={handleBackdrop} onCancel={(event) => { event.preventDefault(); onDismiss() }}>
      <header className="cv-dialog-header">
        <h2 id="cv-dialog-title">Curriculum Vitae</h2>
        <button className="cv-dialog-close" type="button" onClick={onDismiss} aria-label="Close CV" autoFocus>
          <img src={asset('project-close')} alt="" />
        </button>
      </header>
      <div className="cv-dialog-toolbar">
        <a href={pdfUrl} target="_blank" rel="noopener noreferrer">Open PDF in a new tab ↗</a>
        <a className="cv-download" href={pdfUrl} download="Ysabelle-Pineda-CV.pdf">Download CV</a>
      </div>
      <iframe className="cv-preview" src={pdfUrl} title="Mary Alexa Ysabelle Pineda CV" />
    </dialog>
  )
}

