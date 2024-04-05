document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 


    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;


    alert("Thank you for your feedback, " + name + ". We will contact you at " + email + " if necessary.");


    document.getElementById("contactForm").reset();
});