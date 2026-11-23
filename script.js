/* ===== SCROLL FADE-IN ===== */
(function () {
    const sections = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    sections.forEach(section => observer.observe(section));
})();

/* ===== SMOOTH NAV HIGHLIGHTING ===== */
(function () {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 200;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.style.borderColor = 'transparent';
            link.style.background = 'transparent';
            if (link.getAttribute('href') === `#${current}`) {
                link.style.borderColor = 'var(--gold)';
                link.style.background = 'var(--gold-dim)';
            }
        });
    });
})();
