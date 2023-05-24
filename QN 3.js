var americanExpressRegex = /^3[47][0-9]{13}$/;
var masterCardRegex = /^5[1-5][0-9]{14}$/;
var visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
var discoverRegex = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
var dinersClubRegex = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/;
function validateCreditCard() {

  let cardNumber = document.getElementById("number");
  
  if (americanExpressRegex.test(cardNumber)) {
    alert ("American Express");
  } else if (masterCardRegex.test(cardNumber)) {
    alert ("MasterCard");
  } else if (visaRegex.test(cardNumber)) {
    alert ("VISA");
  } else if (discoverRegex.test(cardNumber)) {
    alert ("Discover");
  } else if (dinersClubRegex.test(cardNumber)) {
    alert ("Diners Club");
  } else {
    alert ("Invalid credit card number");
  }
}
