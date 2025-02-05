function toggleMenu() {
    var navLinks = document.getElementById("nav-links");
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const moveLeft = document.getElementById('moveLeft');
    const moveRight = document.getElementById('moveRight');
    const eventsContainer = document.querySelector('.events-container');
    const eventBoxes = document.querySelectorAll('.event-box');
    
    let offset = 0;
    const boxWidth = 250; // Event box width
    const totalWidth = boxWidth * eventBoxes.length; // Total width of all event boxes combined

    // Initially hide the left arrow if we're at the first position
    moveLeft.style.display = 'none';

    // Move right
    moveRight.addEventListener('click', () => {
        offset -= boxWidth; // Move the container by the width of the event box
        if (offset <= -(totalWidth - (boxWidth * 3))) {
            moveRight.style.display = 'none'; // Hide right arrow when end is reached
        }
        moveLeft.style.display = 'block'; // Show left arrow
        eventsContainer.style.transform = `translateX(${offset}px)`;
    });

    // Move left
    moveLeft.addEventListener('click', () => {
        offset += boxWidth; // Move the container back by the width of the event box
        if (offset >= 0) {
            moveLeft.style.display = 'none'; // Hide left arrow when start is reached
        }
        moveRight.style.display = 'block'; // Show right arrow
        eventsContainer.style.transform = `translateX(${offset}px)`;
    });
});


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simulate form submission (you can replace this with an actual API call)
    setTimeout(() => {
        alert(`Thank you, ${name}! Your message has been sent.`);
        document.getElementById("contactForm").reset(); // Clear the form
    }, 1000);
});