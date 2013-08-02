$('#smsSend').submit(function() {
	var phoneNumber = $("#phoneNumber").val();
	var dataString = 'phoneNumber=' + phoneNumber;
		$.ajax({
			type : "POST",
			url : "sms-rest.php",
			data : dataString,
			cache : false,
			//Fade in success div
			success : function() {				
                $("#smsSuccess").fadeIn(400);
			}
		});
  return false;
});