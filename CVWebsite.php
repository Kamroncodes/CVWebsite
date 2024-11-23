<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $schoolname = htmlspecialchars($_POST['schoolname']); 
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL); 
    $message = htmlspecialchars($_POST['message']);

    $to = "cvwebsitesubmission.relearn089@passinbox.com";  
    $subject = "CV Website Form From: School / Institution Name: $schoolname\n"; 
    $headers = "From: " . $email . "\r\n"; 
    $headers .= "Reply-To: " . $email . "\r\n"; 
    $body = "Email: $email\nMessage: $message";

    if (mail($to, $subject, $body, $headers)) { 
        echo "Message sent!"; 
        } else { 
        echo "Failed to send message."; }          
} else { 
        echo "Invalid request method."; 
        } 
?>
