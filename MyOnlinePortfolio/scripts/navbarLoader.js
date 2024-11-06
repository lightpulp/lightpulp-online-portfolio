document.addEventListener("DOMContentLoaded", function() {
    fetch('../resources/components/navbar.html')
        .then(response => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.text();
        })
        .then(data => {
            console.log("Navbar loaded:", data); // Check the response in the console
            document.getElementById("navbar-container").innerHTML = data;
        })
        .catch(error => console.error("Error loading navbar:", error));
});
