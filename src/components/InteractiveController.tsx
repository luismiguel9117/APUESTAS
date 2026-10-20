'use client';

import { useEffect } from 'react';

export function InteractiveController() {
  useEffect(() => {
    // 1. Tabs switching (Main screen Poker/Casino/Betting + Latest Materials + Poker Education)
    const tablists = document.querySelectorAll('[role="tablist"]');
    tablists.forEach((tablist) => {
      const tabs = tablist.querySelectorAll('[role="tab"]');
      tabs.forEach((tab) => {
        const handleClick = (e: Event) => {
          e.preventDefault();
          const targetId = tab.getAttribute('aria-controls');
          if (!targetId) return;

          tabs.forEach((t) => {
            t.classList.remove('tab--active', 'main-screen__tab--active', 'active');
            t.setAttribute('aria-selected', 'false');
          });
          tab.classList.add('tab--active', 'main-screen__tab--active', 'active');
          tab.setAttribute('aria-selected', 'true');

          const container =
            tablist.closest('[data-block-with-tabs], .main-screen__content, section, .main-screen') ||
            document;
          container.querySelectorAll('[role="tabpanel"]').forEach((panel) => {
            const el = panel as HTMLElement;
            if (el.id === targetId) {
              el.classList.add('tab-content--active', 'active');
              el.removeAttribute('hidden');
              el.style.display = '';
            } else {
              el.classList.remove('tab-content--active', 'active');
              el.setAttribute('hidden', 'hidden');
              el.style.display = 'none';
            }
          });
        };
        tab.addEventListener('click', handleClick);
      });
    });

    // 2. Horizontal sliders (Instagram, Types of Casino Games, Quiz, YouTube, Software)
    document.querySelectorAll('[data-slider]').forEach((slider) => {
      const track = slider.querySelector('[data-track="slider"]') as HTMLElement | null;
      const area = (slider.querySelector('[data-area="area"]') || slider) as HTMLElement | null;
      const buttons = slider.querySelectorAll('button');
      const prevBtn = (slider.querySelector('[data-arrow="prev"], .slider-arrow--prev') ||
        buttons[0]) as HTMLButtonElement | null;
      const nextBtn = (slider.querySelector('[data-arrow="next"], .slider-arrow--next') ||
        buttons[buttons.length - 1]) as HTMLButtonElement | null;

      if (track && area) {
        area.style.overflowX = 'auto';
        area.style.scrollBehavior = 'smooth';
        area.style.scrollbarWidth = 'none';

        if (prevBtn) {
          prevBtn.removeAttribute('disabled');
          prevBtn.addEventListener('click', () => {
            area.scrollBy({ left: -350, behavior: 'smooth' });
          });
        }
        if (nextBtn && nextBtn !== prevBtn) {
          nextBtn.removeAttribute('disabled');
          nextBtn.addEventListener('click', () => {
            area.scrollBy({ left: 350, behavior: 'smooth' });
          });
        }
      }
    });

    // 3. Header burger menu and dropdowns
    const burger = document.querySelector('.header__burger, .burger');
    const mobileMenu = document.querySelector('.header__menu, .mobile-menu');
    if (burger && mobileMenu) {
      burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
      });
    }

    // 4. Enable newsletter input button when typing email
    const emailInput = document.querySelector('.email__input') as HTMLInputElement | null;
    const emailBtn = document.querySelector('.email__button') as HTMLInputElement | null;
    if (emailInput && emailBtn) {
      emailInput.addEventListener('input', () => {
        if (emailInput.value.includes('@')) {
          emailBtn.removeAttribute('disabled');
        } else {
          emailBtn.setAttribute('disabled', 'disabled');
        }
      });
    }
  }, []);

  return null;
}
