import React from 'react';
import Script from 'next/script';
import { ODDS_CALCULATOR_HTML } from '@/components/OddsCalculatorSection';

/**
 * Página del Odds Calculator (Texas Hold'em, Omaha, 7-Stud, Razz).
 *
 * El HTML del widget se sirve desde `ODDS_CALCULATOR_HTML` (scrap de
 * pokerlistings.com) y el motor de cálculo en `public/assets/odds-calc/js/scripts.min.js`.
 *
 * Las demás secciones del clon (Poker/Casino/Betting, News, Poker Guides...)
 * NO se eliminan: siguen en `src/components/PokerListingsSections.tsx`.
 * Para reactivarlas basta con restaurar los <*Section /> en `src/app/page.tsx`.
 */
export default function OddsCalculatorPage() {
  return (
    <div id="page" className="site">
      <main id="primary" className="site-main container main-content">
        <article className="page-main-content post-22286 page type-page status-publish has-post-thumbnail hentry">
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
