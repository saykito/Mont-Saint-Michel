/**
 * Carousel JS dynamique — Mont-Saint-Michel
 * Remplace le carousel CSS-only pour fonctionner avec un nombre variable d'éléments.
 */
(function () {
  const track   = document.getElementById('carouselTrack');
  const btnPrev = document.querySelector('.js-carousel-prev');
  const btnNext = document.querySelector('.js-carousel-next');

  if (!track || !btnPrev || !btnNext) return;

  const items = Array.from(track.querySelectorAll('.js-carousel-item'));
  if (items.length === 0) return;

  let current = 0; /* index de l'élément central */

  function getVisible() {
    /* Fenêtre de 3 éléments (ou moins si < 3 items) */
    const n = Math.min(3, items.length);
    const indices = [];
    for (let i = 0; i < n; i++) {
      indices.push((current - Math.floor(n / 2) + i + items.length) % items.length);
    }
    return indices;
  }

  function render() {
    const visible = getVisible();
    items.forEach((el, i) => {
      el.style.display = 'none';
      el.classList.remove('js-carousel-item--large');
    });
    visible.forEach((idx, pos) => {
      items[idx].style.display = 'flex';
      if (pos === Math.floor(visible.length / 2)) {
        items[idx].classList.add('js-carousel-item--large');
      }
    });
  }

  btnPrev.addEventListener('click', () => {
    current = (current - 1 + items.length) % items.length;
    render();
  });

  btnNext.addEventListener('click', () => {
    current = (current + 1) % items.length;
    render();
  });

  render();
})();
