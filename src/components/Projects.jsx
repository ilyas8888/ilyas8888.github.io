import { useState } from 'react'
import './Projects.css'
import ProjectModal from './ProjectModal'

const SMARTLIFE_SLIDES = [
  {
    title: 'Dashboard & Navigation',
    label: 'Dashboard général',
    action: "L'utilisateur accède à son tableau de bord personnalisé.",
    value: 'Vue centralisée sur les objectifs santé, tâches du jour et rappels actifs.',
    tech: 'React 19 + TanStack Query — chargement lazy par module.',
    badge: 'React · TypeScript · TanStack Query',
    video: null,
  },
  {
    title: 'Nutrition intelligente',
    label: 'Autocomplete nutrition + macros',
    action: "Recherche d'un aliment avec autocomplétion puis ajout au journal.",
    value: 'Macros (protéines, glucides, lipides, calories) calculées et mises à jour en temps réel.',
    tech: 'USDA FoodData Central + cache PostgreSQL + debounce 300 ms.',
    badge: 'Spring Boot · USDA API · PostgreSQL',
    video: null,
  },
  {
    title: 'Programmes sportifs',
    label: 'Programme + séance guidée',
    action: "L'utilisateur consulte un programme et démarre une séance.",
    value: 'Suivi de progression, records personnels et guide illustré des exercices.',
    tech: 'Modélisation Program → Session → Exercise + tracking PRs.',
    badge: 'React · Spring Boot · JPA',
    video: null,
  },
  {
    title: 'Assistant IA',
    label: 'Saisie naturelle → action IA',
    action: 'Saisie libre : "Ajoute une réunion demain à 14h avec Marc."',
    value: "L'IA extrait l'intention et crée automatiquement l'entrée dans le bon module.",
    tech: 'Claude API (claude-sonnet-4-6) + extraction structurée JSON via FastAPI.',
    badge: 'Claude API · FastAPI · Python',
    video: null,
  },
  {
    title: 'Sécurité & Authentification',
    label: 'Login Keycloak + OTP email',
    action: "Connexion avec vérification OTP envoyée par email.",
    value: 'Accès sécurisé, session persistante avec refresh token, déconnexion propre.',
    tech: 'Keycloak embarqué (HF Spaces) + JWT refresh + OTP Brevo.',
    badge: 'Keycloak · Spring Security · Brevo',
    video: null,
  },
  {
    type: 'arch',
    title: 'Architecture',
    label: 'Sous le capot',
    items: [
      { icon: '⚙️', label: 'Backend',     value: 'Spring Boot 3 · Java 17 · REST API · JPA / Flyway' },
      { icon: '🤖', label: 'IA',           value: 'FastAPI · Python · Claude API · pgvector embeddings' },
      { icon: '🖥️', label: 'Frontend',    value: 'React 19 · TypeScript · TanStack Query · Vite' },
      { icon: '🔐', label: 'Auth',         value: 'Keycloak + JWT refresh + OTP Brevo' },
      { icon: '🗄️', label: 'Base de données', value: 'PostgreSQL · 16 migrations Flyway · pgvector' },
      { icon: '🚀', label: 'Déploiement', value: 'Hugging Face Spaces (backend) · GitHub Pages (frontend)' },
      { icon: '🔄', label: 'CI/CD',        value: 'GitHub Actions — build, test, analyse, deploy' },
      { icon: '📊', label: 'Qualité',      value: 'SonarCloud · Sentry (errors) · WebClient monitoring' },
    ],
  },
]

