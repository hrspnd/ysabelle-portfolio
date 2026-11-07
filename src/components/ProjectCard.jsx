import { asset } from '../data/portfolio.js'
import ProjectImage from './ProjectImage.jsx'

export default function ProjectCard({ project }) {
  return (
    <a className={`project-shortcut project-card project-card--${project.id}`} href={project.github} target="_blank" rel="noopener noreferrer"
      aria-label={`View ${project.name} on GitHub (opens in a new tab)`}>
      <span className="project-card-title">{project.name}</span>
      <span className="project-card-body">
        <ProjectImage project={project} />
        <span className="project-card-divider" />
        <span className="project-card-badges">
          {project.badges.map(badge => <span key={badge}>{badge}</span>)}
        </span>
        <span className="project-card-summary">{project.summary}</span>
        <span className="project-card-technologies">
          {project.cardTechnologies.map(([image, label]) => (
            <span className={`project-card-tech project-card-tech--${image}`} key={image} title={label}>
              <img src={asset(image)} alt={label} loading="lazy" />
            </span>
          ))}
        </span>
        <span className="project-card-year"><img src={asset('project-copyright')} alt="Copyright" />{project.year}</span>
      </span>
    </a>
  )
}


