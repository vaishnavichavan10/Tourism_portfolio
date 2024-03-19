document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var responseDiv = document.getElementById("response");
    
   
    
    responseDiv.innerHTML = `<p>Thank you, ${name}! Your message has been received.<br>We will contact you at ${email}.</p>`;
    
   
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
});
