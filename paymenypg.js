function validateAndSubmit() {
    var cardholderName = document.getElementsByName("name")[0].value;
    var cardNumber = document.getElementById("card_number").value;

    
    if (cardholderName.length < 3) {
        alert("Cardholder Name must have at least 3 characters.");
        return;
    }

    
    if (cardNumber.length !== 16) {
        alert("Card Number must be exactly 16 digits long.");
        return;
    }

    
    document.getElementById("paymentForm").submit();
}
function validateCardNumber() {
    var cardNumber = document.getElementById("card_number").value;
    if (cardNumber.length !== 16) {
        alert("Please enter a 16-digit card number.");
        return false;
    }
    return true;
}