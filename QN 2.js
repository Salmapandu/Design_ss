var form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var registerNumber = document.getElementById("register_number").value;
  var dob = document.getElementById("dob").value;
  var program = document.getElementById("program").value;
  var email = document.getElementById("email").value;
  var temporaryAddress = document.getElementById("temporary_address").value;
  var permanentAddress = document.getElementById("permanent_address").value;
  var phoneNumber = document.getElementById("phone_number").value;

  var errors = [];

  if (name === "") {
    errors.push("Please enter your name.");
  } else if (name.length > 30) {
    errors.push("Your name must not exceed 30 characters.");
  }

  if (registerNumber === "") {
    errors.push("Please enter your register number.");
  } else if (/[a-zA-Z0-9]+/.test(registerNumber)) {
  errors.push("Your register number can only contain alphabets and numbers")
  }
  if (dob === "") {
  errors.push("Please enter your date of birth.")
 }
 if (program === "") {
 errors.push("Please select a program.")
 }
 if (email === "") {
 errors.push("Please enter your email address\.")
 } else if (/^\[a\-zA\-Z0\-9\.\_%\+\-\]\+@\[a\-zA\-Z0\-9\.\-\]\+\\\.\[a\-zA\-Z\]\{2,6}.test(email)) {
    errors.push("Your email address is not valid.")
  }
});
