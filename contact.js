function validateForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // First Name Validation
    if (firstName.length < 5) {
        alert("First name must be at least 5 characters.");
        return false;
    }

    // Last Name Validation
    if (lastName.length < 5) {
        alert("Last name must be at least 5 characters.");
        return false;
    }

    // Email Validation
    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Date Validation: Ensure a date has been selected
    if (date === "") {
        alert("Please select a date.");
        return false;
    }

    // Phone Validation
    if (phone.length !== 10 || isNaN(phone)) {
        alert("Phone number must be exactly 10 digits.");
        return false;
    }

    // Message Validation
    if (message.length < 50) {
        alert("Message must contain at least 50 characters.");
        return false;
    }

    return true; // Allow form submission if all validations pass
}
