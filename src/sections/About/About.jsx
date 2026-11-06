import { technologyGroups, education } from '../../data/portfolio.js'
import TechnologyGroup from './TechnologyGroup.jsx'
import EducationEntry from './EducationEntry.jsx'
import './About.css'

export default function About() {
  return (
    <div className="about-content">
      <section className="about-biography" aria-labelledby="about-heading">
        <h2 id="about-heading" className="section-heading">About Me</h2>
        <div className="about-prose">
          <p>I'm a Computer Science student at Holy Angel University with a passion for full-stack development and interface design. I enjoy combining creativity and problem-solving to turn ideas into functional, user-friendly applications. Through academic and personal projects, I've gained hands-on experience in web and mobile development, strengthened my teamwork and leadership skills, and developed a detail-oriented approach to my work.</p>
          <p>Outside of programming, I also enjoy photography, videography, and video editing. These creative interests allow me to explore different ways of expressing ideas and have helped me develop a stronger eye for detail and visual design.</p>
        </div>
      </section>
      <section className="about-technologies" aria-labelledby="technologies-heading">
        <h2 id="technologies-heading" className="section-heading">Technologies &amp; Tools</h2>
        <p className="section-description">The languages, frameworks, and tools I use to bring ideas to life.</p>
        <div className="technology-groups">
          {technologyGroups.map(group => <TechnologyGroup key={group.title} {...group} />)}
        </div>
      </section>
      <section className="about-education" aria-labelledby="education-heading">
        <h2 id="education-heading" className="section-heading">Education</h2>
        <p className="section-description">The academic journey and achievements that have shaped my growth.</p>
        <ol className="education-timeline">
          {education.map(entry => <EducationEntry key={entry.id} entry={entry} />)}
        </ol>
      </section>
    </div>
  )
}


