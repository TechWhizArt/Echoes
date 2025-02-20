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



function scrollToEvents() {
    const eventsSection = document.getElementById('events');
    eventsSection.scrollIntoView({ behavior: 'smooth' });
}












// Function to flip an image
function flipImage(imageId) {
    const image = document.getElementById(imageId);
    image.classList.toggle('flip');
}

// Function to unflip an image
function unflipImage(imageId) {
    const image = document.getElementById(imageId);
    image.classList.remove('flip');
}

// Hardcore flipping pattern
function startFlipping() {
    setTimeout(() => flipImage('image1'), 0 * 1000); // 0s
    setTimeout(() => flipImage('image10'), 2 * 1000); // 2s
    setTimeout(() => flipImage('image6'), 4 * 1000); // 4s
    setTimeout(() => { flipImage('image5'); unflipImage('image6'); }, 6 * 1000); // 6s
    setTimeout(() => { flipImage('image11'); unflipImage('image10'); }, 8 * 1000); // 8s
    setTimeout(() => flipImage('image4'), 10 * 1000); // 10s
    setTimeout(() => { flipImage('image12'); unflipImage('image1'); }, 12 * 1000); // 12s
    setTimeout(() => { unflipImage('image5'); unflipImage('image11'); }, 14 * 1000); // 14s
    setTimeout(() => { unflipImage('image4'); unflipImage('image12'); }, 16 * 1000); // 16s

    // Repeat the cycle every 18 seconds
    setTimeout(startFlipping, 18 * 1000);
}

// Start the flipping pattern
startFlipping();










//card infinite slide animation;;

const track = document.querySelector('.slider-track');
let cards = Array.from(document.querySelectorAll('.card'));
let cardWidth = cards[0].offsetWidth + 20;

function updateSlideWidth() {
    cardWidth = document.querySelector('.card').offsetWidth + 20;
}
window.addEventListener('resize', updateSlideWidth);

function slide() {
    // Clone the first card and add it to the end before transition
    let firstCardClone = cards[0].cloneNode(true);
    track.appendChild(firstCardClone);
    cards.push(firstCardClone);

    // Start the sliding animation
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(${-cardWidth}px)`;

    setTimeout(() => {
        // Remove the first card after sliding and reset the position
        track.style.transition = 'none';
        track.removeChild(cards[0]);
        track.style.transform = `translateX(0)`;
        
        // Update the cards array
        cards.shift();
    }, 500);
}

setTimeout(() => {
    slide();
    setInterval(slide, 5000);
}, 1000); // Start first slide after 1 second