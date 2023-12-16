<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Login</title>
    <link rel="stylesheet" href="./styles/formularios.css">
    <link rel="icon" href="./img/favicon.ico" type="image/x-icon">
</head>

<body>
    <header>
        <div class="contenedor">
            <p class="logo"><a href="index.php">Nutrición Alimenticia</a></p>
            <nav>
                <a href="index.php">Regresar</a>
            </nav>
        </div>
    </header>

    <section id="Formulario">
        <div class="contenedor">
            <h1>Iniciar Sesión</h1>
            <form id=login action="login_usuario.php" method="post">
                <label for="email">Correo electrónico:</label>
                <input type="email" placeholder="Ingrese su correo" id="email" name="email" required><br>

                <label for="contrasena">Contraseña:</label>
                <input type="password" placeholder="Ingrese su contraseña" id="contrasena" name="contrasena"
                    required><br>

                <button type="submit">Iniciar Sesión</button>
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