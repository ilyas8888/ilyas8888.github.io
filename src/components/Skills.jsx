import './Skills.css'

const categories = [
  {
    name: 'Backend',
    icon: '⚙️',
    skills: ['Java', 'Spring Boot', 'Spring Security', 'Python', 'FastAPI', 'C', 'C++'],
  },
  {
    name: 'Frontend',
    icon: '',
    skills: ['React', 'Angular', 'TypeScript', 'JavaScript', 'TailwindCSS', 'HTML5', 'CSS3', 'Leaflet.js'],
  },
  {
    name: 'Bases de données',
    icon: '️',
    skills: ['PostgreSQL', 'SQL Server', 'MySQL', 'MongoDB', 'Firebase'],
  },
  {
    name: 'Outils & DevOps',
    icon: '️',
    skills: ['Git', 'GitHub', 'GitLab', 'Docker', 'REST API', 'Maven', 'Vite', 'Android Studio', 'VS Code', 'IntelliJ'],
  },
  {
    name: 'Intelligence Artificielle',
    icon: '🤖',
    skills: ['Claude AI', 'Anthropic SDK', 'Prompt Engineering', 'RAG'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="section-label">Compétences</p>
        <h2 className="section-title">Mon stack technique</h2>
        <p className="section-sub">Technologies que j'utilise au quotidien</p>
        <div className="skills-grid">
          {categories.map((cat, i) => (
            <div className="skill-card fade-in" key={cat.name} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="skill-card-header">
                <span className="skill-icon">{cat.icon}</span>
                <span className="skill-cat">{cat.name}</span>
              </div>
              <div className="skill-tags">
                {cat.skills.map(s => (
                  <span className="tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
