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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perfil de Usuario</title>
    <link rel="stylesheet" href="./styles/perfil.css">
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

    <section id="perfil">
        <div class="contenedor">
            <div class="perfil-info">
                <img src="img/fotos-de-perfil.jpg" alt="Foto de Perfil">
                <h2>
                    <?php echo $_SESSION['nombre']; ?>
                </h2>
                <p>Correo:
                    <?php echo $_SESSION['email']; ?>
                </p>
            </div>

            <div class="editar-perfil">
                <h2>Editar Perfil</h2>
                <form action="#" method="post">
                    <label for="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" value="<?php echo $_SESSION['nombre']; ?>">

                    <label for="correo">Correo:</label>
                    <input type="email" id="correo" name="correo" value="<?php echo $_SESSION['email']; ?>">

                    <hr>

                    <h3>Cambiar Contraseña</h3>
                    <label for="contrasena-actual">Contraseña Actual:</label>
                    <input type="password" id="contrasena-actual" name="contrasena-actual">

                    <label for="contrasena-nueva">Contraseña Nueva:</label>
                    <input type="password" id="contrasena-nueva" name="contrasena-nueva">

                    <label for="confirmar-contrasena">Confirmar Contraseña:</label>
                    <input type="password" id="confirmar-contrasena" name="confirmar-contrasena">

                    <input type="submit" value="Guardar Cambios">
                </form>
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