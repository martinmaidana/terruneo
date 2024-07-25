<?php


    $name = $_POST['name'];
    $organizacion = $_POST['organizacion'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $mensaje = $_POST['mensaje'];
    

    $to = 'contacto@terruneo.com';
    $subject = 'Contacto terruneo';

    $message = $message = "
    <html>
    <head>
        <title>Correo en HTML</title>
    </head>
    <body>
        <p> Se quieren comunicar desde Terruneo:</p>
        <p> <strong> Nombre: </strong> $name </p>
        <p> <strong> Organizacion: </strong> $organizacion </p>
        <p> <strong> Email: </strong> $email </p>
        <p> <strong> Telefono: </strong> $telefono </p>
        <p> <strong> Mensaje: </strong> $mensaje </p>
    </body>
    </html>
    ";

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: $to\r\n";
    $headers .= "Reply-To: $to\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();


    if (mail($to, $subject, $message, $headers)) {

        header('Content-Type: application/json');
        echo json_encode(['error' => 'Email enviado']);

    } else {
        http_response_code(500);
        header('Content-Type: application/json');
        echo json_encode(['error' => 'No pudimos enviar el mail']);
    }


?>

