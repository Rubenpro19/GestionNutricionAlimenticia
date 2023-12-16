<?php
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $contrasena = $_POST['contrasena'];

    $sql = "SELECT * FROM usuarios WHERE email='$email' AND contrasena='$contrasena'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Usuario autenticado
        $row = $result->fetch_assoc();
        session_start();
        $_SESSION['email'] = $email;
        $_SESSION['nombre'] = $row['nombre'];
        header("Location: procesos.php"); // Redirigir a la página de inicio
    } else {
        echo "Error: Credenciales incorrectas";
    }
}
?>
