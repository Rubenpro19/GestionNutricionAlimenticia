
function calcularTMB() {
    console.log('Calculando TMB...');

    var pesoInput = document.getElementById('peso');
    var alturaInput = document.getElementById('altura');
    var edadInput = document.getElementById('edad');
    var generoSelect = document.getElementById('genero');
    var actividadFisicaSelect = document.getElementById('nivel');

    // Verificar que todos los campos tengan valores válidos
    var peso = parseFloat(pesoInput.value);
    var altura = parseFloat(alturaInput.value);
    var edad = parseFloat(edadInput.value);
    var genero = generoSelect.value;
    var actividadFisica = actividadFisicaSelect.value;

    if (isNaN(peso) || isNaN(altura) || isNaN(edad)) {
        alert('Por favor, ingresa valores válidos para peso, altura y edad.');
        return;
    }

    if (genero !== 'masculino' && genero !== 'femenino') {
        alert('Por favor, selecciona un género válido.');
        return;
    }

    var tmb = 0;

    if (genero === 'masculino') {
        tmb = (10*peso) + (6.25*altura)- (5*edad)+5;
    } else if (genero === 'femenino') {
        tmb =  (10 * peso) + (6.25 * altura) - (5 * edad)-161;
    }

    var actividadFisica = actfisica();
    // Mostrar el resultado en el div con clase 'tmb'
    var tmbElement = document.querySelector('.tmb');
    tmbElement.innerHTML = "Tu TMB es aproximadamente " + tmb.toFixed(2) + " kcal/día.";

    calcularIMC(peso, altura);
   var actividadFisicaElement = document.querySelector('.actividad-fisica');
   var actividadFisicaResultado = actividadFisica * tmb;
   actividadFisicaElement.innerHTML = "Tu nivel de actividad física es: " + actividadFisicaResultado.toFixed(2) + " kcal/día.";
   calcularCinturaCadera(); 
   CalcularICA(); // Llamada a la función para calcular el índice cintura-altura
   complehueso();
   porcgrasa();
   cerrarModal();
}
/*
   var resultadoCC = calcularCinturaCadera();
   var resultadoCCElement = document.querySelector('.resultado-rcc');
   resultadoCCElement.innerHTML = "Tu índice cintura-cadera es: " + resultadoCC.indiceCC.toFixed(2) + "<br>" + resultadoCC.mensaje;
   */
   
function calcularIMC(peso, altura) {
    var imc = peso / Math.pow(altura / 100, 2);
    var mensaje = "";

    if (imc < 18.5) {
        mensaje = "Bajo peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        mensaje = "Normal";
    } else if (imc >= 25 && imc <= 29.9) {
        mensaje = "Sobrepeso";
    } else if (imc >= 30 && imc <= 34.9) {
        mensaje = "Obesidad I";
    } else if (imc >= 35 && imc <= 39.9) {
        mensaje = "Obesidad II";
    } else if (imc >= 40 && imc <= 49.9) {
        mensaje = "Obesidad III";
    } else if (imc > 50) {
        mensaje = "Obesidad IV";
    }

    var resultadoElement = document.querySelector('.imc');
    resultadoElement.innerHTML = "Tu IMC es: " + imc.toFixed(2) + "<br>" + mensaje;
}

 
       function actfisica (){
            var nivelSelect = document.getElementById('nivel');
            var nivelSeleccionado = nivelSelect.value;
        
            switch (nivelSeleccionado) {
                case 'sedentario':
                    return 1.2;
                case 'leve':
                    return 1.375;
                case 'moderada':
                    return 1.55;
                case 'intenso':
                    return 1.725;
                case 'muy_intenso':
                    return 1.9;
                default:
                    return 1.2;
            }
        }
       

        // Función para abrir el modal
function abrirModal() {
    document.getElementById('miModal').style.display = 'block';
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById('miModal').style.display = 'none';
}

/* */ 

