import './style.css'

// Simple Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }

  const heroImage = document.getElementById('hero-image') as HTMLImageElement;
  if (heroImage) {
    heroImage.src = '/hero_coding_interface_1772922940801.png';
    heroImage.onload = () => {
      heroImage.classList.remove('animate-pulse', 'bg-slate-200');
    };
  }
});
