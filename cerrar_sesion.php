<?php
session_start();
session_destroy();
header("Location: index.php"); // Redirigir al formulario de inicio de sesión
?>