// JavaScript para interações avançadas (menu mobile, animações de scroll, etc.)

document.addEventListener('DOMContentLoaded', () => {

    // Menu Mobile Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Alternar ícone do botão (opcional)
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });

        // Fechar menu ao clicar em um link (para SPAs ou navegação na mesma página)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    const icon = menuToggle.querySelector('i');
                     if (icon) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            });
        });
    }

    // Animação de Fade-in ao Scroll (Opcional - pode ser pesado)
    /*
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger quando 10% da seção está visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // Opcional: parar de observar após a animação
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0'; // Começa invisível
        section.style.transform = 'translateY(30px)'; // Começa um pouco abaixo
        section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(section);
    });
    */

     // Header com fundo sólido ao rolar
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Adiciona fundo após rolar 50px
            header.style.backgroundColor = 'var(--background-dark)'; // Fundo sólido
        } else {
            header.style.backgroundColor = 'rgba(26, 26, 26, 0.9)'; // Fundo semi-transparente
        }
    });

});

