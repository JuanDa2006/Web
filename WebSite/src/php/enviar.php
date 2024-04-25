<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Crear un array con los datos a enviar al webhook de Discord
    $data = array(
        "content" => "Nuevo mensaje:\nNombre: " . $name . "\nCorreo Electrónico: " . $email . "\nMensaje: " . $message
    );

    // Convertir el array a JSON
    $json_data = json_encode($data);

    // URL del webhook de Discord
    $webhook_url = "https://discord.com/api/webhooks/1142591778835402862/WDUFvzwOjSyJerIpx0ZbfICQfK0WVe7U_sYWKLWtqjnBxXp0yHyrLciDR7amUoBF59wC";

    // Configurar las opciones de la solicitud HTTP POST
    $options = array(
        "http" => array(
            "header" => "Content-Type: application/json",
            "method" => "POST",
            "content" => $json_data
        )
    );

    // Crear un contexto de solicitud HTTP
    $context = stream_context_create($options);

    // Realizar la solicitud HTTP POST al webhook de Discord
    $result = file_get_contents($webhook_url, false, $context);

    // Comprobar si la solicitud fue exitosa
    if ($result !== false) {
        echo "Mensaje enviado con éxito a Discord.";
    } else {
        echo "Error al enviar el mensaje a Discord. Por favor, vuelva a intentarlo.";
    }
} else {
    // Si se accede directamente a este archivo, mostrar un mensaje de error
    echo "Acceso no autorizado.";
}
?>