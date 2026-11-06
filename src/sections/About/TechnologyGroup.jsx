import { asset } from '../../data/portfolio.js'

export default function TechnologyGroup({ title, items }) {
  return (
    <section className="technology-group" aria-label={title}>
      <h3>{title}</h3>
      <ul className="technology-grid">
        {items.map(([image, label]) => (
          <li className={`technology-item technology-item--${image}`} key={image} title={label}>
            <img src={asset(image)} alt={label} loading="lazy" />
          </li>
        ))}
      </ul>
    </section>
  )
}

