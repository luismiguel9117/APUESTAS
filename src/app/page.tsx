'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  HotNewsSection,
  LatestMaterialsSection,
  PokerEducationSection,
  QuickToolsBannersSection,
  QuizSection,
  YouTubeShortsSection,
  NewsletterSection,
  PokerSoftwareSection,
  FooterSection,
} from '@/components/PokerListingsSections';
import { InteractiveController } from '@/components/InteractiveController';

interface HeroNewsItem {
  id: number;
  category: string;
  categoryColor: 'red' | 'blue' | 'gold';
  title: string;
  excerpt: string;
  date: string;
  author: string;
  url: string;
}

const POKER_NEWS_ITEMS: HeroNewsItem[] = [
  {
    id: 1,
    category: 'WSOP PARADISE',
    categoryColor: 'red',
    title: 'WSOP Paradise 2026: La mesa final reparte más de $10M y consagra un nuevo campeón',
    excerpt: 'Cobertura exclusiva de la definición en Bahamas con manos históricas y análisis de faroles en river.',
    date: 'Hace 25 min',
    author: 'Redacción Póker',
    url: '#noticias-poker',
  },
  {
    id: 2,
    category: 'ESTRATEGIA & ODDS',
    categoryColor: 'gold',
    title: 'Cálculo de Equity en el Flop: Cómo utilizar la Odds Calculator para dominar botes multijugador',
    excerpt: 'Aprende a transformar outs en porcentajes de victoria exactos y maximiza tu valor esperado (EV).',
    date: 'Hace 1 hora',
    author: 'Pro Strategy',
    url: '/odds-calculator',
  },
  {
    id: 3,
    category: 'HIGH ROLLER',
    categoryColor: 'blue',
    title: 'Triton Poker Series: Adrián Mateos logra otra victoria épica en el torneo de $100,000',
    excerpt: 'El jugador español desplegó una masterclass de rangos de presión para remontar el heads-up definitivo.',
    date: 'Hace 3 horas',
    author: 'Circuito Mundial',
    url: '#noticias-poker',
  },
  {
    id: 4,
    category: 'ESCUELA DE PÓKER',
    categoryColor: 'red',
    title: 'Texas Hold\'em: Errores comunes al defender la Ciega Grande y cómo corregirlos',
    excerpt: 'Descubre los rangos de call y 3-bet óptimos contra subidas de botón y posiciones tardías.',
    date: 'Hace 5 horas',
    author: 'Escuela Chuzonic',
    url: '#educacion-poker',
  },
];

const SPORTS_NEWS_ITEMS: HeroNewsItem[] = [
  {
    id: 1,
    category: 'CHAMPIONS LEAGUE',
    categoryColor: 'blue',
    title: 'Champions League: Cuotas, probabilidades y previa táctica para los cuartos de final',
    excerpt: 'Análisis detallado de posesión, goles esperados (xG) y cuotas con valor en las principales casas.',
    date: 'Hace 15 min',
    author: 'Deportes Chuzonic',
    url: '/noticias',
  },
  {
    id: 2,
    category: 'LALIGA',
    categoryColor: 'red',
    title: 'El Clásico Español: Comparativa de cuotas clave para el duelo en el Santiago Bernabéu',
    excerpt: 'Tendencias recientes, bajas cruciales y pronóstico de probabilidad de victoria según los algoritmos.',
    date: 'Hace 45 min',
    author: 'Redacción Deportes',
    url: '/noticias',
  },
  {
    id: 3,
    category: 'PREMIER LEAGUE',
    categoryColor: 'blue',
    title: 'Premier League: Jornada decisiva en la lucha por el título y los puestos europeos',
    excerpt: 'El City y el Arsenal se disputan la cima con probabilidades ajustadas a solo 3 puntos de diferencia.',
    date: 'Hace 2 horas',
    author: 'Fútbol Internacional',
    url: '/noticias',
  },
  {
    id: 4,
    category: 'NBA PLAYOFFS',
    categoryColor: 'gold',
    title: 'NBA Playoffs: Los favoritos al anillo según los modelos matemáticos y cuotas de la semana',
    excerpt: 'Las defensas perimetrales y el rating ofensivo inclinan las proyecciones en las series de conferencia.',
    date: 'Hace 4 horas',
    author: 'Basket Analytics',
    url: '/noticias',
  },
];

