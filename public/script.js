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







  const featuredEvent = document.getElementById('featured-event');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        featuredEvent.classList.add('offscreen');
      } else {
        featuredEvent.classList.remove('offscreen');
      }
    });
  }, { threshold: 0.1 });

  observer.observe(featuredEvent);


  document.addEventListener("DOMContentLoaded", function () {
    const iframe = document.querySelector(".map iframe");

    if (!iframe) {
        console.error("Map iframe not found!");
        return;
    }

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!iframe.src) { // Only set the src if it's not set yet
                    iframe.src = iframe.getAttribute("data-src");
                    observer.disconnect(); // Stop observing after loading
                }
            }
        });
    }, { threshold: 0.1 });

    observer.observe(iframe);
});





// pause vdo on scroll



document.addEventListener("DOMContentLoaded", function () {
    const eventsVideo = document.getElementById("events-video");
    const eventsSection = document.getElementById("events");

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                eventsVideo.play();
            } else {
                eventsVideo.pause();
            }
        });
    }, { threshold: 0.1 });

    observer.observe(eventsSection);
});




// Function to handle the testimonials slider

document.addEventListener('DOMContentLoaded', function() {
    const testimonials = [
        {
            text: "Joining this club transformed my college experience. I've made lifelong friends and gained skills that helped me land my first internship!",
            name: "Alex Johnson",
            role: "Computer Science '22",
            image: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            text: "The workshops and networking events organized by the club gave me the confidence to pursue my dream career. I'm forever grateful for this community.",
            name: "Sam Wilson",
            role: "Business Admin '23",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            text: "As an international student, this club became my home away from home. The support and opportunities here are incredible.",
            name: "Maria Garcia",
            role: "Electrical Engineering '24",
            image: "https://randomuser.me/api/portraits/women/63.jpg"
        },
        {
            text: "I never thought I'd find people who shared my passion until I joined this club. Now we're working on projects together outside of school!",
            name: "Jordan Lee",
            role: "Graphic Design '23",
            image: "https://randomuser.me/api/portraits/men/75.jpg"
        },
        {
            text: "The leadership skills I developed through this club helped me grow both personally and professionally. Highly recommend to any student!",
            name: "Taylor Smith",
            role: "Psychology '22",
            image: "https://randomuser.me/api/portraits/women/85.jpg"
        }
    ];
    
    const container = document.querySelector('.testimonials-container');
    const navContainer = document.querySelector('.testimonial-nav');
    let currentIndex = 0;
    
    // Create testimonial cards
    testimonials.forEach((testimonial, index) => {
        const card = document.createElement('div');
        card.className = `testimonial-card ${index === 0 ? 'active' : ''}`;
        card.innerHTML = `
            <div class="quote-icon">"</div>
            <p class="testimonial-text">${testimonial.text}</p>
            <div class="testimonial-author">
                <img src="${testimonial.image}" alt="${testimonial.name}" class="author-image">
                <div class="author-info">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.role}</p>
                </div>
            </div>
        `;
        container.appendChild(card);
        
        // Create navigation dots
        const dot = document.createElement('div');
        dot.className = `nav-dot ${index === 0 ? 'active' : ''}`;
        dot.dataset.index = index;
        dot.addEventListener('click', () => {
            goToTestimonial(index);
        });
        navContainer.appendChild(dot);
    });
    
    // Auto-rotate testimonials
    let interval = setInterval(nextTestimonial, 5000);
    
    function nextTestimonial() {
        let nextIndex = (currentIndex + 1) % testimonials.length;
        goToTestimonial(nextIndex);
    }
    
    function goToTestimonial(index) {
        // Reset interval when manually navigating
        clearInterval(interval);
        interval = setInterval(nextTestimonial, 5000);
        
        const cards = document.querySelectorAll('.testimonial-card');
        const dots = document.querySelectorAll('.nav-dot');
        
        // Update current card
        cards[currentIndex].classList.remove('active');
        cards[currentIndex].classList.add('prev');
        
        // Update new card
        cards[index].classList.remove('prev');
        cards[index].classList.add('active');
        
        // Update dots
        dots[currentIndex].classList.remove('active');
        dots[index].classList.add('active');
        
        currentIndex = index;
        
        // Clean up classes after animation
        setTimeout(() => {
            cards.forEach(card => {
                if (!card.classList.contains('active')) {
                    card.classList.remove('prev');
                }
            });
        }, 800);
    }
    
    // Pause on hover
    container.addEventListener('mouseenter', () => {
        clearInterval(interval);
    });
    
    container.addEventListener('mouseleave', () => {
        clearInterval(interval);
        interval = setInterval(nextTestimonial, 5000);
    });
});


// Add this to your existing JS
container.addEventListener('mousemove', (e) => {
const cards = document.querySelectorAll('.testimonial-card');
cards.forEach(card => {
if(card.classList.contains('active')) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const angleY = (x - centerX) / 20;
    const angleX = (centerY - y) / 20;
    
    card.style.transform = `
        perspective(1000px)
        rotateX(${angleX}deg)
        rotateY(${angleY}deg)
        translateX(0)
    `;
}
});
});

container.addEventListener('mouseleave', () => {
const activeCard = document.querySelector('.testimonial-card.active');
activeCard.style.transform = 'translateX(0)';
});

// Replace the testimonial text injection with:
function typeWriter(text, element, speed = 20) {
let i = 0;
element.innerHTML = '';
function typing() {
if (i < text.length) {
    element.innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, speed);
}
}
typing();
}

// Then modify your card creation to:
card.innerHTML = `
<div class="quote-icon">"</div>
<p class="testimonial-text"></p>
<div class="testimonial-author">
<img src="${testimonial.image}" alt="${testimonial.name}" class="author-image">
<div class="author-info">
    <h4>${testimonial.name}</h4>
    <p>${testimonial.role}</p>
</div>
</div>
`;
if(index === 0) {
typeWriter(testimonial.text, card.querySelector('.testimonial-text'));
}
