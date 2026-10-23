import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Noticias | Chuzonic Play',
  description: 'Análisis, noticias y guías para jugar informado.',
};

const noticias = [
  {
    categoria: 'Mercados',
    tiempo: 'Hace 12 min',
    titulo: 'Cinco claves para leer una cuota antes del inicio',
    extracto: 'Una guía breve para comparar contexto, forma reciente y movimiento de mercado sin perder de vista el riesgo.',
    tono: 'blue',
  },
  {
    categoria: 'Análisis',
    tiempo: 'Hace 38 min',
    titulo: 'Qué cambió en la previa de la jornada europea',
    extracto: 'Lesiones, rotaciones y datos que ayudan a entender las líneas de esta fecha.',
    tono: 'red',
  },
  {
    categoria: 'Guías',
    tiempo: 'Hace 1 h',
    titulo: 'Gestión de banca: una base para jugar con criterio',
    extracto: 'Principios sencillos para definir límites y tomar decisiones más sostenibles.',
    tono: 'gold',
  },
];

const categorias = ['Fútbol', 'Tenis', 'Baloncesto', 'eSports', 'Casino', 'Guías'];

export default function NoticiasPage() {
  return (
    <main className="news-page" lang="es">
      <header className="news-topbar">
        <Link className="news-brand" href="/" aria-label="Volver al inicio de Chuzonic Play">
          <span className="news-brand__mark" aria-hidden="true">CP</span>
          <span>Chuzonic<span>Play</span></span>
        </Link>
        <nav className="news-nav" aria-label="Navegación de noticias">
          <Link href="/">Inicio</Link>
          <a className="is-active" href="#portada">Noticias</a>
          <a href="#ultimas">Análisis</a>
          <a href="#guias">Guías</a>
        </nav>
        <div className="news-search" aria-label="Buscador de noticias próximamente">
          <span aria-hidden="true">⌕</span>
          Buscador próximamente
        </div>
      </header>

      <section id="portada" className="news-hero" aria-labelledby="news-hero-title">
        <div className="news-hero__copy">
          <p className="news-eyebrow"><span /> Actualidad deportiva</p>
          <p className="news-kicker">Análisis de la jornada</p>
          <h1 id="news-hero-title">La previa que necesitas antes de elegir tu próximo partido</h1>
          <p className="news-hero__summary">
            Contexto, datos y tendencias para entender mejor los encuentros destacados. Información para decidir con criterio.
          </p>
          <a className="news-cta" href="#ultimas">Explorar noticias <span aria-hidden="true">→</span></a>
          <p className="news-disclaimer">Contenido informativo. Juega con responsabilidad.</p>
        </div>

        <aside className="match-panel" aria-label="Partido destacado">
          <div className="match-panel__head">
            <span className="live-indicator"><i /> EN VIVO</span>
            <span>Partido destacado</span>
          </div>
          <div className="match-panel__teams">
            <div><strong>Real Norte</strong><small>Local</small></div>
            <b>VS</b>
            <div><strong>Atlético Sur</strong><small>Visita</small></div>
          </div>
          <div className="match-panel__facts">
            <div><span>Competencia</span><strong>Liga principal</strong></div>
            <div><span>Inicio</span><strong>20:00</strong></div>
          </div>
          <a href="#ultimas">Ver publicaciones recientes <span aria-hidden="true">→</span></a>
        </aside>
      </section>

      <section className="news-categories" aria-label="Categorías">
        <p>Explora por tema</p>
        <div>{categorias.map((categoria) => <span key={categoria}>{categoria}</span>)}</div>
      </section>

      <section id="ultimas" className="news-latest" aria-labelledby="ultimas-title">
        <div className="news-section-heading">
          <div>
            <p className="news-eyebrow"><span /> Últimas publicaciones</p>
            <h2 id="ultimas-title">Noticias y análisis recientes</h2>
          </div>
          <span className="news-section-count">3 publicaciones destacadas</span>
        </div>
        <div className="news-grid">
          {noticias.map((noticia) => (
            <article className={`news-card news-card--${noticia.tono}`} key={noticia.titulo}>
              <div className="news-card__art" aria-hidden="true"><span /></div>
              <div className="news-card__body">
                <div className="news-card__meta"><span>{noticia.categoria}</span><time>{noticia.tiempo}</time></div>
                <h3>{noticia.titulo}</h3>
                <p>{noticia.extracto}</p>
                <span className="news-card__status">Artículo completo próximamente</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="guias" className="news-responsible" aria-labelledby="guias-title">
        <p className="news-eyebrow"><span /> Juega informado</p>
        <h2 id="guias-title">Las buenas decisiones empiezan por conocer el contexto.</h2>
        <p>Encuentra guías para comprender cuotas, administrar tu banca y mantener el juego como entretenimiento.</p>
        <a href="#guias">Ir a las guías <span aria-hidden="true">→</span></a>
      </section>
    </main>
  );
}