function calcularCinturaCadera() {
    var cinturaInput = document.getElementById('cintura');
    var caderaInput = document.getElementById('cadera'); 

    // Verificar que ambos campos tengan valores válidos
    var cintura = parseFloat(cinturaInput.value);
    var cadera = parseFloat(caderaInput.value);

    if (isNaN(cintura) || isNaN(cadera)) {
        alert('Por favor, ingresa valores válidos para cintura y cadera.');
        return;
    }

    // Calcular la relación cintura-cadera
    var indiceCC = cintura / cadera;

    // Evaluar riesgo según el género
    var generoSelect = document.getElementById('genero');
    var genero = generoSelect.value;

    var mensaje = "";

    if (genero === 'femenino') {
        if (indiceCC < 0.85) {
            mensaje = "Sin riesgo de enfermedad cardiovascular.";
        } else {
            mensaje = "Con riesgo de enfermedad cardiovascular.";
        }
    } else if (genero === 'masculino') {
        if (indiceCC < 0.94) {
            mensaje = "Sin riesgo de enfermedad cardiovascular.";
        } else {
            mensaje = "Con riesgo de enfermedad cardiovascular.";
        }
    } else {
        mensaje = "Género no reconocido.";
    }

    // Definir tuValorDeIndiceCC y tuMensaje
    var tuValorDeIndiceCC = indiceCC;
    var tuMensaje = mensaje;

    // Mostrar el resultado en el div con clase 'indicecc'
    var indiceCCElement = document.querySelector('.indicecc');
    indiceCCElement.innerHTML = "Tu índice cintura-cadera es: " + indiceCC.toFixed(2) + "<br>" + mensaje;

    // Retornar el objeto
    return {
        indiceCC: tuValorDeIndiceCC,
        mensaje: tuMensaje
    };
}



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

    var generoSelect = document.getElementById('genero');
    var genero = generoSelect.value;

    var mensaje = "";

    if (genero === 'masculino') {
        if (indiceICA < 0.34) {
            mensaje = 'Bajo peso';
        } else if (indiceICA >= 0.34 && indiceICA <= 0.43) {
            mensaje = 'Normopeso bajo';
        } else if (indiceICA > 0.43 && indiceICA <= 0.53) {
            mensaje = 'Normopeso';
        } else if (indiceICA > 0.53 && indiceICA <= 0.58) {
            mensaje = 'Sobrepeso';
        } else if (indiceICA > 0.58 && indiceICA <= 0.63) {
            mensaje = 'Obesidad moderada';
        } else {
            mensaje = 'Obesidad alta';
        }
    } else if (genero === 'femenino') {
        if (indiceICA < 0.34) {
            mensaje = 'Bajo peso';
        } else if (indiceICA >= 0.34 && indiceICA <= 0.42) {
            mensaje = 'Normopeso bajo';
        } else if (indiceICA > 0.42 && indiceICA <= 0.49) {
            mensaje = 'Normopeso';
        } else if (indiceICA > 0.49 && indiceICA <= 0.54) {
            mensaje = 'Sobrepeso';
        } else if (indiceICA > 0.54 && indiceICA <= 0.58) {
            mensaje = 'Obesidad moderada';
        } else {
            mensaje = 'Obesidad alta';
        }
    }
 
var tuValordeIndiceICA = indiceICA;
var tuICAMensaje=mensaje;

    // Mostrar el resultado en el div con clase 'indiceica'
    var icaElement = document.querySelector('.indiceica');
    icaElement.innerHTML = "Tu índice cintura-altura es: " + indiceICA.toFixed(2) + "<br>" +mensaje;

    return {
        indiceICA: tuValordeIndiceICA,
        mensaje: tuICAMensaje
    };

}


/* complexion del hueso */

function complehueso(){
    var alturaInput = document.getElementById('altura');
    var cirmuñecaInput= document.getElementById('cir-muñ');

    var altura = parseFloat(alturaInput.value);
    var cirmuñ = parseFloat(cirmuñecaInput.value);
    
    if (isNaN(cirmuñ) || isNaN(altura)) {
        alert('Por favor, ingresa valores válidos para cintura y altura.');
        return;
    }

    var indicecmñ = altura/cirmuñ;

      // Evaluar riesgo según el género
      var generoSelect = document.getElementById('genero');
      var genero = generoSelect.value;
  
      var mensaje = "";

    if (genero === 'masculino') {
        if (indicecmñ < 9.6) {
            mensaje = "Grande";
        } else if (indicecmñ >= 9.6 && indicecmñ <= 10.1) {
            mensaje = "Mediana";
        } else {
            mensaje = "Pequeña";
        }
    } else if (genero === 'femenino') {
        if (indicecmñ < 9.9) {
            mensaje = "Grande";
        } else if (indicecmñ >= 9.9 && indicecmñ <= 10.9) {
            mensaje = "Mediana";
        } else {
            mensaje = "Pequeña";
        }
    } 

    var tuValordeIndicecmñ = indicecmñ;
    var tucmñMensaje=mensaje;

    var cmElement = document.querySelector('.indicecmñ');
    cmElement.innerHTML = "Tu índice complexion de hueso es: " + indicecmñ.toFixed(2)+ "<br>" + mensaje;;

    return {
        indicecmñ: tuValordeIndicecmñ,
        mensaje: tucmñMensaje
    };

}


