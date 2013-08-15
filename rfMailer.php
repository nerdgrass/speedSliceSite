<?php
    $rfName = $_POST['rfName'];
    $rfRestaurantName = $_POST['rfRestaurantName'];
    $rfEmail = $_POST['rfEmail'];
    $rfPhone = $_POST['rfPhone'];
    $from = 'From: $rfName'; 
    $to = 'contact@speedslice.com'; 

    $body = "From: $rfName\n E-Mail: $rfEmail\n Phone Number: $rfPhone \n Restaurant Name: $rfRestaurantName";

    mail($to,$from,$body);

?>