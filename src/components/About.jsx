import './About.css'
import photo from '../assets/ilyas.jpeg'

const facts = [
  { value: '8', label: 'modules SmartLife' },
  { value: 'PFE', label: 'chez Novelis.io' },
  { value: 'Full-stack', label: 'Java / React / IA' },
  { value: 'Bac+5', label: 'Génie Informatique' },
]

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid fade-in">
          <div className="about-text">
            <p className="section-label">À propos</p>
            <h2 className="section-title">Qui suis-je ?</h2>
            <p>
              Je suis <strong>Ilyas Boulouiz</strong>, étudiant en dernière année de Génie Informatique,
              actuellement en PFE en tant que développeur FullStack chez <strong>Novelis.io</strong>.
            </p>
            <p style={{ marginTop: '14px' }}>
              Je développe des applications orientées produit en combinant <strong>Java / Spring Boot</strong>,
              <strong> React / TypeScript</strong>, bases de données et déploiement continu. Je m'intéresse
              particulièrement à la sécurité, aux expériences utilisateur utiles et à l'intégration raisonnée de l'IA.
            </p>
            <p style={{ marginTop: '14px' }}>
              Mon projet personnel principal, <strong>SmartLife</strong>, est une plateforme de gestion personnelle
              assistée par Claude, avec huit modules, authentification renforcée, suivi nutritionnel et sportif,
              architecture multi-services et déploiement en production. Ce projet a été développé avec assistance IA,
              en pilotant l'architecture, les choix fonctionnels, le diagnostic et la validation.
            </p>
            <div className="about-btns" style={{ marginTop: '28px' }}>
              <a href="https://github.com/ilyas8888" target="_blank" rel="noreferrer" className="btn-outline-sm">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/ilyas-boulouiz/" target="_blank" rel="noreferrer" className="btn-outline-sm">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="about-right">
            <div className="about-photo-wrapper">
              <img src={photo} alt="Ilyas Boulouiz" className="about-photo" />
            </div>
            <div className="about-stats">
              {facts.map(f => (
                <div className="stat-card" key={f.label}>
                  <span className="stat-value">{f.value}</span>
                  <span className="stat-label">{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
