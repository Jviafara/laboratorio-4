const form = document.getElementById('contactForm');
form.addEventListener('submit', function (event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('msg').value;
    if (name === '' || email === '' || mensaje === '') {
        alert('Por favor, completa todos los campos.');
        event.preventDefault();
    } else {
        alert('¡Formulario enviado correctamente!');
    }
});

const mostrarFoto = () => {
    const img = document.getElementById('photo');
    if (img.style.display === 'inline-block') {
        img.style.display = 'none';
        document.getElementById('img-button').innerHTML = 'Show Image';
    } else {
        img.style.display = 'inline-block';
        document.getElementById('img-button').innerHTML = 'Hide Image';
    }
};
