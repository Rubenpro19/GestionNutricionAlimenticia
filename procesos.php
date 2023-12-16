<?php
session_start();

// Verificar si el usuario ha iniciado sesión
if (!isset($_SESSION['email'])) {
    header("Location: login.php"); // Redirigir al formulario de inicio de sesión si no ha iniciado sesión
    exit();
}
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Procesos</title>
    <link rel="stylesheet" href="./styles/procesos.css">
    <link rel="icon" href="./img/favicon.ico" type="image/x-icon">
    <script src="JavaScript/Procesos.js" defer></script>
</head>

<body>
    <header>
        <div class="contenedor">
            <p class="logo"><a href="index.php">Nutrición Alimenticia</a></p>
            <nav>
                <a href="cerrar_sesion.php">Cerrar Sesión</a>
                <a href="perfil.php">Ver Perfil</a>
            </nav>
        </div>
    </header>

    <section class="proceso">
        <div class="contenedor">
            <button onclick="abrirModal()">CALCULO</button>
            <div id="miModal" class="modal">
                <div class="modal-contenido">
                    <span class="cerrar" onclick="cerrarModal()">&times;</span>

                    <h2>Ingresar datos:</h2>
                    <form>
                        <label for="edad">Edad:</label>
                        <input type="text" id="edad">

                        <label for="genero">Sexo:</label>
                        <select id="genero" name="genero" required>
                            <option value="masculino">Masculino</option>
                            <option value="femenino">Femenino</option>
                        </select>

                        <label for="altura">Altura:</label>
                        <input placeholder="Ingrese su altura en cm" type="text" id="altura">

                        <label for="peso">Peso:</label>
                        <input placeholder="Ingrese su pego en kg" type="text" id="peso">

                        <label for="cintura">Cintura:</label>
                        <input placeholder="Ingrese la medida en cm" type="text" id="cintura">

                        <label for="cadera">Cadera:</label>
                        <input placeholder="Ingrese la medida en cm" type="text" id="cadera">

                        <label for="cir-muñ">Circunferencia de la muñeca:</label>
                        <input placeholder="Ingrese la medida en cm" type="text" id="cir-muñ">

                        <label for="cuello">Circunferencia del cuello:</label>
                        <input placeholder="Ingrese la medida en cm" type="text" id="cuello">

                        <label for="act-fisica">Actividad física:</label>
                        <select name="nivel" id="nivel">
                            <option value="sedentario">Sedentario</option>
                            <option value="leve">Leve (1-3 días por semana)</option>
                            <option value="moderada">Moderada (3-5 días por semana)</option>
                            <option value="intenso">Intenso (6-7 días por semana)</option>
                            <option value="muy_intenso">Muy intenso (2 veces por día)</option>
                        </select>
                        <div id="boton">
                            <button onclick="calcularTMB();" type="button"> Calcular</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <section id="calculos-generales">
        <div class="contenedor">
            <div class="calculospro">
                <div class="calculos">
                    <h1>Resultado del cálculo de tmb:</h1>
                    <div id="resultado" class="tmb"> </div>
                    <div class="actividad-fisica"></div>
                </div>

                <div class="calculos">
                    <div>
                        <h1>Tu IMC es:</h1>
                        <div class="imc">
                        </div>
                    </div>
                </div>

                <div class="calculos">
                    <div class="resultado-rcc">
                        <h1>Resultado del cálculo de tu índice cintura-cadera:</h1>
                        <div class="indicecc"></div>
                    </div>
                </div>

                <div class="calculos">
                    <div class="resultado">
                        <h1>Tu índice cintura-talla es:</h1>
                        <div class="indiceica"></div>
                    </div>
                </div>
                <div class="calculos">
                    <div>
                        <h1>Tu porcentaje de grasa:</h1>
                        <div class="Rporgrasa"></div>
                    </div>
                </div>
                <div class="calculos">
                    <div>
                        <h1>Tu complexión de hueso:</h1>
                        <div class="indicecmñ"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div class="contenedor">
            <p>Redes Sociales:</p>
            <ul>
                <li>
                    <a target="_blank" href="https://www.facebook.com">
                        <img src="img/facebook.png" width="25px" alt="Facebook">
                    </a>
                    <a target="_blank" href="https://www.instagram.com">
                        <img src="img/instagram.png" width="25px" alt="Instagram">
                    </a>
                    <a target="_blank" href="https://www.whatsapp.com">
                        <img src="img/whatsapp.png" width="25px" alt="WhatsApp">
                    </a>
                </li>
            </ul>
        </div>
    </footer>


</body>

</html>