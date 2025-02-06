function toggleMenu() {
    var navLinks = document.getElementById("nav-links");
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const moveLeft = document.getElementById('moveLeft');
    const moveRight = document.getElementById('moveRight');
    const eventsContainer = document.querySelector('.events-container');
    const eventBoxes = document.querySelectorAll('.event-box');
    const boxWidth = eventBoxes[0].offsetWidth + 20; // Width of one event box + gap
    const visibleBoxes = 3; // Number of boxes visible at a time
    let offset = 0;

    // Initially hide the left arrow
    moveLeft.style.display = 'none';

    // Move right
    moveRight.addEventListener('click', () => {
        offset += boxWidth * visibleBoxes; // Move by the width of visible boxes
        if (offset >= eventsContainer.scrollWidth - eventsContainer.clientWidth) {
            offset = eventsContainer.scrollWidth - eventsContainer.clientWidth; // Limit the offset
            moveRight.style.display = 'none'; // Hide right arrow when end is reached
        }
        moveLeft.style.display = 'block'; // Show left arrow
        eventsContainer.scrollTo({
            left: offset,
            behavior: 'smooth'
        });
    });

    // Move left
    moveLeft.addEventListener('click', () => {
        offset -= boxWidth * visibleBoxes; // Move back by the width of visible boxes
        if (offset <= 0) {
            offset = 0; // Limit the offset
            moveLeft.style.display = 'none'; // Hide left arrow when start is reached
        }
        moveRight.style.display = 'block'; // Show right arrow
        eventsContainer.scrollTo({
            left: offset,
            behavior: 'smooth'
        });
    });

    // Update arrow visibility on manual scroll
    eventsContainer.addEventListener('scroll', () => {
        offset = eventsContainer.scrollLeft;
        if (offset <= 0) {
            moveLeft.style.display = 'none';
        } else {
            moveLeft.style.display = 'block';
        }
        if (offset >= eventsContainer.scrollWidth - eventsContainer.clientWidth) {
            moveRight.style.display = 'none';
        } else {
            moveRight.style.display = 'block';
        }
    });
});



// disable button in small screens