const projects = [
  {
    title: 'SmartLife',
    subtitle: 'Plateforme personnelle intelligente · Full-stack & IA',
    desc: 'Application web de gestion du quotidien structurée autour de 8 modules : tâches, rappels, notes, contacts, agenda, journal, alimentation et sport. Une saisie en langage naturel est analysée par Claude pour créer automatiquement les informations pertinentes.',
    highlights: [
      'Nutrition avancée : macros, portions USDA, cache PostgreSQL et autocomplétion intelligente.',
      "Sport enrichi : programmes, séances guidées, progression, records et guide d'exercices.",
      'Sécurité & production : JWT/refresh, OAuth2 Keycloak, OTP Brevo, CI/CD, SonarCloud et Sentry.',
    ],
    stats: ['8 modules', '3 services', '16 migrations Flyway'],
    note: 'Projet personnel développé avec assistance IA.',
    tags: ['React', 'TypeScript', 'Spring Boot', 'FastAPI', 'Claude API', 'PostgreSQL', 'pgvector', 'Keycloak', 'Docker', 'GitHub Actions'],
    category: 'Fullstack',
    featured: true,
    github: 'https://github.com/ilyas8888/smart-life',
    demo: 'https://ilyas8888.github.io/smart-life/',
    slides: SMARTLIFE_SLIDES,
  },
  {
    title: 'Aziz Express',
    desc: 'Plateforme de livraison locale pour coursier indépendant à Oujda. Commandes en temps réel, tracking GPS du livreur, dashboard admin, historique financier et app Android native.',
    tags: ['JavaScript', 'Firebase', 'Leaflet.js', 'Android'],
    category: 'Fullstack',
    github: 'https://github.com/ilyas8888/aziz-express',
    github2: 'https://github.com/ilyas8888/aziz-gps',
    demo: 'https://ilyas8888.github.io/aziz-express',
  },
  {
    title: 'MonLivreur',
    desc: 'API REST et interface web de mise en relation entre clients et livreurs. Authentification JWT, rôles métier, workflow de demandes, avis, notifications WebSocket et suggestion de livreur avec fallback local.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'JWT', 'Angular'],
    category: 'Fullstack',
  },
]

const allCategories = ['Tous', ...new Set(projects.map(p => p.category))]

export default function Projects() {
  const [active, setActive] = useState('Tous')
  const [openProject, setOpenProject] = useState(null)
  const filtered = active === 'Tous' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="projects">
      <div className="container">
        <p className="section-label">Projets</p>
        <h2 className="section-title">Mes réalisations</h2>
        <p className="section-sub">Quelques projets que j'ai développés</p>

        <div className="filter-tabs">
          {allCategories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${active === cat ? 'active' : ''}`}
              onClick={() => setActive(cat)}
            >{cat}</button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((p, i) => (
            <div className={`project-card fade-in ${p.featured ? 'featured' : ''}`} key={p.title} style={{ transitionDelay: `${i * 0.1}s` }}>
              {p.featured && <span className="project-featured-badge">Projet phare</span>}
              <div className="project-top">
                <div className="project-folder">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
                    <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
                  </svg>
                </div>
                <div className="project-links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" title="GitHub Web">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                    </a>
                  )}
                  {p.github2 && (
                    <a href={p.github2} target="_blank" rel="noreferrer" title="GitHub Android">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                        <path d="M17.523 15.341a5.13 5.13 0 01-2.62.718 5.138 5.138 0 01-2.617-.718l-3.1 1.79.796-3.062A5.15 5.15 0 018.76 10.9c0-2.838 2.306-5.143 5.143-5.143s5.143 2.305 5.143 5.143a5.15 5.15 0 01-1.222 3.169l.796 3.062-3.097-1.79zM12 2C6.477 2 2 6.477 2 12c0 1.89.52 3.655 1.425 5.17L2 22l4.833-1.425A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
                      </svg>
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" title="Demo">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              <h3 className="project-title">{p.title}</h3>
              {p.subtitle && <p className="project-subtitle">{p.subtitle}</p>}
              <p className="project-desc">{p.desc}</p>
              {p.highlights && (
                <ul className="project-highlights">
                  {p.highlights.map(item => <li key={item}>{item}</li>)}
                </ul>
              )}
              {p.stats && (
                <div className="project-stats">
                  {p.stats.map(stat => <span key={stat}>{stat}</span>)}
                </div>
              )}
              {p.note && <p className="project-note">{p.note}</p>}
              <div className="project-tags">
                {p.tags.map(t => <span key={t}>{t}</span>)}
              </div>
              {p.slides && (
                <button
                  className="project-explore-btn"
                  onClick={() => setOpenProject(p)}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M10 8l6 4-6 4V8z" fill="currentColor" stroke="none"/>
                  </svg>
                  Explorer le projet
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="projects-cta fade-in">
          <a href="https://github.com/ilyas8888" target="_blank" rel="noreferrer" className="btn-outline-lg">
            Voir tous mes projets sur GitHub →
          </a>
        </div>
      </div>

      {openProject && (
        <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
      )}
    </section>
  )
}
