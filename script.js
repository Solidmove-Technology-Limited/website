// NAVIGATION TOGGLE
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks) navLinks.classList.remove('active');
    });
});

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// NAVBAR SCROLL EFFECT
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 26, 0.95)';
        } else {
            navbar.style.background = 'rgba(10, 10, 26, 0.85)';
        }
    }
});

// CONTACT FORM
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const button = this.querySelector('button');
        const originalText = button.textContent;

        button.textContent = 'Sending...';
        button.disabled = true;

        setTimeout(() => {
            button.textContent = '✓ Message Sent!';
            button.style.background = '#00c853';

            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = '';
                button.disabled = false;
                this.reset();
            }, 3000);
        }, 2000);
    });
}

// INTERSECTION OBSERVER (ANIMATIONS)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.value-card, .service-card, .tech-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// STATS COUNTER
const stats = document.querySelectorAll('.stat-number');
let counted = false;

function animateStats() {
    if (counted) return;
    counted = true;

    stats.forEach(stat => {
        const text = stat.textContent;
        if (text === '∞') return;

        const target = parseInt(text);
        let current = 0;
        const increment = Math.ceil(target / 50);
        const duration = 2000;
        const stepTime = Math.floor(duration / 50);

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = current;
        }, stepTime);
    });
}

const hero = document.querySelector('.hero');
if (hero) {
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
            }
        });
    }, { threshold: 0.5 });

    heroObserver.observe(hero);
}

console.log('🌐 Solidmove Technology Limited – Website Loaded');
console.log('◆ Building Intelligent Systems for People, Businesses, and the Future.');
