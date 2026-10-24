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

export default function HomePage() {
  const [activeSide, setActiveSide] = useState('inicio');

  return (
    <div className="cz-ref-layout">
      <InteractiveController />

      {/* 1. SIDEBAR LATERAL IZQUIERDO PERSISTENTE */}
      <aside className="cz-ref-sidebar">
        <Link
          href="/"
          className={`cz-ref-nav-item ${activeSide === 'inicio' ? 'is-active' : ''}`}
          onClick={() => setActiveSide('inicio')}
          title="Inicio"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span>Inicio</span>
        </Link>

        <Link
          href="/noticias"
          className={`cz-ref-nav-item ${activeSide === 'futbol' ? 'is-active' : ''}`}
          onClick={() => setActiveSide('futbol')}
          title="Fútbol"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </svg>
          <span>Fútbol</span>
        </Link>

        <a
          href="#noticias-poker"
          className={`cz-ref-nav-item ${activeSide === 'poker' ? 'is-active' : ''}`}
          onClick={() => setActiveSide('poker')}
          title="Póker"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M12 8v8" />
            <path d="M8 12h8" />
          </svg>
          <span>Póker</span>
        </a>

        <a
          href="#educacion-poker"
          className={`cz-ref-nav-item ${activeSide === 'odds' ? 'is-active' : ''}`}
          onClick={() => setActiveSide('odds')}
          title="Cuotas"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
          </svg>
          <span>Odds</span>
        </a>

        <Link
          href="/odds-calculator"
          className={`cz-ref-nav-item ${activeSide === 'simulador' ? 'is-active' : ''}`}
          onClick={() => setActiveSide('simulador')}
          title="Simulador de Odds"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
          <span>Simulador</span>
        </Link>
      </aside>

      {/* 2. ÁREA PRINCIPAL DEL PORTAL */}
      <main className="cz-ref-main">
        {/* HEADER SUPERIOR CON LOGO CHUZONICPLAY Y BUSCADOR */}
        <header className="cz-ref-header">
          <Link href="/" className="cz-ref-logo">
            <span>Chuzonic<span className="cz-ref-logo__red">Play</span></span>
          </Link>

          <div className="cz-ref-search">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input type="text" placeholder="Buscar noticias, torneos de póker, partidos..." />
          </div>
        </header>

        {/* HERO STAGE NATIVO CON FOTOGRAFÍA LIMPIA Y TEXTO HTML REAL */}
        <section className="cz-ref-hero">
          <div className="cz-ref-hero__bg" />
          <div className="cz-ref-hero__overlay" />

          <div className="cz-ref-hero__content">
            <span className="cz-ref-tag-red">CHAMPIONS LEAGUE</span>

            <h1 className="cz-ref-hero__title">
              Lautaro Martínez lidera al Inter en una noche clave ante el <span className="cz-ref-hero__title-red">Arsenal</span>
            </h1>

            <p className="cz-ref-hero__desc">
              Análisis, claves del partido, cuotas y todo lo que debes saber del duelo más esperado de los cuartos de final.
            </p>

            <div className="cz-ref-hero__actions">
              <Link href="/noticias" className="cz-ref-btn-red">
                <span>Leer análisis</span>
                <span>→</span>
              </Link>

              <div className="cz-ref-pagination">
                <span className="cz-ref-page-dash" />
                <span className="cz-ref-page-dot" />
                <span className="cz-ref-page-dot" />
                <span className="cz-ref-page-dot" />
              </div>
            </div>

            {/* CUOTAS DESTACADAS EN VIVO DEL PARTIDO */}
            <div className="cz-hero-odds-row">
              <div className="cz-hero-odds-pill">
                <span className="cz-hero-odds-name">Arsenal</span>
                <span className="cz-hero-odds-val">1.92</span>
              </div>
              <div className="cz-hero-odds-pill">
                <span className="cz-hero-odds-name">Empate</span>
                <span className="cz-hero-odds-val">3.40</span>
              </div>
              <div className="cz-hero-odds-pill">
                <span className="cz-hero-odds-name">Atlético</span>
                <span className="cz-hero-odds-val">4.20</span>
              </div>
            </div>
          </div>
        </section>

        {/* TICKER HORIZONTAL DE 5 MINI TARJETAS */}
        <section className="cz-ref-ticker">
          <Link href="/noticias" className="cz-ref-ticker-card">
            <img src="/assets/chuzonic/news-uploads/action-boca-mineiro.jpg" alt="Boca vs Mineiro" className="cz-ref-ticker-thumb" />
            <div className="cz-ref-ticker-content">
              <span className="cz-ref-ticker-tag">COPA LIBERTADORES</span>
              <span className="cz-ref-ticker-title">Boca vs Mineiro: Choque de titanes en La Bombonera</span>
            </div>
          </Link>

          <Link href="/noticias" className="cz-ref-ticker-card">
            <img src="/assets/chuzonic/news-uploads/action-palmeiras-estudiantes.jpg" alt="Palmeiras vs Estudiantes" className="cz-ref-ticker-thumb" />
            <div className="cz-ref-ticker-content">
              <span className="cz-ref-ticker-tag">CONMEBOL</span>
              <span className="cz-ref-ticker-title">Palmeiras ruge ante Estudiantes en un final épico</span>
            </div>
          </Link>

          <Link href="/noticias" className="cz-ref-ticker-card">
            <img src="/assets/chuzonic/news-uploads/action-arquero-festejo.jpg" alt="Finalísima" className="cz-ref-ticker-thumb" />
            <div className="cz-ref-ticker-content">
              <span className="cz-ref-ticker-tag">FINALÍSIMA</span>
              <span className="cz-ref-ticker-title">Héroe bajo los tres palos: la atajada del título</span>
            </div>
          </Link>

          <Link href="/noticias" className="cz-ref-ticker-card">
            <img src="/assets/chuzonic/news-uploads/action-argentina-marruecos.jpg" alt="Argentina vs Marruecos" className="cz-ref-ticker-thumb" />
            <div className="cz-ref-ticker-content">
              <span className="cz-ref-ticker-tag">SELECCIONES</span>
              <span className="cz-ref-ticker-title">Argentina brilla ante Marruecos con clase y dinámica</span>
            </div>
          </Link>

          <Link href="/noticias" className="cz-ref-ticker-card">
            <img src="/assets/chuzonic/ref-crops/news-mbappe.jpg" alt="Mbappé" className="cz-ref-ticker-thumb" />
            <div className="cz-ref-ticker-content">
              <span className="cz-ref-ticker-tag">LA LIGA</span>
              <span className="cz-ref-ticker-title">Mbappé y el Real Madrid buscan consolidar el liderato</span>
            </div>
          </Link>

          <button type="button" className="cz-ref-ticker-arrow" aria-label="Ver más noticias">
            ›
          </button>
        </section>

        {/* GRILLA DE 2 COLUMNAS: ÚLTIMAS NOTICIAS & NOTICIAS DE PÓKER */}
        <section className="cz-ref-news-grid">
          {/* COLUMNA IZQUIERDA: ÚLTIMAS NOTICIAS */}
          <div>
            <div className="cz-ref-section-header">
              <div className="cz-ref-section-title">
                <span className="cz-ref-indicator-bar" />
                <span>Últimas noticias</span>
              </div>
              <Link href="/noticias" className="cz-ref-see-all">
                <span>Ver todas</span>
                <span>→</span>
              </Link>
            </div>

            <div className="cz-ref-latest-block">
              {/* TARJETA DESTACADA MBAPPÉ */}
              <Link href="/noticias" className="cz-ref-mbappe-card">
                <img src="/assets/chuzonic/ref-crops/news-mbappe.jpg" alt="Mbappé Real Madrid" className="cz-ref-mbappe-img" />
                <div className="cz-ref-mbappe-body">
                  <span className="cz-ref-tag-red">LA LIGA</span>
                  <h3 className="cz-ref-mbappe-title">
                    Mbappé lidera al Real Madrid en la recta final de la temporada
                  </h3>
                  <p className="cz-ref-mbappe-desc">
                    El francés vuelve a ser determinante con un doblete que mantiene al Madrid en la pelea por LaLiga.
                  </p>
                  <div className="cz-ref-mbappe-meta">
                    <span>🕒 Hace 3 horas</span>
                    <span>•</span>
                    <span>5 min de lectura</span>
                  </div>
                </div>
              </Link>

              {/* STACK DE 4 MINI NOTICIAS */}
              <div className="cz-ref-mini-stack">
                <Link href="/noticias" className="cz-ref-mini-row">
                  <img src="/assets/chuzonic/news-uploads/action-boca-mineiro.jpg" alt="" className="cz-ref-mini-thumb" />
                  <div className="cz-ref-mini-info">
                    <span className="cz-ref-mini-tag">COPA LIBERTADORES</span>
                    <span className="cz-ref-mini-title">Boca vs Mineiro: Análisis táctico y cuotas</span>
                    <span className="cz-ref-mini-time">🕒 Hace 4 horas</span>
                  </div>
                </Link>

                <Link href="/noticias" className="cz-ref-mini-row">
                  <img src="/assets/chuzonic/news-uploads/action-argentina-marruecos.jpg" alt="" className="cz-ref-mini-thumb" />
                  <div className="cz-ref-mini-info">
                    <span className="cz-ref-mini-tag">SELECCIONES</span>
                    <span className="cz-ref-mini-title">Argentina se prepara para la fase eliminatoria</span>
                    <span className="cz-ref-mini-time">🕒 Hace 6 horas</span>
                  </div>
                </Link>

                <Link href="/noticias" className="cz-ref-mini-row">
                  <img src="/assets/chuzonic/news-uploads/action-palmeiras-estudiantes.jpg" alt="" className="cz-ref-mini-thumb" />
                  <div className="cz-ref-mini-info">
                    <span className="cz-ref-mini-tag">CONMEBOL</span>
                    <span className="cz-ref-mini-title">Estudiantes no cede terreno en Brasil</span>
                    <span className="cz-ref-mini-time">🕒 Hace 8 horas</span>
                  </div>
                </Link>

                <Link href="/noticias" className="cz-ref-mini-row">
                  <img src="/assets/chuzonic/ref-crops/news-barca.jpg" alt="" className="cz-ref-mini-thumb" />
                  <div className="cz-ref-mini-info">
                    <span className="cz-ref-mini-tag">LA LIGA</span>
                    <span className="cz-ref-mini-title">Barcelona recupera terreno tras victoria clave</span>
                    <span className="cz-ref-mini-time">🕒 Hace 12 horas</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: NOTICIAS DE PÓKER */}
          <div id="noticias-poker">
            <div className="cz-ref-section-header">
              <div className="cz-ref-section-title">
                <span className="cz-ref-indicator-bar" />
                <span>Noticias de póker</span>
              </div>
              <a href="#educacion-poker" className="cz-ref-see-all">
                <span>Ver todas</span>
                <span>→</span>
              </a>
            </div>

            <div className="cz-ref-poker-block">
              {/* WSOP BANNER DESTACADO */}
              <div className="cz-ref-wsop-banner">
                <div className="cz-ref-wsop-bg" />
                <div className="cz-ref-wsop-overlay" />
                <div className="cz-ref-wsop-content">
                  <span className="cz-ref-tag-red">TORNEOS</span>
                  <h3 className="cz-ref-wsop-title">
                    WSOP 2024: así fue el campeón del Main Event
                  </h3>
                  <span className="cz-ref-wsop-time">🕒 Hace 3 horas</span>
                </div>
              </div>

              {/* 3 NOTICIAS MINI DE PÓKER */}
              <div className="cz-ref-mini-stack">
                <div className="cz-ref-mini-row">
                  <img src="/assets/chuzonic/ref-crops/poker-cards-chips.jpg" alt="" className="cz-ref-mini-thumb" />
                  <div className="cz-ref-mini-info">
                    <span className="cz-ref-mini-tag">ESTRATEGIAS</span>
                    <span className="cz-ref-mini-title">5 estrategias clave para torneos online</span>
                    <span className="cz-ref-mini-time">🕒 Hace 5 horas</span>
                  </div>
                </div>

                <div className="cz-ref-mini-row">
                  <img src="/assets/chuzonic/ref-crops/poker-mateos.jpg" alt="" className="cz-ref-mini-thumb" />
                  <div className="cz-ref-mini-info">
                    <span className="cz-ref-mini-tag">ENTREVISTAS</span>
                    <span className="cz-ref-mini-title">Entrevista con Adrián Mateos: &quot;Mi enfoque sigue siendo el mismo&quot;</span>
                    <span className="cz-ref-mini-time">🕒 Hace 8 horas</span>
                  </div>
                </div>

                <div className="cz-ref-mini-row">
                  <img src="/assets/chuzonic/ref-crops/poker-ept.jpg" alt="" className="cz-ref-mini-thumb" />
                  <div className="cz-ref-mini-info">
                    <span className="cz-ref-mini-tag">NOTICIAS</span>
                    <span className="cz-ref-mini-title">Nuevo récord de participación en el EPT Barcelona</span>
                    <span className="cz-ref-mini-time">🕒 Hace 1 día</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. BANNER INFERIOR: SIMULADOR DE ODDS */}
        <section className="cz-ref-odds-banner">
          <div className="cz-ref-odds-left">
            <h2 className="cz-ref-odds-title">Simulador de Odds</h2>
            <p className="cz-ref-odds-desc">
              Calcula tus probabilidades en tiempo real y mejora tu juego de póker.
            </p>
          </div>

          <img
            src="/assets/chuzonic/poker-chips-cards.png"
            alt="Simulador de Odds"
            className="cz-ref-odds-art"
          />

          <Link href="/odds-calculator" className="cz-ref-odds-btn">
            Ir al simulador →
          </Link>
        </section>

        {/* 5. STREAM CONTINUO DE CONTENIDO DE PÓKER Y EDUCACIÓN */}
        <div style={{ marginTop: '48px' }}>
          <div id="noticias-calientes" className="cz-stream-block">
            <HotNewsSection />
          </div>

          <div className="cz-stream-block">
            <LatestMaterialsSection />
          </div>

          <div id="educacion-poker" className="cz-stream-block">
            <PokerEducationSection />
          </div>

          <div id="herramientas" className="cz-stream-block">
            <QuickToolsBannersSection />
          </div>

          <div id="quiz-poker" className="cz-stream-block">
            <QuizSection />
          </div>

          <div className="cz-stream-block">
            <PokerSoftwareSection />
          </div>

          <div className="cz-stream-block">
            <YouTubeShortsSection />
          </div>

          <div className="cz-stream-block">
            <NewsletterSection />
          </div>

          <FooterSection />
        </div>
      </main>
    </div>
  );
}