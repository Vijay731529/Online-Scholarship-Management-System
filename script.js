// Wait for the document to fully load
document.addEventListener('DOMContentLoaded', () => {
   
    // Select all apply buttons
    const applyButtons = document.querySelectorAll('.apply-btn');

    applyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the scholarship name from the data attribute
            const scholarshipName = this.getAttribute('data-scholarship');
           
            // Simple interaction: Alert the user
            alert(`You have started your application for: ${scholarshipName}`);
           
            // In a real system, you would redirect to an application form:
            // window.location.href = "application-form.html";
        });
    });

    // Add a simple effect to nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            console.log("Navigating to: " + link.innerText);
        });
    });
});
