// Utility Functions
function throttle(callback, limit) {
  let wait = false;
  return function () {
    if (!wait) {
      callback();
      wait = true;
      setTimeout(() => wait = false, limit);
    }
  };
}

// Theme Toggle
function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');

  root.setAttribute('data-theme', savedTheme);
  root.style.transition = 'background-color 0.3s, color 0.3s';

  if (themeToggle) {
    themeToggle.innerHTML = savedTheme === 'dark'
      ? '<i class="fas fa-moon"></i>'
      : '<i class="fas fa-sun"></i>';

    themeToggle.addEventListener('click', () => {
      const currentTheme = root.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      themeToggle.innerHTML = newTheme === 'dark'
        ? '<i class="fas fa-moon"></i>'
        : '<i class="fas fa-sun"></i>';
    });
  }
}

// Typewriter Effect with Loop
function initTypewriterEffect() {
  const text = "Full Stack Developer";
  const typewriter = document.querySelector('.typewriter');
  let i = 0;

  function type() {
    if (i < text.length) {
      typewriter.textContent += text.charAt(i++);
      setTimeout(type, 100);
    } else {
      setTimeout(() => {
        typewriter.textContent = '';
        i = 0;
        type();
      }, 2000);
    }
  }

  if (typewriter) {
    typewriter.textContent = '';
    type();
  }
}

// 3D Card Tilt
function initCardTilt() {
  document.querySelectorAll('.project-card, .skill-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'none';
    });
  });
}

// EmailJS Contact Form
function initEmailForm() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  emailjs.init("u92ZvICoQgvFk7T10");

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    emailjs.sendForm('service_rad30ti', 'template_6sww8lv', this)
      .then(() => {
        alert('Message sent successfully!');
        contactForm.reset();
      })
      .catch(() => {
        alert('Failed to send message. Please try again later.');
      });
  });
}

// Smooth Scroll to Anchors
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Scroll to Top
function initScrollToTop() {
  const scrollTopBtn = document.getElementById('scroll-to-top');
  if (!scrollTopBtn) return;

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Mobile Menu Toggle
function initMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const navMenu = document.getElementById('nav-menu');
  if (!mobileMenu || !navMenu) return;

  mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenu.innerHTML = navMenu.classList.contains('active')
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });

  document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      mobileMenu.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });
}

// Reveal on Scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;

  reveals.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    element.classList.toggle('active', elementTop < windowHeight - elementVisible);
  });
}

// Header Scroll Effects
function handleScrollUI() {
  const header = document.querySelector('header');
  const scrollBtn = document.getElementById('scroll-to-top');
  const showHeader = window.scrollY > 50;
  const showButton = window.scrollY > 300;

  if (header) header.classList.toggle('scrolled', showHeader);
  if (scrollBtn) scrollBtn.classList.toggle('visible', showButton);

  revealOnScroll();
}

// Dynamic Year
function setFooterYear() {
  const footerYear = document.getElementById('footer-year');
  if (footerYear) footerYear.textContent = new Date().getFullYear();
}

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initTypewriterEffect();
  initCardTilt();
  initEmailForm();
  initSmoothScroll();
  initScrollToTop();
  initMobileMenu();
  setFooterYear();
  document.querySelectorAll('section').forEach(section => section.classList.add('reveal'));
  revealOnScroll();
});

window.addEventListener('scroll', throttle(handleScrollUI, 100));
