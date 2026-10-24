'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface PartnerPromo {
  id: number;
  name: string;
  badge?: string;
  bonus: string;
  subBonus: string;
  rating: string;
  logo: string;
  reviewUrl: string;
  siteUrl: string;
}

const POKER_PROMOS: PartnerPromo[] = [
  {
    id: 1,
    name: 'CoinPoker',
    badge: 'RECOMENDADO',
    bonus: '150% hasta $2,000',
    subBonus: 'Bono de bienvenida + rakeback exclusivo',
    rating: '4.8',
    logo: '/assets/aff-data/partners/coinpoker.svg',
    reviewUrl: '#',
    siteUrl: 'https://coinpoker.com',
  },
  {
    id: 2,
    name: 'Americas Cardroom',
    bonus: '100% hasta $2,000',
    subBonus: 'Bono de bienvenida',
    rating: '4.6',
    logo: '/assets/aff-data/partners/americas-cardroom.svg',
    reviewUrl: '#',
    siteUrl: '#',
  },
  {
    id: 3,
    name: 'GGPoker',
    bonus: '100% hasta $600',
    subBonus: 'Bono de bienvenida + torneos exclusivos',
    rating: '4.5',
    logo: '/assets/aff-data/partners/ggpoker.svg',
    reviewUrl: '#',
    siteUrl: '#',
  },
  {
    id: 4,
    name: 'JackPoker',
    bonus: '300% hasta $2,000',
    subBonus: 'Bono de bienvenida',
    rating: '4.4',
    logo: '/assets/aff-data/partners/jackpoker.svg',
    reviewUrl: '#',
    siteUrl: '#',
  },
  {
    id: 5,
    name: 'BC Poker',
    bonus: '$5 gratis + 100% hasta $200',
    subBonus: 'Sin depósito + bono de bienvenida',
    rating: '4.3',
    logo: '/assets/aff-data/partners/bc-poker.svg',
    reviewUrl: '#',
    siteUrl: '#',
  },
];

const CASINO_PROMOS: PartnerPromo[] = [
  {
    id: 1,
    name: 'BC.Game Casino',
    badge: 'TOP CASINO',
    bonus: '300% hasta $20,000',
    subBonus: 'Giros gratis diarios + recargas crypto',
    rating: '4.9',
    logo: '/assets/aff-data/partners/bcgame-casino.svg',
    reviewUrl: '#',
    siteUrl: '#',
  },
  {
    id: 2,
    name: '1Win Casino',
    bonus: '500% en primeros 4 depósitos',
    subBonus: 'Hasta $1,000 + 70 Tiradas Gratis',
    rating: '4.7',
    logo: '/assets/aff-data/partners/1win-casino.svg',
    reviewUrl: '#',
    siteUrl: '#',
  },
  {
    id: 3,
    name: 'Betsson Casino',
    bonus: '100% hasta $100 + 50 Tiradas',
    subBonus: 'Promociones semanales exclusivas',
    rating: '4.6',
    logo: '/assets/aff-data/partners/betsson-sports.svg',
    reviewUrl: '#',
    siteUrl: '#',
  },
];

const APUESTAS_PROMOS: PartnerPromo[] = [
  {
    id: 1,
    name: '1xBet Deportes',
    badge: 'SUPER CUOTAS',
    bonus: '100% hasta $130',
    subBonus: 'Con código promocional exclusivo',
    rating: '4.8',
    logo: '/assets/aff-data/partners/1xbet.svg',
    reviewUrl: '#',
    siteUrl: '#',
  },
  {
    id: 2,
    name: '888 Sports',
    bonus: '$30 en apuestas gratis',
    subBonus: 'Al apostar tus primeros $10',
    rating: '4.6',
    logo: '/assets/aff-data/partners/888-sports.svg',
    reviewUrl: '#',
    siteUrl: '#',
  },
];

