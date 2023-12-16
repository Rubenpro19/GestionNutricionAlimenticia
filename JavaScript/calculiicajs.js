
function CalcularICA() {
    var cinturaInput = document.getElementById('cintura');
    var alturaInput = document.getElementById('altura');

    // Verificar que ambos campos tengan valores válidos
    var cintura = parseFloat(cinturaInput.value);
    var altura = parseFloat(alturaInput.value);

    if (isNaN(cintura) || isNaN(altura)) {
        alert('Por favor, ingresa valores válidos para cintura y altura.');
        return;
    }

    // Calcular el índice cintura-altura (ICA)
    var indiceICA = cintura / altura;

    // Mostrar el resultado en el div con clase 'ica'
    var icaElement = document.querySelector('.ica');
    icaElement.innerHTML = "Tu índice cintura-altura es: " + indiceICA.toFixed(2);
}