function porcgrasa() {
    var alturaInput = document.getElementById('altura');
    var cinturaInput = document.getElementById('cintura');
    var caderaInput = document.getElementById('cadera');
    var cuelloInput = document.getElementById('circuello');
    var generoSelect = document.getElementById('genero');
    var cuelloInput = document.getElementById('cuello');

    var altura = parseFloat(alturaInput.value);
    var cintura = parseFloat(cinturaInput.value);
    var cadera = parseFloat(caderaInput.value);
    var cuello = parseFloat(cuelloInput.value);
    var genero = generoSelect.value;

    if (isNaN(cintura) || isNaN(cadera) || isNaN(cuello) || isNaN(altura)) {
        alert('Por favor, ingresa valores válidos para cintura y altura.');
        return;
    }
    if (genero !== 'masculino' && genero !== 'femenino') {
        alert('Por favor, selecciona un género válido.');
        return;
    }

    var Rporgrasa;

    if (genero === 'masculino') {
        Rporgrasa = 495 / (1.0324 - 0.19077 * Math.log(cintura - cuello) + 0.15456 * Math.log(altura)) - 450;
    } else if (genero === 'femenino') {
        Rporgrasa = 495 / (1.29579 - 0.3500 * Math.log(cintura + cadera - cuello) + 0.22100 * Math.log(altura)) - 450;
    }

    // Evaluar el mensaje para el índice % grasa en función de la edad
    var edadInput = document.getElementById('edad');
    var edad = parseInt(edadInput.value);

    var mensaje = "";

    if (genero === 'masculino') {
        if ((edad >= 20 && edad <= 39 && Rporgrasa >= 8 && Rporgrasa <= 20) ||
            (edad >= 40 && edad <= 59 && Rporgrasa >= 11 && Rporgrasa <= 22) ||
            (edad >= 60 && edad <= 79 && Rporgrasa >= 13 && Rporgrasa <= 25)) {
            mensaje = 'Saludable';
        } else if ((edad >= 20 && edad <= 39 && Rporgrasa > 20 && Rporgrasa <= 25) ||
            (edad >= 40 && edad <= 59 && Rporgrasa > 22 && Rporgrasa <= 28) ||
            (edad >= 60 && edad <= 79 && Rporgrasa > 25 && Rporgrasa <= 30)) {
            mensaje = 'Sobrepeso';
        } else if ((edad >= 20 && edad <= 39 && Rporgrasa > 25) ||
            (edad >= 40 && edad <= 59 && Rporgrasa > 28) ||
            (edad >= 60 && edad <= 79 && Rporgrasa > 30)) {
            mensaje = 'Obesidad';
        }
    } else if (genero === 'femenino') {
        if ((edad >= 20 && edad <= 39 && Rporgrasa >= 21 && Rporgrasa <= 33) ||
            (edad >= 40 && edad <= 59 && Rporgrasa >= 23 && Rporgrasa <= 35) ||
            (edad >= 60 && edad <= 79 && Rporgrasa >= 24 && Rporgrasa <= 36)) {
            mensaje = 'Saludable';
        } else if ((edad >= 20 && edad <= 39 && Rporgrasa > 33 && Rporgrasa <= 39) ||
            (edad >= 40 && edad <= 59 && Rporgrasa > 35 && Rporgrasa <= 40) ||
            (edad >= 60 && edad <= 79 && Rporgrasa > 36 && Rporgrasa <= 42)) {
            mensaje = 'Sobrepeso';
        } else if ((edad >= 20 && edad <= 39 && Rporgrasa > 39) ||
            (edad >= 40 && edad <= 59 && Rporgrasa > 40) ||
            (edad >= 60 && edad <= 79 && Rporgrasa > 42)) {
            mensaje = 'Obesidad';
        }
    }

    var tuValordeRporgrasa = Rporgrasa;
    var tuRporgrasaMensaje=mensaje;

    // Mostrar el resultado en el div con clase 'Rporgrasa'
    var porgrasaElement = document.querySelector('.Rporgrasa');
    porgrasaElement.innerHTML = "Tu índice % grasa es: " + Rporgrasa.toFixed(2) + "<br>" + mensaje;

    return {
        Rporgrasa: tuValordeRporgrasa,
        mensaje: tuRporgrasaMensaje
    };
}

