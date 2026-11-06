import { useLayoutEffect, useRef } from 'react'
import { asset } from '../data/portfolio.js'
import ProjectDetails, { ProjectImage } from './ProjectDetails.jsx'

export default function ProjectDialog({ project, onDismiss }) {
  const dialogRef = useRef(null)

  useLayoutEffect(() => {
    const dialog = dialogRef.current
    const trigger = document.activeElement
    const previousOverflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
      if (trigger instanceof HTMLElement && trigger.isConnected) trigger.focus({ preventScroll: true })
    }
  }, [])

  const handleBackdrop = (event) => {
    if (event.target !== event.currentTarget) return
    const bounds = event.currentTarget.getBoundingClientRect()
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) onDismiss()
  }

  return (
    <dialog ref={dialogRef} className="project-dialog" aria-labelledby="project-dialog-title"
      onCancel={(event) => { event.preventDefault(); onDismiss() }}
      onClick={handleBackdrop}>
      <header className="project-dialog-header">
        <h2 id="project-dialog-title">{project.name}</h2>
        <button className="project-close" type="button" onClick={onDismiss} aria-label="Close project details" autoFocus>
          <img src={asset('project-close')} alt="" />
        </button>
      </header>
      <div className="project-dialog-content">
        <ProjectImage project={project} />
        <ProjectDetails project={project} />
      </div>
    </dialog>
  )
}


