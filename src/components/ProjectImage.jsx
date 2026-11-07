import { asset } from '../data/portfolio.js'

export default function ProjectImage({ project }) {
  return (
    <span className={`project-image project-image--${project.id}${project.pixelArt ? ' project-image--pixel' : ''}`}>
      <img src={asset(project.image)} alt="" loading="lazy" />
    </span>
  )
}

