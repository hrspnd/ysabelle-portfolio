import { asset } from '../../data/portfolio.js'

export default function EducationEntry({ entry }) {
  return (
    <li className="education-entry">
      <div className="education-logo"><img src={asset(entry.logo)} alt={entry.school + ' emblem'} title={entry.school} loading="lazy" /></div>
      <div className="education-content">
        <h3>{entry.school}</h3>
        <p>{entry.qualification}</p>
        <p>{entry.dates}</p>
        <ul className={`education-achievements ${entry.id === 'junior-high' ? 'education-achievements--columns' : ''}`}>
          {entry.achievements.map((item) => (
            <li key={item.title + item.detail + item.year}>
              <h4>{item.title}</h4>
              <p>{item.detail}</p>
              <p>{item.year}</p>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}


