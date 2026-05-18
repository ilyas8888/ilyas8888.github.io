import './About.css'
import photo from '../assets/ilyas.jpeg'

const facts = [
  { value: '3+', label: 'ans de code' },
  { value: 'PFE', label: 'chez Novelis.io' },
  { value: '10+', label: 'technos maîtrisées' },
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
              Passionné par le développement web, je travaille aussi bien sur le backend (Java / Spring Boot)
              que sur le frontend (React / JavaScript). J'aime construire des solutions robustes,
              propres et performantes.
            </p>
            <p style={{ marginTop: '14px' }}>
              J'ai aussi développé des projets concrets en production : une plateforme de livraison locale
              avec tracking GPS temps réel (Firebase, Leaflet.js) et une app Android native — des projets
              qui m'ont appris à aller du design jusqu'au déploiement.
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
