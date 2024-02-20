function calcularSeguro() {
    const edad = parseInt(document.getElementById('age').value);
    const genero = document.getElementById('gender').value;
    const tipoSeguro = document.getElementById('insurance-type').value;

    // Verificar si la edad ingresada es válida (entre 18 y 100 años)
    if (isNaN(edad) || edad < 18 || edad > 100) {
        alert('Por favor, introduce una edad válida entre 18 y 100 años.');
        return;
    }

    let precioBase;

    switch (tipoSeguro) {
        case 'vida':
            precioBase = 100;
            break;
        case 'auto':
            precioBase = 200;
            break;
        case 'hogar':
            precioBase = 150;
            break;
        default:
            precioBase = 0;
    }

    let precioFinal;

    // Bucle for para ajustar el precio según la edad del usuario
    if (edad < 18) {
        precioFinal = precioBase * 1.2;
    } else {
        for (let i = 18; i <= edad; i++) {
            precioBase += 2;
        }
        precioFinal = genero === 'masculino' ? precioBase * 1.5 : precioBase * 1.3;
    }

    // Mostrar el precio estimado del seguro
    const resultadoElement = document.getElementById('result');
    const precioElement = document.getElementById('insurance-price');
    precioElement.textContent = '$' + precioFinal.toFixed(2);
    resultadoElement.style.display = 'block';
}