import { asset } from '../data/portfolio.js'

export function ProjectImage({ project }) {
  return (
    <div className={`project-image project-image--${project.id}${project.pixelArt ? ' project-image--pixel' : ''}`}>
      <img src={asset(project.image)} alt="" loading="lazy" />
    </div>
  )
}

export default function ProjectDetails({ project }) {
  return (
    <div className="project-details">
      {project.role && <p className="project-role">{project.role}</p>}
      <p className="project-description">{project.description}</p>
      <p className="project-technologies"><span className="sr-only">Technologies: </span>{project.technologies.join(', ')}</p>
      <a className="project-repository" href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} GitHub repository (opens in a new tab)`}>
        <img src={asset('project-github')} alt="" />
        View GitHub Repository
      </a>
    </div>
  )
}

