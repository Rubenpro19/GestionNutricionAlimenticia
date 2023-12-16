<?php
$servername = "212.1.208.199"; // por lo general, "localhost"
$username = "u312507976_db46";
$password = "5Ag723-2";
$database = "u312507976_db46";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>