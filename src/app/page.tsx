import React from 'react';
import Script from 'next/script';
import { ODDS_CALCULATOR_HTML } from '@/components/OddsCalculatorSection';

/**
 * RAÍZ DEL SITIO — por ahora muestra SOLO el Odds Calculator.
 *
 * El HTML del widget viene del scrap de pokerlistings.com (Texas Hold'em,
 * Omaha, Omaha H/L, 7-Stud, 7-Stud H/L y Razz) y el motor de cálculo en
 * `public/assets/odds-calc/js/scripts.min.js`.
 *
 * El resto del clon de PokerListings NO se elimina: sigue en
 * `src/components/PokerListingsSections.tsx` y en la ruta `/home`.
 * Para volver a mostrarlo basta con restaurar los <*Section /> aquí.
 */
export default function HomePage() {
  return (
    <div id="page" className="site">
      <main id="primary" className="site-main container main-content">
        <article className="page-main-content post-2310 page type-page status-publish hentry">
          <div
            className="calculator-content-wrapper"
            dangerouslySetInnerHTML={{ __html: ODDS_CALCULATOR_HTML }}
          />
        </article>
      </main>
      <Script src="/assets/odds-calc/js/scripts.min.js" strategy="afterInteractive" />
    </div>
  );
}
