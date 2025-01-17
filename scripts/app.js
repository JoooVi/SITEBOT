document.addEventListener('DOMContentLoaded', function() {
    const termsLink = document.getElementById('terms-link');
    const privacyLink = document.getElementById('privacy-link');

    termsLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'pages/terms-of-service.html';
    });

    privacyLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'pages/privacy-policy.html';
    });

    // Navegação suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animações de fade-in
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.5,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Mensagem de boas-vindas
    setTimeout(() => {
        alert('Bem-vindo ao Radiant Studios!');
    }, 1000);

    // Botão de rolagem para o topo
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.textContent = 'Topo';
    scrollToTopButton.style.position = 'fixed';
    scrollToTopButton.style.bottom = '20px';
    scrollToTopButton.style.right = '20px';
    scrollToTopButton.style.padding = '10px 20px';
    scrollToTopButton.style.backgroundColor = 'rgb(243, 3, 75)';
    scrollToTopButton.style.color = 'white';
    scrollToTopButton.style.border = 'none';
    scrollToTopButton.style.borderRadius = '5px';
    scrollToTopButton.style.cursor = 'pointer';
    scrollToTopButton.style.display = 'none';
    document.body.appendChild(scrollToTopButton);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});