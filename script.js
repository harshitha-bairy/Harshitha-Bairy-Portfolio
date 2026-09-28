const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach((el) => observer.observe(el));

document.querySelectorAll('.skill-list span').forEach((item) => {
  item.addEventListener('mouseenter', () => item.style.transform = 'translateY(-3px)');
  item.addEventListener('mouseleave', () => item.style.transform = '');
});
