import React from 'react';
import {
  HeaderSection,
  HeroMainScreen,
  VipBannerSection,
  HotNewsSection,
  LatestMaterialsSection,
  InstagramSection,
  PokerEducationSection,
  QuickToolsBannersSection,
  QuizSection,
  SupportBannerSection,
  CasinoGameTypesSection,
  PopularSlotsSection,
  CasinoEducationSection,
  YouTubeShortsSection,
  AboutSection,
  NewsletterSection,
  PokerSoftwareSection,
  FooterSection,
} from '@/components/PokerListingsSections';
import { InteractiveController } from '@/components/InteractiveController';

/**
 * Home COMPLETA del clon de PokerListings (todas las secciones y pestañas).
 * Se conserva íntegra para poder reactivar el sitio completo en cualquier momento.
 * La raíz `/` muestra por ahora solo el Odds Calculator.
 */
export default function FullHomePage() {
  return (
    <div id="page" className="site">
      <InteractiveController />
      <HeaderSection />
      <div className="container" />
      <main id="primary" className="site-main container main-content">
        <article className="page-main-content post-22286 page type-page status-publish has-post-thumbnail hentry">
          <HeroMainScreen />
          <VipBannerSection />
          <HotNewsSection />
          <LatestMaterialsSection />
          <InstagramSection />
          <PokerEducationSection />
          <QuickToolsBannersSection />
          <QuizSection />
          <SupportBannerSection />
          <CasinoGameTypesSection />
          <PopularSlotsSection />
          <CasinoEducationSection />
          <YouTubeShortsSection />
          <AboutSection />
          <NewsletterSection />
          <PokerSoftwareSection />
        </article>
      </main>
      <FooterSection />
    </div>
  );
}
