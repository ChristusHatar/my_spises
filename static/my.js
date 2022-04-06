// some javascript for password validation

    var myInput = document.getElementById("password1");
    var letter = document.getElementById("lowercase");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");


// When the user clicks on the password field, show the message box
 myInput.onfocus= function() { document.getElementById("message").style.display = "block"; }

// When the user clicks outside the password field, hide the message box
 myInput.onfocus= function() { document.getElementById("message").style.display= "none"; }


// When the user starts to type something inside the password field
 myInput.onkeyup= function() {

 // Validate lowercase letters
 var lowerCaseLetters = /a-z/g;
 if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
    }
 else {
    letter.classList.add("valid");
    letter.classList.remove("invalid"); }

 // Validate capital letters
 var upperCaseLetters = /A-Z/g;
 if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
 else {
    capital.classList.add("valid");
    capital.classList.remove("invalid"); }


  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}



$(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

