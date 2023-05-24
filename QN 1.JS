function validateForm() {
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var colors = document.getElementsByName("color");
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;
  
    // Check if name is empty
    if (name == "") {
      document.getElementById("name").nextElementSibling.textContent = "* This field is required";
      return false;
    }
  
    // Check if name is more than 20 characters long
    if (name.length > 20) {
      document.getElementById("name").nextElementSibling.textContent = "Name should not have a maximum of 20 characters";
      return false;
    }
  
    // Check if address is empty
    if (address == "") {
      document.getElementById("address").nextElementSibling.textContent = "* This field is required";
      return false;
    }
  
    // Check if at least two colors are selected
    var selectedColors = 0;
    for (var i = 0; i < colors.length; i++) {
      if (colors[i].checked) {
        selectedColors++;
      }
    }
  
    if (selectedColors < 2) {
      document.getElementById("color1").nextElementSibling.textContent = "* You must select at least two colors";
      return false;
    }
  
    // Check if passwords match
    if (password != confirmPassword) {
      document.getElementById("password").nextElementSibling.textContent = "Passwords do not match";
      return false;
    }
  
    return true;
  }
  