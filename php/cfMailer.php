<?php
    $cfName = $_POST['cfName'];
    $cfEmail = $_POST['cfEmail'];
    $cfMessage = $_POST['cfMessage'];
    $from = 'From: $cfName'; 
    $to = 'arboerstler@gmail.com'; 
    $subject = 'New Message on SpeedSlice.com';
    $message = "From: $cfName\n E-Mail: $cfEmail\n Message:\n $cfMessage";

    mail($to, $subject, $message);
?>