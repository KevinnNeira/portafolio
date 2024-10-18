document.addEventListener('DOMContentLoaded', function() {
    const codigoBarra = document.getElementById('name');
    
    if (codigoBarra) {
        setTimeout(() => {
            codigoBarra.classList.add('decifrado');
        }, 900);
    } else {
        console.error('Elemento con ID "name" no encontrado.');
    }
});
