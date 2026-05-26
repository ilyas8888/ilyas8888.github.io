import './Skills.css'

const categories = [
  {
    name: 'Backend',
    icon: 'API',
    skills: ['Java 17', 'Spring Boot', 'Spring Security', 'JPA', 'WebClient', 'Python', 'FastAPI', 'REST API'],
  },
  {
    name: 'Frontend',
    icon: 'UI',
    skills: ['React', 'TypeScript', 'TanStack Query', 'TailwindCSS', 'Vite', 'JavaScript', 'Angular', 'Leaflet.js'],
  },
  {
    name: 'Bases de données',
    icon: 'DB',
    skills: ['PostgreSQL', 'Flyway', 'pgvector', 'SQL', 'Firebase', 'MySQL', 'MongoDB'],
  },
  {
    name: 'Outils & DevOps',
    icon: 'Ops',
    skills: ['Git', 'GitHub Actions', 'Docker', 'Maven', 'Hugging Face Spaces', 'GitHub Pages', 'SonarCloud', 'Sentry'],
  },
  {
    name: 'Intelligence Artificielle',
    icon: 'AI',
    skills: ['Claude API', 'Anthropic SDK', 'Prompt Engineering', 'Structured Extraction', 'AI-assisted Development', 'Embeddings'],
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