export default function HomePage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'poker' | 'odds' | 'sports'>('poker');

  return (
    <div className="cz-portal-app">
      <InteractiveController />

      {/* 1. BARRA FLOTANTE CON HAMBURGUESA & LOGO (SIN BARRA SUPERIOR PESADA) */}
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
          <Link href="/" className="cz-floating-pill is-active">Inicio</Link>
          <Link href="/noticias" className="cz-floating-pill">Noticias</Link>
          <Link href="/odds-calculator" className="cz-floating-pill">Odds Calculator</Link>
        </div>
      </div>

      {/* 2. DRAWER DESPLEGABLE QUE FUNCIONA COMO NAVBAR */}
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
            <input type="text" placeholder="Buscar noticias, póker, cuotas..." />
          </div>

          <div>
            <div className="cz-drawer-section-title">Navegación Principal</div>
            <nav className="cz-drawer-nav-list">
              <Link href="/" className="cz-drawer-nav-item is-active" onClick={() => setIsDrawerOpen(false)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                <span>Inicio</span>
              </Link>

              <Link href="/noticias" className="cz-drawer-nav-item" onClick={() => setIsDrawerOpen(false)}>
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
            <div className="cz-drawer-section-title">Póker & Contenidos</div>
            <nav className="cz-drawer-nav-list">
              <a href="#noticias-poker" className="cz-drawer-nav-item" onClick={() => setIsDrawerOpen(false)}>
                <span style={{ fontSize: '15px' }}>🂡</span>
                <span>Noticias de Póker</span>
              </a>

              <a href="#educacion-poker" className="cz-drawer-nav-item" onClick={() => setIsDrawerOpen(false)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
                <span>Estrategia & Escuela</span>
              </a>

              <a href="#quiz-poker" className="cz-drawer-nav-item" onClick={() => setIsDrawerOpen(false)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <span>Quiz de Manos</span>
              </a>

              <a href="#herramientas" className="cz-drawer-nav-item" onClick={() => setIsDrawerOpen(false)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
                <span>Herramientas Profesionales</span>
              </a>
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

      {/* 3. CONTENIDO PRINCIPAL FLUIDO A PANTALLA COMPLETA */}
      <div className="cz-portal-viewport">
        <div className="cz-portal-main-stream">
          {/* HERO PRINCIPAL */}
          <section className="cz-portal-hero-section">
            <div className="cz-portal-hero">
              {/* COLUMNA IZQUIERDA: NOTICIAS Y ODDS CALCULATOR */}
              <div className="cz-portal-hero__left">
                <div className="cz-kicker-badge">
                  <span className="cz-kicker-badge__line" />
                  <span>CHUZONICPLAY • PORTAL DEPORTIVO & PÓKER</span>
                </div>

                <h1 className="cz-portal-hero__title">
                  Noticias, Probabilidades y <br />
                  <span className="cz-portal-hero__title-red">Estrategia de Póker</span>
                </h1>

                <p className="cz-portal-hero__desc">
                  Tu centro especializado en información deportiva en tiempo real, cobertura completa del circuito internacional de póker y la calculadora de probabilidades más precisa para Texas Hold&apos;em.
                </p>

                {/* TABS DE ENFOQUE: NOTICIAS PÓKER, ODDS CALCULATOR, NOTICIAS DEPORTIVAS */}
                <div className="cz-promo-tabs" role="tablist">
                  <button
                    type="button"
                    className={`cz-promo-tab ${activeTab === 'poker' ? 'is-active' : ''}`}
                    onClick={() => setActiveTab('poker')}
                  >
                    <span className="cz-tab-icon">🂡</span>
                    Noticias de Póker
                  </button>

                  <button
                    type="button"
                    className={`cz-promo-tab ${activeTab === 'odds' ? 'is-active' : ''}`}
                    onClick={() => setActiveTab('odds')}
                  >
                    <span className="cz-tab-icon">🧮</span>
                    Odds Calculator
                  </button>

                  <button
                    type="button"
                    className={`cz-promo-tab ${activeTab === 'sports' ? 'is-active' : ''}`}
                    onClick={() => setActiveTab('sports')}
                  >
                    <span className="cz-tab-icon">⚽</span>
                    Noticias Deportivas
                  </button>
                </div>

                {/* CONTENIDO DEL TAB ACTIVO */}
                {activeTab === 'poker' && (
                  <div className="cz-news-list">
                    {POKER_NEWS_ITEMS.map((item) => (
                      <Link key={item.id} href={item.url} className="cz-news-card">
                        <div className="cz-news-card__top">
                          <span className={`cz-news-badge cz-news-badge--${item.categoryColor}`}>
                            {item.category}
                          </span>
                          <span className="cz-news-card__date">{item.date}</span>
                        </div>
                        <h3 className="cz-news-card__title">{item.title}</h3>
                        <p className="cz-news-card__excerpt">{item.excerpt}</p>
                        <div className="cz-news-card__bottom">
                          <span className="cz-news-card__author">Por {item.author}</span>
                          <span className="cz-news-card__cta">Leer análisis →</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {activeTab === 'odds' && (
                  <div className="cz-odds-hero-block">
                    <div className="cz-odds-hero-header">
                      <h2 className="cz-odds-hero-title">
                        <span>🧮</span> Calculadora de Probabilidades Texas Hold&apos;em
                      </h2>
                      <p className="cz-odds-hero-desc">
                        Simula millones de manos en milisegundos. Calcula el porcentaje exacto de victoria (Win), empate (Tie) y outs en Flop, Turn y River.
                      </p>
                    </div>

                    <div className="cz-odds-preview-table">
                      <div className="cz-odds-matchup">
                        <div className="cz-odds-player-box">
                          <div className="cz-odds-player-header">
                            <span>Jugador 1</span>
                            <span className="cz-odds-player-pct">58.2%</span>
                          </div>
                          <div className="cz-odds-cards-row">
                            <div className="cz-mini-card cz-mini-card--spade">
                              <span>A</span>
                              <span>♠</span>
                            </div>
                            <div className="cz-mini-card cz-mini-card--spade">
                              <span>K</span>
                              <span>♠</span>
                            </div>
                          </div>
                        </div>

                        <div className="cz-odds-vs-badge">VS</div>

                        <div className="cz-odds-player-box">
                          <div className="cz-odds-player-header">
                            <span>Jugador 2</span>
                            <span className="cz-odds-player-pct">40.5%</span>
                          </div>
                          <div className="cz-odds-cards-row">
                            <div className="cz-mini-card cz-mini-card--heart">
                              <span>Q</span>
                              <span>♥</span>
                            </div>
                            <div className="cz-mini-card cz-mini-card--diamond">
                              <span>Q</span>
                              <span>♦</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="cz-odds-community-row">
                        <span className="cz-odds-community-label">Mesa (Flop):</span>
                        <div className="cz-mini-card cz-mini-card--spade">
                          <span>J</span>
                          <span>♠</span>
                        </div>
                        <div className="cz-mini-card cz-mini-card--spade">
                          <span>10</span>
                          <span>♠</span>
                        </div>
                        <div className="cz-mini-card cz-mini-card--diamond">
                          <span>2</span>
                          <span>♦</span>
                        </div>
                      </div>
                    </div>

                    <div className="cz-odds-hero-actions">
                      <Link href="/odds-calculator" className="cz-odds-hero-btn">
                        <span>Abrir Mesa Interactiva & Odds Calculator Completa</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                )}

                {activeTab === 'sports' && (
                  <div className="cz-news-list">
                    {SPORTS_NEWS_ITEMS.map((item) => (
                      <Link key={item.id} href={item.url} className="cz-news-card">
                        <div className="cz-news-card__top">
                          <span className={`cz-news-badge cz-news-badge--${item.categoryColor}`}>
                            {item.category}
                          </span>
                          <span className="cz-news-card__date">{item.date}</span>
                        </div>
                        <h3 className="cz-news-card__title">{item.title}</h3>
                        <p className="cz-news-card__excerpt">{item.excerpt}</p>
                        <div className="cz-news-card__bottom">
                          <span className="cz-news-card__author">Por {item.author}</span>
                          <span className="cz-news-card__cta">Ver previas y cuotas →</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* COLUMNA DERECHA: FICHAS EN PNG TRANSPARENTE FLOTANDO SIN RECUADRO Y ESTO ES CHUZONICPLAY */}
              <div className="cz-portal-hero__right">
                <div className="cz-hero-illustration">
                  <img
                    src="/assets/chuzonic/poker-chips-cards.png"
                    alt="Chuzonic Poker chips and cards"
                    className="cz-hero-illustration__img"
                  />
                </div>

                <div className="cz-about-chuzonic">
                  <h2 className="cz-about-chuzonic__title">Esto es ChuzonicPlay</h2>
                  <p className="cz-about-chuzonic__desc">
                    El portal enfocado en información de valor: noticias deportivas verificadas, actualidad del póker profesional y herramientas analíticas sin elementos sobrantes.
                  </p>

                  <div className="cz-features-grid">
                    <div className="cz-feature-item">
                      <div className="cz-feature-icon cz-feature-icon--red">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                          <path d="M2 12h20" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="cz-feature-item__title">Noticias en Tiempo Real</h3>
                        <p className="cz-feature-item__desc">Cobertura al minuto de deportes y póker internacional.</p>
                      </div>
                    </div>

                    <div className="cz-feature-item">
                      <div className="cz-feature-icon cz-feature-icon--red">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <path d="M12 8v8" />
                          <path d="M8 12h8" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="cz-feature-item__title">Calculadora de Odds</h3>
                        <p className="cz-feature-item__desc">Probabilidades matemáticas exactas para Texas Hold&apos;em.</p>
                      </div>
                    </div>

                    <div className="cz-feature-item">
                      <div className="cz-feature-icon cz-feature-icon--red">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="cz-feature-item__title">Estrategia & Rangos</h3>
                        <p className="cz-feature-item__desc">Guías tácticas para mejorar tu toma de decisiones.</p>
                      </div>
                    </div>

                    <div className="cz-feature-item">
                      <div className="cz-feature-icon cz-feature-icon--red">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="cz-feature-item__title">100% Gratuito y Libre</h3>
                        <p className="cz-feature-item__desc">Sin registros obligatorios ni publicidad intrusiva.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3 BANNERS INFERIORES: ACCESOS DIRECTOS */}
            <div className="cz-portal-banners">
              <Link href="/odds-calculator" className="cz-portal-banner-card cz-portal-banner-card--poker">
                <div className="cz-portal-banner-card__content">
                  <span className="cz-banner-tag cz-banner-tag--red">● HERRAMIENTA PRO</span>
                  <h3 className="cz-portal-banner-card__title">Odds Calculator en Vivo</h3>
                  <p className="cz-portal-banner-card__desc">Calcula tus probabilidades de ganar o empatar en tiempo real con la mesa interactiva.</p>
                </div>
                <div className="cz-portal-banner-card__action">
                  <span className="cz-banner-circle-btn cz-banner-circle-btn--red">→</span>
                </div>
              </Link>

              <a href="#noticias-poker" className="cz-portal-banner-card cz-portal-banner-card--casino">
                <div className="cz-portal-banner-card__content">
                  <span className="cz-banner-tag cz-banner-tag--blue">PÓKER MUNDIAL</span>
                  <h3 className="cz-portal-banner-card__title">Noticias y Torneos de Póker</h3>
                  <p className="cz-portal-banner-card__desc">WSOP, Triton Series, EPT y las jugadas más destacadas de las mesas finales.</p>
                </div>
                <div className="cz-portal-banner-card__action">
                  <span className="cz-banner-circle-btn cz-banner-circle-btn--blue">→</span>
                </div>
              </a>

              <Link href="/noticias" className="cz-portal-banner-card cz-portal-banner-card--sports">
                <div className="cz-portal-banner-card__content">
                  <span className="cz-banner-tag cz-banner-tag--red">● NOTICIAS DEPORTIVAS</span>
                  <h3 className="cz-portal-banner-card__title">Fútbol, Cuotas y Marcadores</h3>
                  <p className="cz-portal-banner-card__desc">Previas estadísticas, cuotas de valor y análisis para los partidos de la semana.</p>
                </div>
                <div className="cz-portal-banner-card__action">
                  <span className="cz-banner-circle-btn cz-banner-circle-btn--red">→</span>
                </div>
              </Link>
            </div>
          </section>

          {/* STREAM DE CONTENIDO CONTINUO (ENFOCADO EN NOTICIAS, PÓKER Y HERRAMIENTAS) */}
          <section className="cz-portal-content-stream">
            <div className="cz-stream-container">
              {/* NOTICIAS CALIENTES */}
              <div id="noticias-poker" className="cz-stream-block">
                <HotNewsSection />
              </div>

              {/* ÚLTIMOS MATERIALES Y ARTÍCULOS */}
              <div className="cz-stream-block">
                <LatestMaterialsSection />
              </div>

              {/* EDUCACIÓN DE PÓKER Y GUÍAS TÁCTICAS */}
              <div id="educacion-poker" className="cz-stream-block">
                <PokerEducationSection />
              </div>

              {/* HERRAMIENTAS Y CALCULADORAS */}
              <div id="herramientas" className="cz-stream-block">
                <QuickToolsBannersSection />
              </div>

              {/* QUIZ INTERACTIVO */}
              <div id="quiz-poker" className="cz-stream-block">
                <QuizSection />
              </div>

              {/* SOFTWARE PROFESIONAL */}
              <div className="cz-stream-block">
                <PokerSoftwareSection />
              </div>

              {/* VIDEOS Y ANÁLISIS */}
              <div className="cz-stream-block">
                <YouTubeShortsSection />
              </div>

              {/* NEWSLETTER */}
              <div className="cz-stream-block">
                <NewsletterSection />
              </div>
            </div>

            {/* FOOTER */}
            <FooterSection />
          </section>
        </div>
      </div>
    </div>
  );
}