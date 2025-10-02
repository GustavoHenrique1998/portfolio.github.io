document.addEventListener('DOMContentLoaded', () => {

    // Efeito de Digitação na Hero Section
    const typingElement = document.getElementById('typing-effect');
    const wordsToType = [ "React", "Node.js", "HTML", "CSS","JS"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = wordsToType[wordIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            // Pausa no final da palavra
            setTimeout(() => isDeleting = true, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % wordsToType.length;
        }

        const typeSpeed = isDeleting ? 100 : 200;
        setTimeout(type, typeSpeed);
    }

    // "Scroll Reveal" para as seções
    const hiddenSections = document.querySelectorAll('.section-hidden');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                // Opcional: para de observar o elemento depois que ele se torna visível
                // observer.unobserve(entry.target); 
            }
        });
    }, {
        root: null, // viewport
        threshold: 0.15 // 15% do elemento precisa estar visível
    });

    hiddenSections.forEach(section => observer.observe(section));
    
    // Inicia o efeito de digitação
    type();

});