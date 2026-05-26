import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-logo">IB<span>.</span></span>
        <p className="footer-text">
          <strong>Ilyas Boulouiz</strong> - Full-stack Java / React & IA appliquée
        </p>
        <div className="footer-socials">
          <a href="https://github.com/ilyas8888" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/ilyas-boulouiz/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
