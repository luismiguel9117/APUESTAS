/* ==========================================================================
   SCRIPT DEL TEMA CHUZONIC
   --------------------------------------------------------------------------
   Conecta el nav superior de Chuzonic con las pestañas reales del calculador
   (`.calculator__tabs li`), y mantiene sincronizado el estado activo.

   Se inyecta como script propio (no se modifica el bundle original de
   pokerlistings.com, que ya funciona).
   ========================================================================== */
(function () {
  'use strict';

  function initChuzonic() {
    var calcTabs = Array.prototype.slice.call(
      document.querySelectorAll('.calculator__tabs li[data-game-type]')
    );
    var navItems = Array.prototype.slice.call(
      document.querySelectorAll('.cz-nav__item[data-cz-game]')
    );
    var moreBtn = document.querySelector('.cz-nav__item--more');

    if (!calcTabs.length || !navItems.length) return;

    // --- Construir el desplegable "Más" con los juegos restantes ---
    if (moreBtn) {
      var usados = navItems
        .filter(function (n) { return n.dataset.czGame; })
        .map(function (n) { return n.dataset.czGame; });

      var restantes = calcTabs.filter(function (t) {
        return usados.indexOf(t.dataset.gameType) === -1;
      });

      var menu = document.createElement('div');
      menu.className = 'cz-more-menu';
      menu.setAttribute('role', 'menu');
      menu.hidden = true;

      restantes.forEach(function (t) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'cz-more-menu__item';
        b.setAttribute('role', 'menuitem');
        b.dataset.czGame = t.dataset.gameType;
        b.textContent = t.textContent.trim();
        menu.appendChild(b);
      });

      // Anclar el menu al boton "Mas" con position:fixed y coordenadas
      // calculadas en JS: asi ningun ancestro con overflow/backdrop-filter
      // del clon puede recortarlo ni taparlo.
      moreBtn.parentNode.appendChild(menu);

      function posicionarMenu() {
        var r = moreBtn.getBoundingClientRect();
        menu.style.position = 'fixed';
        menu.style.top = r.bottom + 6 + 'px';
        menu.style.left = Math.max(8, r.right - 170) + 'px';
        menu.style.right = 'auto';
      }

      moreBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        if (menu.hidden) posicionarMenu();
        menu.hidden = !menu.hidden;
        moreBtn.classList.toggle('is-open', !menu.hidden);
      });

      window.addEventListener('scroll', function () {
        if (!menu.hidden) posicionarMenu();
      }, true);

      window.addEventListener('resize', function () {
        if (!menu.hidden) posicionarMenu();
      });

      document.addEventListener('click', function () {
        if (!menu.hidden) {
          menu.hidden = true;
          moreBtn.classList.remove('is-open');
        }
      });
    }

    // --- Sincronizar estado activo ---
    function activar(gameType) {
      calcTabs.forEach(function (t) {
        t.classList.toggle('is-active', t.dataset.gameType === gameType);
      });

      navItems.forEach(function (n) {
        n.classList.toggle('is-active', n.dataset.czGame === gameType);
      });

      var items = document.querySelectorAll('.cz-more-menu__item');
      Array.prototype.forEach.call(items, function (i) {
        i.classList.toggle('is-active', i.dataset.czGame === gameType);
      });

      // El boton "Más" se marca activo si el juego actual esta dentro del desplegable
      if (moreBtn) {
        var dentro = false;
        Array.prototype.forEach.call(items, function (i) {
          if (i.dataset.czGame === gameType) dentro = true;
        });
        moreBtn.classList.toggle('is-active', dentro);
      }
    }

    // --- Click en el nav ---
    function onClick(e) {
      var btn = e.target.closest ? e.target.closest('[data-cz-game]') : null;
      if (!btn) return;
      e.preventDefault();
      var game = btn.dataset.czGame;
      if (!game) return;

      // Delegar al JS original: dispara el click en la pestana real
      var real = document.querySelector(
        '.calculator__tabs li[data-game-type="' + game + '"]'
      );
      if (real) real.click();

      activar(game);
    }

    navItems.forEach(function (n) { n.addEventListener('click', onClick); });

    var menu = document.querySelector('.cz-more-menu');
    if (menu) {
      menu.addEventListener('click', function (e) {
        onClick(e);
        menu.hidden = true;
        if (moreBtn) moreBtn.classList.remove('is-open');
      });
    }

    // --- El JS original puede cambiar la pestana: observar y reflejar ---
    var observer = new MutationObserver(function () {
      var activa = document.querySelector('.calculator__tabs li.is-active');
      if (activa) activar(activa.dataset.gameType);
    });
    var tabsCont = document.querySelector('.calculator__tabs');
    if (tabsCont) {
      observer.observe(tabsCont, { attributes: true, subtree: true, attributeFilter: ['class'] });
    }

    // Estado inicial
    var inicial = document.querySelector('.calculator__tabs li.is-active');
    activar(inicial ? inicial.dataset.gameType : 'holdem');

    // --- Modal de cartas ---
    // El clon abre el modal del jugador 1 automaticamente al inicializar
    // (llama Sa(1) en su init). En el sitio original solo se abre al pulsar
    // un slot. Aqui lo mantenemos cerrado hasta el primer clic real del
    // usuario en una casilla, y a partir de ahi se comporta normal.
    var modal = document.querySelector('.calculator__modal');
    if (modal) {
      document.addEventListener(
        'click',
        function (e) {
          var slot = e.target.closest ? e.target.closest('.calculator__card-slot') : null;
          if (!slot) return;
          modal.setAttribute('data-cz-user-touched', '1');
        },
        true
      );
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChuzonic);
  } else {
    initChuzonic();
  }
})();
