<?php

if(isset($_POST['submit'])){
    $fname = $_POST['fname'];
    $message = $_POST['message'];
    $email = $_POST['email'];

    $to = "40535343@live.napier.ac.uk";
    $subject = "Issue with Website";
    $header = "From: ".$fname;

    mail($to, $subject, $message, $header);
    echo "Message has been sent";
}
?>