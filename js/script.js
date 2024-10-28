function checkVisibility() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0);
        if (isVisible) {
            section.classList.add('visible');
        }
    });

    const competenciaItems = document.querySelectorAll('.competencia-item');
    competenciaItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0);
        if (isVisible) {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 100);
        }
    });
}

function decryptName() {
    const nombreElement = document.getElementById('nombre');
    const nombreReal = 'Kevk1ng';
    const caracteresAleatorios = '!@#$%^&*()_+{}[]|;:,.<>?';
    let nombreActual = nombreElement.textContent;
    let indice = 0;

    const intervalo = setInterval(() => {
        if (indice < nombreReal.length) {
            nombreActual = nombreActual.substring(0, indice) + nombreReal[indice] + nombreActual.substring(indice + 1);
            indice++;
        } else {
            clearInterval(intervalo);
            setTimeout(() => {
                nombreElement.style.fontFamily = 'Poppins, sans-serif';
            }, 500);
            return;
        }

        for (let i = indice; i < nombreActual.length; i++) {
            nombreActual = nombreActual.substring(0, i) + caracteresAleatorios[Math.floor(Math.random() * caracteresAleatorios.length)] + nombreActual.substring(i + 1);
        }

        nombreElement.textContent = nombreActual;
    }, 200);
}

function initCarousel() {
    const track = document.querySelector('.carousel-track');
    let isScrolling = false;

    window.addEventListener('wheel', (e) => {
        if (!isScrolling) {
            isScrolling = true;
            if (e.deltaY !== 0) {
                track.scrollLeft += e.deltaY;
                e.preventDefault();
            }
            setTimeout(() => {
                isScrolling = false;
            }, 66);
        }
    }, { passive: false });
    
    let startX;
    let scrollLeft;

    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX - track.offsetLeft;
        scrollLeft = track.scrollLeft;
    });

    track.addEventListener('touchmove', (e) => {
        if (!startX) return;
        const x = e.touches[0].pageX - track.offsetLeft;
        const walk = (x - startX) * 2;
        track.scrollLeft = scrollLeft - walk;
    });

    track.addEventListener('touchend', () => {
        startX = null;
    });
}

window.addEventListener('load', () => {
    checkVisibility();
    decryptName();
    initCarousel();
});
window.addEventListener('scroll', checkVisibility);
const cubo = document.getElementById('cubo3D');
let isDragging = false;
let startX, startY;
let rotationY = 0;
let rotationX = 0;

cubo.addEventListener('mousedown', (event) => {
    isDragging = true;
    startX = event.clientX;
    startY = event.clientY;
});

document.addEventListener('mousemove', (event) => {
    if (isDragging) {
        const dx = event.clientX - startX;
        const dy = event.clientY - startY;

        rotationY += dx * 0.5; // Ajusta la sensibilidad de la rotación
        rotationX -= dy * 0.5; // Ajusta la sensibilidad de la rotación

        cubo.style.transform = `translateZ(-150px) rotateY(${rotationY}deg) rotateX(${rotationX}deg)`;
        
        startX = event.clientX; // Actualiza la posición inicial
        startY = event.clientY; // Actualiza la posición inicial
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});
