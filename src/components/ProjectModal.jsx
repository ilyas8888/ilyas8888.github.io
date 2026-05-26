import { useState, useEffect, useRef } from 'react'
import './ProjectModal.css'

const SLIDE_COLORS = [
  'linear-gradient(135deg, #1a1a3e 0%, #2d2460 100%)',
  'linear-gradient(135deg, #0d2e1a 0%, #1a4a2e 100%)',
  'linear-gradient(135deg, #2e1a0d 0%, #4a2e1a 100%)',
  'linear-gradient(135deg, #2e0d2e 0%, #4a1a4a 100%)',
  'linear-gradient(135deg, #0d1e2e 0%, #1a2e4a 100%)',
]

export default function ProjectModal({ project, onClose }) {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef(null)
  const slides = project.slides
  const slide = slides[current]
  const isArch = slide.type === 'arch'

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setCurrent(c => Math.min(c + 1, slides.length - 1))
      if (e.key === 'ArrowLeft') setCurrent(c => Math.max(c - 1, 0))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, slides.length])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const prev = () => setCurrent(c => Math.max(c - 1, 0))
  const next = () => setCurrent(c => Math.min(c + 1, slides.length - 1))

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (dx > 50) prev()
    else if (dx < -50) next()
    touchStartX.current = null
  }

  return (
    <div className="pm-overlay" onClick={onClose}>
      <div
        className="pm-container"
        onClick={e => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="pm-header">
          <div className="pm-header-left">
            <h2 className="pm-title">{project.title}</h2>
            <p className="pm-subtitle">{project.subtitle}</p>
          </div>
          <div className="pm-header-actions">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="pm-link">
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                GitHub
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="pm-link pm-link-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                </svg>
                Démo live
              </a>
            )}
            <button className="pm-close" onClick={onClose} aria-label="Fermer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        {isArch ? (
          <ArchSlide data={slide} onBack={() => setCurrent(slides.length - 2)} />
        ) : (
          <div className="pm-body">
            <div className="pm-media-col">
              <button
                className="pm-arrow pm-arrow-left"
                onClick={prev}
                disabled={current === 0}
                aria-label="Précédent"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="22" height="22">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>

              <div className="pm-media">
                {slide.video ? (
                  <video
                    key={slide.video}
                    src={slide.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="pm-video"
                  />
                ) : (
                  <div
                    className="pm-placeholder"
                    style={{ background: SLIDE_COLORS[current % SLIDE_COLORS.length] }}
                  >
                    <div className="pm-placeholder-ring">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32" opacity="0.9">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="pm-placeholder-label">{slide.label}</p>
                    <span className="pm-placeholder-hint">Enregistrement à venir</span>
                  </div>
                )}
              </div>

              <button
                className="pm-arrow pm-arrow-right"
                onClick={next}
                disabled={current === slides.length - 1}
                aria-label="Suivant"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="22" height="22">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>

            <div className="pm-info-col">
              <span className="pm-counter">{current + 1} / {slides.length - 1}</span>
              <h3 className="pm-slide-title">{slide.title}</h3>
              <div className="pm-slide-points">
                <div className="pm-point">
                  <span className="pm-point-label">Action</span>
                  <span className="pm-point-text">{slide.action}</span>
                </div>
                <div className="pm-point">
                  <span className="pm-point-label">Valeur</span>
                  <span className="pm-point-text">{slide.value}</span>
                </div>
                <div className="pm-point">
                  <span className="pm-point-label">Technique</span>
                  <span className="pm-point-text">{slide.tech}</span>
                </div>
              </div>
              <span className="pm-badge">{slide.badge}</span>
              {current === slides.length - 2 && (
                <button
                  className="pm-arch-cta"
                  onClick={() => setCurrent(slides.length - 1)}
                >
                  Voir l'architecture →
                </button>
              )}
            </div>
          </div>
        )}

        <div className="pm-dots">
          {slides.map((s, i) => (
            <button
              key={i}
              className={`pm-dot${i === current ? ' active' : ''}${s.type === 'arch' ? ' arch' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={s.title}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function ArchSlide({ data, onBack }) {
  return (
    <div className="pm-arch">
      <div className="pm-arch-intro">
        <h3>Sous le capot</h3>
        <p>Architecture & infrastructure de SmartLife en production</p>
      </div>
      <div className="pm-arch-grid">
        {data.items.map(item => (
          <div className="pm-arch-item" key={item.label}>
            <span className="pm-arch-icon">{item.icon}</span>
            <div className="pm-arch-text">
              <span className="pm-arch-label">{item.label}</span>
              <span className="pm-arch-value">{item.value}</span>
            </div>
          </div>
        ))}
      </div>
      <button className="pm-arch-back" onClick={onBack}>← Retour aux démos</button>
    </div>
  )
}
