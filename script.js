// Add event listener to the booking form
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var car = document.getElementById('car').value;
    var date = document.getElementById('date').value;
    
    // Validate form data
    if (name === "") {
        alert("Please enter your name.");
        return;
    }
    if (email === "") {
        alert("Please enter your email.");
        return;
    }
    if (car === "") {
        alert("Please select a car.");
        return;
    }
    if (date === "") {
        alert("Please select a date.");
        return;
    }
    
    // Create booking object
    var booking = {
        name: name,
        email: email,
        car: car,
        date: date
    };
    
    // Handle the form submission (e.g., send the booking data to the server)
    console.log("Booking submitted:", booking);
    
    // Clear the form
    document.querySelector('form').reset();
    
    // Show success message
    alert("Booking submitted successfully!");
});

function myFunction() {
    const x = document.getElementById("myLinks");
    x.classList.toggle("show");
}