export function ChuzonicHero() {
  const [activeTab, setActiveTab] = useState<'poker' | 'casino' | 'apuestas' | 'sin-deposito' | 'exclusivas'>('poker');
  const [sidebarActive, setSidebarActive] = useState('inicio');

  const getActiveList = () => {
    switch (activeTab) {
      case 'casino':
        return CASINO_PROMOS;
      case 'apuestas':
        return APUESTAS_PROMOS;
      case 'sin-deposito':
        return [POKER_PROMOS[4], CASINO_PROMOS[0]];
      case 'exclusivas':
        return [POKER_PROMOS[0], POKER_PROMOS[2], CASINO_PROMOS[0]];
      case 'poker':
      default:
        return POKER_PROMOS;
    }
  };

  const currentList = getActiveList();

  return (
    <div className="cz-portal-layout">
      {/* 1. TOPBAR HEADER CON: Inicio | Noticias | Odds Calculator */}
      <header className="cz-portal-header">
        <div className="cz-portal-header__left">
          <button className="cz-portal-burger" type="button" aria-label="Abrir menú lateral">
            <span />
            <span />
            <span />
          </button>
          <Link href="/" className="cz-portal-logo">
            <img src="/assets/chuzonic/chuzonic-emblem.webp" alt="Chuzonic" className="cz-portal-logo__emblem" />
            <span className="cz-portal-logo__text">Chuzonic<span className="cz-portal-logo__red">Play</span></span>
          </Link>
        </div>

        <nav className="cz-portal-nav" aria-label="Navegación principal">
          <Link href="/" className="cz-portal-nav__link is-active">Inicio</Link>
          <Link href="/noticias" className="cz-portal-nav__link">Noticias</Link>
          <Link href="/odds-calculator" className="cz-portal-nav__link">Odds Calculator</Link>
        </nav>

        <div className="cz-portal-header__right">
          <div className="cz-portal-search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input type="text" placeholder="Buscar promociones, casas, noticias..." />
          </div>
          <button type="button" className="cz-portal-btn cz-portal-btn--ghost">Iniciar sesión</button>
          <button type="button" className="cz-portal-btn cz-portal-btn--primary">Regístrate</button>
        </div>
      </header>

      {/* 2. BODY CON SIDEBAR + CONTENIDO PRINCIPAL */}
      <div className="cz-portal-body">
        {/* SIDEBAR LATERAL IZQUIERDO */}
        <aside className="cz-portal-sidebar">
          <nav className="cz-portal-sidebar__nav">
            <Link
              href="/"
              className={`cz-sidebar-item ${sidebarActive === 'inicio' ? 'is-active' : ''}`}
              onClick={() => setSidebarActive('inicio')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span>Inicio</span>
            </Link>

            <Link
              href="/noticias"
              className={`cz-sidebar-item ${sidebarActive === 'noticias' ? 'is-active' : ''}`}
              onClick={() => setSidebarActive('noticias')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                <path d="M18 14h-8M15 18h-5M18 6h-8" />
              </svg>
              <span>Noticias</span>
            </Link>

            <Link
              href="/odds-calculator"
              className={`cz-sidebar-item ${sidebarActive === 'poker' ? 'is-active' : ''}`}
              onClick={() => setSidebarActive('poker')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M12 8v8" />
                <path d="M8 12h8" />
              </svg>
              <span>Póker</span>
            </Link>

            <button
              type="button"
              className={`cz-sidebar-item ${sidebarActive === 'futbol' ? 'is-active' : ''}`}
              onClick={() => setSidebarActive('futbol')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
              <span>Fútbol</span>
            </button>

            <button
              type="button"
              className={`cz-sidebar-item ${sidebarActive === 'envivo' ? 'is-active' : ''}`}
              onClick={() => setSidebarActive('envivo')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
              <span>En Vivo</span>
            </button>

            <button
              type="button"
              className={`cz-sidebar-item ${sidebarActive === 'casino' ? 'is-active' : ''}`}
              onClick={() => setSidebarActive('casino')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="6" width="20" height="12" rx="2" />
                <circle cx="12" cy="12" r="2" />
                <path d="M6 12h.01M18 12h.01" />
              </svg>
              <span>Casino</span>
            </button>

            <button
              type="button"
              className={`cz-sidebar-item ${sidebarActive === 'guias' ? 'is-active' : ''}`}
              onClick={() => setSidebarActive('guias')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              <span>Guías</span>
            </button>

            <button
              type="button"
              className={`cz-sidebar-item ${sidebarActive === 'comparativas' ? 'is-active' : ''}`}
              onClick={() => setSidebarActive('comparativas')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
              </svg>
              <span>Comparativas</span>
            </button>

            <button
              type="button"
              className="cz-sidebar-item cz-sidebar-item--more"
              onClick={() => setSidebarActive('mas')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" />
              </svg>
              <span>Más</span>
            </button>
          </nav>
        </aside>

        {/* CONTENIDO CENTRAL */}
        <main className="cz-portal-main">
          {/* BANNER SUPERIOR HERO */}
          <div className="cz-portal-hero">
            {/* COLUMNA IZQUIERDA: TITULO, FILTROS Y TABLA DE PROMOS */}
            <div className="cz-portal-hero__left">
              <div className="cz-kicker-badge">
                <span className="cz-kicker-badge__line" />
                <span>PROMOCIONES Y BONOS</span>
              </div>

              <h1 className="cz-portal-hero__title">
                Las mejores promociones <br />
                <span className="cz-portal-hero__title-red">de póker y casino online</span>
              </h1>

              <p className="cz-portal-hero__desc">
                Compara bonos, beneficios y promociones exclusivas de las principales casas de póker y casino. Encuentra la mejor oferta y empieza a jugar con ventaja.
              </p>

              {/* TABS DE FILTRADO */}
              <div className="cz-promo-tabs" role="tablist">
                <button
                  type="button"
                  className={`cz-promo-tab ${activeTab === 'poker' ? 'is-active' : ''}`}
                  onClick={() => setActiveTab('poker')}
                >
                  <span className="cz-tab-icon">🂡</span>
                  Póker
                </button>
                <button
                  type="button"
                  className={`cz-promo-tab ${activeTab === 'casino' ? 'is-active' : ''}`}
                  onClick={() => setActiveTab('casino')}
                >
                  <span className="cz-tab-icon">🎰</span>
                  Casino
                </button>
                <button
                  type="button"
                  className={`cz-promo-tab ${activeTab === 'apuestas' ? 'is-active' : ''}`}
                  onClick={() => setActiveTab('apuestas')}
                >
                  <span className="cz-tab-icon">⚽</span>
                  Apuestas
                </button>
                <button
                  type="button"
                  className={`cz-promo-tab ${activeTab === 'sin-deposito' ? 'is-active' : ''}`}
                  onClick={() => setActiveTab('sin-deposito')}
                >
                  <span className="cz-tab-icon">🎁</span>
                  Bonos sin depósito
                </button>
                <button
                  type="button"
                  className={`cz-promo-tab ${activeTab === 'exclusivas' ? 'is-active' : ''}`}
                  onClick={() => setActiveTab('exclusivas')}
                >
                  <span className="cz-tab-icon">⭐</span>
                  Exclusivas
                </button>
              </div>

              {/* TABLA DE SALAS / CASAS */}
              <div className="cz-promo-list">
                {currentList.map((item, index) => (
                  <div key={item.id} className="cz-promo-row">
                    <span className="cz-promo-row__index">{index + 1}</span>

                    <div className="cz-promo-row__logo-box">
                      <img src={item.logo} alt={item.name} className="cz-promo-row__logo" />
                    </div>

                    <div className="cz-promo-row__details">
                      <div className="cz-promo-row__header">
                        <span className="cz-promo-row__name">{item.name}</span>
                        {item.badge && (
                          <span className="cz-promo-badge">{item.badge}</span>
                        )}
                      </div>
                      <div className="cz-promo-row__bonus">
                        <span className="cz-gift-icon">🎁</span>
                        <strong>{item.bonus}</strong>
                      </div>
                      <p className="cz-promo-row__subbonus">{item.subBonus}</p>
                    </div>

                    <div className="cz-promo-row__rating">
                      <span className="cz-star-icon">★</span>
                      <span className="cz-rating-num">{item.rating}</span>
                    </div>

                    <div className="cz-promo-row__actions">
                      <Link href={item.reviewUrl} className="cz-btn-review">Review</Link>
                      <a href={item.siteUrl} target="_blank" rel="noopener noreferrer" className="cz-btn-visit">
                        Visitar sitio <span className="cz-arrow">→</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* COLUMNA DERECHA: IMAGEN DE FICHAS 3D Y BLOQUE "ESTO ES CHUZONICPLAY" */}
            <div className="cz-portal-hero__right">
              {/* IMAGEN DECORATIVA SUPERIOR CON CHIPS Y CARTAS NEÓN */}
              <div className="cz-hero-illustration">
                <img
                  src="/assets/chuzonic/hero-reference.jpg"
                  alt="Chuzonic Poker chips and cards"
                  className="cz-hero-illustration__img"
                />
              </div>

              {/* TARJETA INFORMATIVA "ESTO ES CHUZONICPLAY" */}
              <div className="cz-about-chuzonic">
                <h2 className="cz-about-chuzonic__title">Esto es ChuzonicPlay</h2>
                <p className="cz-about-chuzonic__desc">
                  Analizamos y comparamos las mejores promociones del mundo del póker y casino online para que juegues con información real, actualizada y sin sorpresas.
                </p>

                <div className="cz-features-grid">
                  <div className="cz-feature-item">
                    <div className="cz-feature-icon cz-feature-icon--red">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="cz-feature-item__title">Ofertas verificadas</h3>
                      <p className="cz-feature-item__desc">Solo promociones reales y actualizadas.</p>
                    </div>
                  </div>

                  <div className="cz-feature-item">
                    <div className="cz-feature-icon cz-feature-icon--red">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <line x1="18" y1="20" x2="18" y2="10" />
                        <line x1="12" y1="20" x2="12" y2="4" />
                        <line x1="6" y1="20" x2="6" y2="14" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="cz-feature-item__title">Comparativas imparciales</h3>
                      <p className="cz-feature-item__desc">Analizamos ventajas, requisitos y términos.</p>
                    </div>
                  </div>

                  <div className="cz-feature-item">
                    <div className="cz-feature-icon cz-feature-icon--red">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="cz-feature-item__title">Ahorra tiempo</h3>
                      <p className="cz-feature-item__desc">Encuentra la mejor oferta en un solo lugar.</p>
                    </div>
                  </div>

                  <div className="cz-feature-item">
                    <div className="cz-feature-icon cz-feature-icon--red">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="cz-feature-item__title">Comunidad real</h3>
                      <p className="cz-feature-item__desc">Más de 1 millón de jugadores confían en ChuzonicPlay.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 BANNERS INFERIORES */}
          <div className="cz-portal-banners">
            <Link href="/odds-calculator" className="cz-portal-banner-card cz-portal-banner-card--poker">
              <div className="cz-portal-banner-card__content">
                <span className="cz-banner-tag cz-banner-tag--red">● PÓKER</span>
                <h3 className="cz-portal-banner-card__title">Torneos exclusivos y premios increíbles</h3>
                <p className="cz-portal-banner-card__desc">Juega en las mejores salas de póker del mundo.</p>
              </div>
              <div className="cz-portal-banner-card__action">
                <span className="cz-banner-circle-btn cz-banner-circle-btn--red">→</span>
              </div>
            </Link>

            <div className="cz-portal-banner-card cz-portal-banner-card--casino">
              <div className="cz-portal-banner-card__content">
                <span className="cz-banner-tag cz-banner-tag--blue">CASINO</span>
                <h3 className="cz-portal-banner-card__title">Bonos de bienvenida de hasta $2,000</h3>
                <p className="cz-portal-banner-card__desc">Descubre los mejores bonos en slots, ruleta y blackjack.</p>
              </div>
              <div className="cz-portal-banner-card__action">
                <span className="cz-banner-circle-btn cz-banner-circle-btn--blue">→</span>
              </div>
            </div>

            <div className="cz-portal-banner-card cz-portal-banner-card--sports">
              <div className="cz-portal-banner-card__content">
                <span className="cz-banner-tag cz-banner-tag--red">● APUESTAS DEPORTIVAS</span>
                <h3 className="cz-portal-banner-card__title">Promociones en tus depósitos y apuestas</h3>
                <p className="cz-portal-banner-card__desc">Aprovecha bonos exclusivos en deportes.</p>
              </div>
              <div className="cz-portal-banner-card__action">
                <span className="cz-banner-circle-btn cz-banner-circle-btn--red">→</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
