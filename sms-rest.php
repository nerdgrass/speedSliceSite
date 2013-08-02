<?php
	// Put the Form Value somewhere
	$phoneNumber = $_POST['phoneNumber'];

	//This widget needs the Twilio-PHP library
	require "twilio-php/Services/Twilio.php";

	// API Info
	$AccountSid = "AC00bcdfc647ae0893d56a85384fc5c3c5";
	$AuthToken = "70c36964b3e6e857bf8524abd43484ea";

	// Instantiate a new Twilio Rest Client
	$client = new Services_Twilio($AccountSid, $AuthToken);

	// Create an array of one person, because this is how the tutorial did it, and damnit, Jim, I'm a designer not a developer.
	$people = array(
		"+14158675309" => "Curious George",
	);

	// Loop over the amount of people in the array above (one), then send them an SMS message!
	foreach ($people as $number => $name) {

		$sms = $client->account->sms_messages->create(

		// Insert valid Twilio phone number here, IE, where the SMS is coming from.
			"203-819-7807", 

			// the number we are sending to - Any phone number
			$phoneNumber,

			// the sms body
			"Hey, Monkey Party at 6PM. Bring Bananas!"
		);
	}