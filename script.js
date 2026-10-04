// Smooth page entrance for a little polish without a framework.
const cards = document.querySelectorAll('.experience-card, .leadership-grid article, .exposure-row > div');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

cards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(18px)';
  card.style.transition = 'opacity .6s ease, transform .6s ease';
  observer.observe(card);
});
