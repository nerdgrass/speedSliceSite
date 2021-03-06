//SMS Text widget
$("#smsSubmit").click(function() {
  //On submit, werk dat AJAX magic
    $.ajax({
         url: "sms-rest.php",
         data: {
            phoneNumber: $('#phoneNumber').val() 
         },
         type: "POST",
         success: function() {
          // Fade in the success message
            $("#smsSuccess").fadeIn(400);              
         }
    })
    //Make sure we stay on page
  return false;
});
//Restaurant Listing Form
$("#rfSubmit").click(function() {
  //On submit, werk dat AJAX magic
    $.ajax({
         url: "rfMailer.php",
         data: {
             rfName: $('#rfName').val(),
             rfRestaurantName: $('#rfRestaurantName').val(),
         rfEmail: $('#rfEmail').val(), 
         rfPhone: $('#rfPhone').val()
         },
         type: "POST",
         success: function() {
            // Fade in the success message
              $("#rfSuccess").fadeIn(400);              
         }
    })
    //Make sure we stay on page
  return false;
});
//Contact Form
$("#cfSubmit").click(function() {
  //On submit, werk dat AJAX magic
    $.ajax({
         url: "cfMailer.php",
         data: {
             cfName: $('#cfName').val(),
             cfEmail: $('#cfEmail').val(),
             cfMessage: $('#cfMessage').val()
         },
         type: "POST",
         success: function() {
            // Fade in the success message
              $("#cfSuccess").fadeIn(400);              
         }
    })
    //Make sure we stay on page
  return false;
});

//Lets make an educated guess about our user's browser!
function getBrowser() {
  var simpleUserAgent = 
    navigator
    .userAgent
    // capture browser name and version using REGEX POWER
    .match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
  if(simpleUserAgent){
    // ignore concat'd useragent+version, and minor version number
    return simpleUserAgent.slice(1,3);
  } else {
    // if not found, just ask the browser
    return [navigator.appName, navigator.appVersion]
  }
}
  // button IDs
var mHeroButton = 'mHeroButton'
  , mSubHeroButton = 'mSubHeroButton'
  , navButton = 'navButton'
  ;
  // add modifier classes to buttons by id & link to appropriate store
if (getBrowser()[0] == "Safari") {
  document.getElementById(navButton).className += " appStoreLight"; //App Store Graphics
  document.getElementById(navButton).href="https://itunes.apple.com/us/app/speedslice/id636969512?mt=8";
  document.getElementById(mHeroButton).className += " appStore";
  document.getElementById(mHeroButton).href="https://itunes.apple.com/us/app/speedslice/id636969512?mt=8";
  document.getElementById(mSubHeroButton).className += " playStore";
  document.getElementById(mSubHeroButton).href="https://play.google.com/store/apps/details?id=com.speedslice.speedsliceapp&hl=en"; 
} else if (getBrowser()[0] == "Chrome") {
  document.getElementById(navButton).className += " playStoreLight";
  document.getElementById(navButton).href="https://play.google.com/store/apps/details?id=com.speedslice.speedsliceapp&hl=en"; 
  document.getElementById(mHeroButton).className += " playStore";
  document.getElementById(mHeroButton).href="https://play.google.com/store/apps/details?id=com.speedslice.speedsliceapp&hl=en"; 
  document.getElementById(mSubHeroButton).className += " appStore";
  document.getElementById(mSubHeroButton).href="https://itunes.apple.com/us/app/speedslice/id636969512?mt=8"; 
} else {

}
