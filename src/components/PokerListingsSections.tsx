import React from 'react';
import sections from '@/data/pokerlistings-sections.json';

function HtmlBlock({ html }: { html: string }) {
  return <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: html }} />;
}

export function HeaderSection() {
  return <HtmlBlock html={sections.header} />;
}

export function HeroMainScreen() {
  return <HtmlBlock html={sections.heroMainScreen} />;
}

export function VipBannerSection() {
  return <HtmlBlock html={sections.vipBanner} />;
}

export function HotNewsSection() {
  return <HtmlBlock html={sections.hotNews} />;
}

export function LatestMaterialsSection() {
  return <HtmlBlock html={sections.latestMaterialsAndPlayers} />;
}

export function InstagramSection() {
  return <HtmlBlock html={sections.instagramFeed} />;
}

export function PokerEducationSection() {
  return <HtmlBlock html={sections.pokerEducationAndTutorial} />;
}

export function QuickToolsBannersSection() {
  return <HtmlBlock html={sections.quickToolsBanners} />;
}

export function QuizSection() {
  return <HtmlBlock html={sections.quizSection} />;
}

export function SupportBannerSection() {
  return <HtmlBlock html={sections.supportBanner} />;
}

export function CasinoGameTypesSection() {
  return <HtmlBlock html={sections.casinoGameTypes} />;
}

export function PopularSlotsSection() {
  return <HtmlBlock html={sections.popularSlots} />;
}

export function CasinoEducationSection() {
  return <HtmlBlock html={sections.casinoEducation} />;
}

export function YouTubeShortsSection() {
  return <HtmlBlock html={sections.youtubeShorts} />;
}

export function AboutSection() {
  return <HtmlBlock html={sections.aboutSection} />;
}

export function NewsletterSection() {
  return <HtmlBlock html={sections.newsletterBox} />;
}

export function PokerSoftwareSection() {
  return <HtmlBlock html={sections.pokerSoftware} />;
}

export function FooterSection() {
  return <HtmlBlock html={sections.footer} />;
}
