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
    <title>Contacto</title>
    <link rel="stylesheet" href="./styles/contacto.css">
    <link rel="icon" href="./img/favicon.ico" type="image/x-icon">
</head>

<body>
    <header>
        <div class="contenedor">
            <p class="logo"><a href="index.php">Nutrición Alimenticia</a></p>
            <nav>
                <a href="procesos.php">Regresar</a>
            </nav>
        </div>
    </header>

    <section class="Comentario">
        <div class="contenedor">
            <h1>Contáctate Conmigo</h1>
            <form action="">
                <label for="comentario">Comentario:</label>
                <textarea name="comentario" id="comentario" rows="5"></textarea>
                <button type="submit">Enviar</button>
            </form>
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