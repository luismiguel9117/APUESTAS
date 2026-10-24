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
  { id: 1, category: 'PREMIER LEAGUE', title: 'Man City can win Chelsea in crucial derby', time: '14 min ago' },
  { id: 2, category: 'LA LIGA', title: 'Football has always been a strategic battleground', time: '42 min ago' },
  { id: 3, category: 'CHAMPIONS LEAGUE', title: 'Tactical breakdown: pressing triggers and transition', time: '1 hr ago' },
  { id: 4, category: 'MERCADO DE FICHAJES', title: 'Top European clubs scouting South American talents', time: '2 hrs ago' },
];

export default function NoticiasPage() {
  const [activeSide, setActiveSide] = useState('football');

  return (
    <div className="cz-news-layout">
      {/* 1. TOPBAR HEADER UNIFICADO */}
      <header className="cz-portal-header">
        <div className="cz-portal-header__left">
          <button className="cz-portal-burger" type="button" aria-label="Abrir menú">
            <span />
            <span />
            <span />
          </button>
          <Link href="/" className="cz-portal-logo">
            <span className="cz-portal-logo__text">Chuzonic<span className="cz-portal-logo__red">Play</span></span>
          </Link>
        </div>

        <nav className="cz-portal-nav" aria-label="Navegación principal">
          <Link href="/" className="cz-portal-nav__link">Inicio</Link>
          <Link href="/noticias" className="cz-portal-nav__link is-active">Noticias</Link>
          <Link href="/odds-calculator" className="cz-portal-nav__link">Odds Calculator</Link>
        </nav>

        <div className="cz-portal-header__right">
          <div className="cz-portal-search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input type="text" placeholder="Search Premier League, Champions, Arsenal..." />
          </div>
          <button type="button" className="cz-portal-btn cz-portal-btn--ghost">Iniciar sesión</button>
          <button type="button" className="cz-portal-btn cz-portal-btn--primary">Regístrate</button>
        </div>
      </header>

      {/* 2. BODY CON SIDEBAR IZQUIERDO DE DEPORTES + STAGE HERO CENTRAL + WIDGETS DERECHOS */}
      <div className="cz-news-body">
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
              <path d="M6 12a6 6 0 0 1 12 0" />
              <path d="M12 6a6 6 0 0 1 0 12" />
            </svg>
          </button>

          <button
            type="button"
            className={`cz-sports-icon-btn ${activeSide === 'baseball' ? 'is-active' : ''}`}
            onClick={() => setActiveSide('baseball')}
            title="Béisbol"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M9 12a3 3 0 0 1 6 0" />
            </svg>
          </button>

          <button
            type="button"
            className={`cz-sports-icon-btn ${activeSide === 'poker' ? 'is-active' : ''}`}
            onClick={() => setActiveSide('poker')}
            title="Póker"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M12 8v8" />
              <path d="M8 12h8" />
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

        {/* ÁREA CENTRAL PRINCIPAL */}
        <main className="cz-news-main">
          {/* STAGE HERO DE LA NOTICIA DESTACADA */}
          <div className="cz-news-stage">
            {/* FONDO OSCURO CON JUGADOR EN PRIMER PLANO */}
            <div className="cz-news-stage__backdrop" />

            {/* CONTENIDO SUPERPUESTO DE LA NOTICIA */}
            <div className="cz-news-stage__content">
              {/* MATCH PROBABILITY BADGE */}
              <div className="cz-match-prob">
                <div className="cz-prob-circle cz-prob-circle--home">
                  <span>68%</span>
                </div>
                <span className="cz-prob-vs">VS</span>
                <div className="cz-prob-circle cz-prob-circle--away">
                  <span>25%</span>
                </div>
              </div>

              <div className="cz-news-stage__meta">
                <span className="cz-news-tag">FOOTBALL</span>
                <span className="cz-news-divider">•</span>
                <span className="cz-news-subtag">PREMIER LEAGUE</span>
              </div>

              <h1 className="cz-news-stage__title">
                ARSENAL AND ATLETICO CHASING LAUTARO MARTINEZ
              </h1>

              <p className="cz-news-stage__excerpt">
                According to reports in Argentina, Atletico Madrid have agreed a £10.75m deal to bring the 20 year-old striker to Spain with high expectations for the Champions League run.
              </p>

              {/* CUOTAS / ODDS EN VIVO DE CASAS DE APUESTAS */}
              <div className="cz-news-odds">
                <div className="cz-odd-pill cz-odd-pill--bwin">
                  <span className="cz-bookie-name">bwin</span>
                  <span className="cz-odd-value">1X 3.23</span>
                </div>

                <div className="cz-odd-pill cz-odd-pill--bet365">
                  <span className="cz-bookie-name">bet365</span>
                  <span className="cz-odd-value">1 1.34</span>
                </div>

                <div className="cz-odd-pill cz-odd-pill--mybet">
                  <span className="cz-bookie-name">mybet</span>
                  <span className="cz-odd-value">2X 6.42</span>
                </div>
              </div>
            </div>

            {/* SIDEBAR DERECHO DENTRO DEL STAGE: WIDGET PARTIDO EN VIVO + ACCESOS RÁPIDOS */}
            <aside className="cz-news-stage__sidebar">
              {/* SCOREBOARD EN VIVO */}
              <div className="cz-match-scoreboard">
                <div className="cz-match-scoreboard__head">
                  <span className="cz-tournament">Champions League</span>
                  <span className="cz-match-score">2 : 1</span>
                </div>
                <div className="cz-match-scoreboard__teams">
                  <div className="cz-team">
                    <div className="cz-team-crest">NK</div>
                    <span className="cz-team-name">NK Maribor</span>
                  </div>
                  <span className="cz-match-minute">Game (55, 78)</span>
                  <div className="cz-team">
                    <div className="cz-team-crest cz-team-crest--lfc">LFC</div>
                    <span className="cz-team-name">Liverpool</span>
                  </div>
                </div>

                <div className="cz-scoreboard-odds">
                  <div className="cz-sb-odd cz-sb-odd--green">bet365 <span>2.42</span></div>
                  <div className="cz-sb-odd cz-sb-odd--white">1X <span>2.38</span></div>
                  <div className="cz-sb-odd cz-sb-odd--green">bet365 <span>5.45</span></div>
                </div>
              </div>

              {/* QUICK HUBS (SPORTS, CASINO, LIVE, GAMES, NEWS, ESPORTS) */}
              <div className="cz-quick-hubs">
                <Link href="/" className="cz-hub-item">
                  <div className="cz-hub-icon">⚽</div>
                  <span>Sports</span>
                </Link>

                <Link href="/odds-calculator" className="cz-hub-item">
                  <div className="cz-hub-icon">🎲</div>
                  <span>Póker & Casino</span>
                </Link>

                <Link href="/en-vivo" className="cz-hub-item">
                  <div className="cz-hub-icon">📺</div>
                  <span>Live Stream</span>
                </Link>

                <Link href="/games" className="cz-hub-item">
                  <div className="cz-hub-icon">🎮</div>
                  <span>Games</span>
                </Link>

                <Link href="/noticias" className="cz-hub-item is-active">
                  <div className="cz-hub-icon">📰</div>
                  <span>News</span>
                </Link>

                <Link href="/esports" className="cz-hub-item">
                  <div className="cz-hub-icon">🕹️</div>
                  <span>CyberSport</span>
                </Link>
              </div>
            </aside>
          </div>

          {/* BARRA INFERIOR DE NOTICIAS SECUNDARIAS (STRIP HORIZONTAL) */}
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
