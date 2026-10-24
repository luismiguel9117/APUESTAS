'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface SubNewsItem {
  id: number;
  category: string;
  title: string;
  time: string;
}

const BOTTOM_NEWS: SubNewsItem[] = [
  { id: 1, category: 'PREMIER LEAGUE', title: 'Manchester City vs Chelsea: Previa táctica y cuotas clave', time: '14 min ago' },
  { id: 2, category: 'LA LIGA', title: 'El Clásico: Análisis de goles esperados (xG) y cuotas de valor', time: '42 min ago' },
  { id: 3, category: 'CHAMPIONS LEAGUE', title: 'Cuartos de final: Proyecciones matemáticas de clasificación', time: '1 hr ago' },
  { id: 4, category: 'NOTICIAS PÓKER', title: 'WSOP: Récord de registros y cobertura en vivo de la mesa final', time: '2 hrs ago' },
];

export default function NoticiasPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSide, setActiveSide] = useState('football');

  return (
    <div className="cz-news-layout">
      {/* 1. BARRA FLOTANTE CON HAMBURGUESA & LOGO */}
      <div className="cz-floating-nav-bar">
        <button
          type="button"
          className="cz-hamburger-btn"
          onClick={() => setIsDrawerOpen(true)}
          aria-label="Abrir menú de navegación"
        >
          <span />
          <span />
          <span />
        </button>

        <Link href="/" className="cz-portal-logo">
          <span className="cz-portal-logo__text">Chuzonic<span className="cz-portal-logo__red">Play</span></span>
        </Link>

        <div className="cz-floating-quick-links">
          <Link href="/" className="cz-floating-pill">Inicio</Link>
          <Link href="/noticias" className="cz-floating-pill is-active">Noticias</Link>
          <Link href="/odds-calculator" className="cz-floating-pill">Odds Calculator</Link>
        </div>
      </div>

      {/* 2. DRAWER DESPLEGABLE */}
      <div
        className={`cz-drawer-backdrop ${isDrawerOpen ? 'is-open' : ''}`}
        onClick={() => setIsDrawerOpen(false)}
      />

      <aside className={`cz-drawer-sidebar ${isDrawerOpen ? 'is-open' : ''}`}>
        <div className="cz-drawer-header">
          <Link href="/" className="cz-portal-logo" onClick={() => setIsDrawerOpen(false)}>
            <span className="cz-portal-logo__text">Chuzonic<span className="cz-portal-logo__red">Play</span></span>
          </Link>
          <button
            type="button"
            className="cz-drawer-close"
            onClick={() => setIsDrawerOpen(false)}
            aria-label="Cerrar menú"
          >
            ✕
          </button>
        </div>

        <div className="cz-drawer-body">
          <div className="cz-drawer-search">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input type="text" placeholder="Buscar partidos, cuotas, póker..." />
          </div>

          <div>
            <div className="cz-drawer-section-title">Navegación Principal</div>
            <nav className="cz-drawer-nav-list">
              <Link href="/" className="cz-drawer-nav-item" onClick={() => setIsDrawerOpen(false)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                <span>Inicio</span>
              </Link>

              <Link href="/noticias" className="cz-drawer-nav-item is-active" onClick={() => setIsDrawerOpen(false)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                  <path d="M18 14h-8M15 18h-5M18 6h-8" />
                </svg>
                <span>Noticias Deportivas</span>
              </Link>

              <Link href="/odds-calculator" className="cz-drawer-nav-item" onClick={() => setIsDrawerOpen(false)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M12 8v8" />
                  <path d="M8 12h8" />
                </svg>
                <span>Odds Calculator</span>
                <span className="cz-drawer-nav-badge">HOT</span>
              </Link>
            </nav>
          </div>

          <div>
            <div className="cz-drawer-section-title">Póker & Estrategia</div>
            <nav className="cz-drawer-nav-list">
              <Link href="/#noticias-poker" className="cz-drawer-nav-item" onClick={() => setIsDrawerOpen(false)}>
                <span style={{ fontSize: '15px' }}>🂡</span>
                <span>Noticias de Póker</span>
              </Link>

              <Link href="/#educacion-poker" className="cz-drawer-nav-item" onClick={() => setIsDrawerOpen(false)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
                <span>Escuela & Rangos</span>
              </Link>

              <Link href="/#herramientas" className="cz-drawer-nav-item" onClick={() => setIsDrawerOpen(false)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
                <span>Herramientas Profesionales</span>
              </Link>
            </nav>
          </div>
        </div>

        <div className="cz-drawer-footer">
          <Link href="/odds-calculator" className="cz-drawer-cta" onClick={() => setIsDrawerOpen(false)}>
            <span>🧮 Abrir Odds Calculator</span>
            <span>→</span>
          </Link>
        </div>
      </aside>

      {/* 3. BODY PRINCIPAL DEPORTIVO */}
      <div className="cz-news-body" style={{ paddingTop: '80px' }}>
        {/* SIDEBAR VERTICAL DEPORTIVO IZQUIERDO */}
        <aside className="cz-sports-sidebar">
          <button
            type="button"
            className={`cz-sports-icon-btn ${activeSide === 'football' ? 'is-active' : ''}`}
            onClick={() => setActiveSide('football')}
            title="Fútbol"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
          </button>

          <button
            type="button"
            className={`cz-sports-icon-btn ${activeSide === 'basketball' ? 'is-active' : ''}`}
            onClick={() => setActiveSide('basketball')}
            title="Baloncesto"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M4.93 4.93l14.14 14.14" />
              <path d="M19.07 4.93L4.93 19.07" />
            </svg>
          </button>

          <button
            type="button"
            className={`cz-sports-icon-btn ${activeSide === 'tennis' ? 'is-active' : ''}`}
            onClick={() => setActiveSide('tennis')}
            title="Tenis"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M6 12a6 6 0 0 1 6-6" />
              <path d="M18 12a6 6 0 0 1-6 6" />
            </svg>
          </button>

          <button
            type="button"
            className={`cz-sports-icon-btn ${activeSide === 'esports' ? 'is-active' : ''}`}
            onClick={() => setActiveSide('esports')}
            title="Esports"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="6" width="20" height="12" rx="2" />
              <path d="M6 12h4m-2-2v4" />
              <circle cx="15" cy="11" r="1" />
              <circle cx="17" cy="13" r="1" />
            </svg>
          </button>
        </aside>

        {/* CONTENIDO CENTRAL DE NOTICIAS */}
        <main className="cz-news-main">
          <div className="cz-news-grid">
            {/* STAGE HERO CENTRAL: PARTIDO Y NOTICIA PRINCIPAL */}
            <section className="cz-news-hero">
              <div className="cz-match-banner">
                <div className="cz-match-team">
                  <span className="cz-match-team__flag">🇪🇸</span>
                  <span className="cz-match-team__name">Real Madrid</span>
                </div>
                <div className="cz-match-vs">
                  <span className="cz-match-badge">PREVIA TÁCTICA</span>
                  <span className="cz-match-time">21:00 CEST</span>
                </div>
                <div className="cz-match-team">
                  <span className="cz-match-team__name">Barcelona</span>
                  <span className="cz-match-team__flag">🇪🇸</span>
                </div>
              </div>

              <div className="cz-news-headline-box">
                <span className="cz-kicker-red">LALIGA EA SPORTS • JORNADA DECISIVA</span>
                <h1 className="cz-news-hero__title">
                  El Clásico bajo el prisma del Big Data: Presión alta, transiciones y probabilidades
                </h1>
                <p className="cz-news-hero__desc">
                  Analizamos los patrones de circulación, la generación de ocasiones y las cuotas de valor en el enfrentamiento más esperado de la temporada.
                </p>

                <div className="cz-news-odds-strip">
                  <div className="cz-odds-pill">
                    <span className="cz-odds-label">1 (Madrid)</span>
                    <span className="cz-odds-val">2.15</span>
                  </div>
                  <div className="cz-odds-pill">
                    <span className="cz-odds-label">X (Empate)</span>
                    <span className="cz-odds-val">3.60</span>
                  </div>
                  <div className="cz-odds-pill">
                    <span className="cz-odds-label">2 (Barça)</span>
                    <span className="cz-odds-val">3.10</span>
                  </div>
                  <div className="cz-odds-pill cz-odds-pill--prob">
                    <span className="cz-odds-label">Prob. Victoria Local</span>
                    <span className="cz-odds-val cz-odds-val--green">46.5%</span>
                  </div>
                </div>
              </div>
            </section>

            {/* BARRA LATERAL DERECHA: WIDGETS Y CLASIFICACIONES */}
            <aside className="cz-news-right-col">
              <div className="cz-widget-card cz-widget-card--scoreboard">
                <div className="cz-widget-card__header">
                  <span className="cz-live-dot" />
                  <h3>Marcadores en Vivo</h3>
                </div>
                <div className="cz-live-matches">
                  <div className="cz-live-match-row">
                    <div className="cz-live-match-teams">
                      <span>Arsenal</span>
                      <span>Chelsea</span>
                    </div>
                    <div className="cz-live-match-score">
                      <span>2</span>
                      <span>1</span>
                    </div>
                    <span className="cz-live-match-min">78&apos;</span>
                  </div>

                  <div className="cz-live-match-row">
                    <div className="cz-live-match-teams">
                      <span>PSG</span>
                      <span>Marseille</span>
                    </div>
                    <div className="cz-live-match-score">
                      <span>1</span>
                      <span>1</span>
                    </div>
                    <span className="cz-live-match-min">62&apos;</span>
                  </div>
                </div>
              </div>

              {/* ACCESOS RÁPIDOS */}
              <div className="cz-quick-hubs">
                <Link href="/" className="cz-hub-item">
                  <div className="cz-hub-icon">🏠</div>
                  <span>Inicio</span>
                </Link>

                <Link href="/odds-calculator" className="cz-hub-item">
                  <div className="cz-hub-icon">🧮</div>
                  <span>Odds Calculator</span>
                </Link>

                <Link href="/#noticias-poker" className="cz-hub-item">
                  <div className="cz-hub-icon">🂡</div>
                  <span>Póker News</span>
                </Link>

                <Link href="/noticias" className="cz-hub-item is-active">
                  <div className="cz-hub-icon">📰</div>
                  <span>Deportes</span>
                </Link>
              </div>
            </aside>
          </div>

          {/* BARRA INFERIOR DE NOTICIAS SECUNDARIAS */}
          <div className="cz-bottom-news-strip">
            {BOTTOM_NEWS.map((item) => (
              <div key={item.id} className="cz-bottom-news-card">
                <div className="cz-card-bullet">⚽</div>
                <div className="cz-card-text">
                  <span className="cz-card-category">{item.category}</span>
                  <h4 className="cz-card-title">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}