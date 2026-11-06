import { useState, useSyncExternalStore } from 'react'
import { projects } from '../data/projects.js'
import ProjectDetails, { ProjectImage } from '../components/ProjectDetails.jsx'
import ProjectDialog from '../components/ProjectDialog.jsx'
import './Projects.css'

// One breakpoint controls both the rendered interaction and its CSS layout.
const mobileQuery = '(max-width: 600px)'
const subscribe = (callback) => {
  const media = window.matchMedia(mobileQuery)
  media.addEventListener('change', callback)
  return () => media.removeEventListener('change', callback)
}
const getSnapshot = () => window.matchMedia(mobileQuery).matches

export default function Projects() {
  const isMobile = useSyncExternalStore(subscribe, getSnapshot, () => false)
  if (isMobile) {
    return (
      <div className="projects-content projects-list">
        {projects.map(project => (
          <article className="project-list-item" key={project.id} aria-labelledby={`project-${project.id}`}>
            <div className="project-list-heading">
              <ProjectImage project={project} />
              <h3 id={`project-${project.id}`}>{project.name}</h3>
            </div>
            <ProjectDetails project={project} />
          </article>
        ))}
      </div>
    )
  }

  return <DesktopProjects />
}

function DesktopProjects() {
  const [selectedId, setSelectedId] = useState(null)
  const selected = projects.find(project => project.id === selectedId)

  return (
    <div className="projects-content">
      <div className="projects-grid">
        {projects.map(project => (
          <button className="project-shortcut" type="button" key={project.id}
            aria-haspopup="dialog" onClick={() => setSelectedId(project.id)}>
            <ProjectImage project={project} />
            <span>{project.name}</span>
          </button>
        ))}
      </div>
      {selected && <ProjectDialog key={selected.id} project={selected} onDismiss={() => setSelectedId(null)} />}
    </div>
  )
}

