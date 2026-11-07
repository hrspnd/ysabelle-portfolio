import { projects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'
import './Projects.css'

export default function Projects() {
  return (
    <div className="projects-content">
      <div className="projects-grid">
        {projects.map(project => <ProjectCard key={project.id} project={project} />)}
      </div>
    </div>
  )
}

