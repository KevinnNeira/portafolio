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

window.addEventListener('load', () => {
    checkVisibility();
    decryptName();
});
window.addEventListener('scroll', checkVisibility);