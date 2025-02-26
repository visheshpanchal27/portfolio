// Theme toggle with smooth transition
const themeToggle = document.getElementById('theme-toggle');
const theme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', theme);

// Apply smooth transition when theme changes
document.documentElement.style.transition = 'background-color 0.3s, color 0.3s';

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggle.innerHTML = newTheme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
});

// 3D Card Effect
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

document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS
    emailjs.init("u92ZvICoQgvFk7T10"); // Replace with your actual User ID

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Typewriter effect
    const text = "Full Stack Developer";
    const typewriter = document.querySelector('.typewriter');
    let i = 0;

    function type() {
        if (i < text.length) {
            typewriter.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }

    type();

    // Scroll-to-top button
    let scrollTopBtn = document.getElementById('scroll-to-top');
    if (!scrollTopBtn) {
        scrollTopBtn = document.createElement('button');
        scrollTopBtn.id = 'scroll-to-top';
        scrollTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
        document.body.appendChild(scrollTopBtn);
    }

    scrollTopBtn.style.position = 'fixed';
    scrollTopBtn.style.bottom = '20px';
    scrollTopBtn.style.right = '20px';
    scrollTopBtn.style.display = 'none';
    scrollTopBtn.style.padding = '10px';
    scrollTopBtn.style.borderRadius = '50%';
    scrollTopBtn.style.backgroundColor = '#333';
    scrollTopBtn.style.color = 'white';
    scrollTopBtn.style.border = 'none';
    scrollTopBtn.style.cursor = 'pointer';
    scrollTopBtn.style.zIndex = '1000';

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        // Smooth scroll animation
        const scrollToTop = () => {
            const currentPosition = window.pageYOffset;
            if (currentPosition > 0) {
                window.requestAnimationFrame(scrollToTop);
                window.scrollTo(0, currentPosition - currentPosition / 8);
            }
        };
        scrollToTop();
    });

    // Dynamic year in footer
    const footer = document.querySelector('footer');
    if (footer) {
        footer.innerHTML += `<p>&copy; ${new Date().getFullYear()} Your Name. All Rights Reserved.</p>`;
    }

    // EmailJS integration
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_rad30ti', 'template_6sww8lv', this)
            .then(function() {
                alert('Message sent successfully!');
                contactForm.reset();
            }, function(error) {
                alert('Failed to send message. Please try again later.');
            });
    });

    // Mobile Menu
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenu.innerHTML = navMenu.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : 
            '<i class="fas fa-bars"></i>';
    });

    // Close menu when clicking a link
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenu.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // Scroll Reveal Animation
    function reveal() {
        const reveals = document.querySelectorAll('.reveal');
        
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', reveal);

    // Add reveal class to elements
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('reveal');
    });
    
    // Initial check for elements in view
    reveal();
});
