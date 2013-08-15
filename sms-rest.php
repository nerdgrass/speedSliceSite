<?php
	// Put the Form Value somewhere
	$phoneNumber = $_POST['phoneNumber'];

	//This widget needs the Twilio-PHP library
	require "twilio-php/Services/Twilio.php";

	// API Info
	$AccountSid = "AC968a64c5fd4872399adf4451258e67e1";
	$AuthToken = "6b9b9522b8cd8a6221e3d36448d87df6";

	// Instantiate a new Twilio Rest Client
	$client = new Services_Twilio($AccountSid, $AuthToken);

	// Create an array of one person, because this is how the tutorial did it, and damnit Jim, I'm a designer not a developer.
	$people = array(
		"+14158675309" => "Curious Greg",
	);

	// Loop over the amount of people in the array above (one), then send them an SMS message!
	foreach ($people as $number => $name) {

		$sms = $client->account->sms_messages->create(

		// Insert valid Twilio phone number here, IE, where the SMS is coming from.
			"617-553-1071", 

			// the number we are sending to - Any phone number
			$phoneNumber,

			// the sms body
			"Hi there! Try SpeedSlice, the fastest way to order pizza! http://www.speedslice.com/getspeedslice"
		);
	}