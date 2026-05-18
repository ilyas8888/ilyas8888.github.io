import './Experience.css'

const items = [
  {
    type: 'work',
    title: 'Stagiaire Développeur FullStack',
    org: 'Novelis.io',
    period: '2026 — Présent',
    desc: 'PFE : Développement d\'applications web avec Java/Spring Boot côté backend et React côté frontend. Travail en équipe agile sur des projets clients.',
    tags: ['Java', 'Spring Boot', 'React', 'PostgreSQL'],
  },
  {
    type: 'edu',
    title: 'Diplôme d\'Ingénieur — Génie Informatique',
    org: 'École d\'ingénieurs',
    period: '2023 — 2026',
    desc: 'Formation en génie logiciel, algorithmes, bases de données, réseaux et développement web/mobile.',
    tags: ['Informatique', 'Génie Logiciel', 'IA', 'DevOps'],
  },
  {
    type: 'edu',
    title: 'Diplôme Technicien Spécialisé (BTS) — Développement Informatique',
    org: 'BTS',
    period: '2021 — 2023',
    desc: 'Formation pratique en développement informatique, programmation, bases de données et conception d\'applications.',
    tags: ['Développement', 'Programmation', 'Bases de données'],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <p className="section-label">Parcours</p>
        <h2 className="section-title">Expérience & Formation</h2>
        <p className="section-sub">Mon parcours professionnel et académique</p>
        <div className="timeline">
          {items.map((item, i) => (
            <div className="timeline-item fade-in" key={i} style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className="timeline-dot">
                {item.type === 'work' ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                    <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                )}
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{item.title}</h3>
                  <span className="timeline-period">{item.period}</span>
                </div>
                <p className="timeline-org">{item.org}</p>
                <p className="timeline-desc">{item.desc}</p>
                <div className="timeline-tags">
                  {item.tags.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
