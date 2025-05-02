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


document.addEventListener('DOMContentLoaded', function() {
    // Renamed all variables with eco_ prefix to avoid conflicts
    const eco_eventsData = [
        {
            title: "Annual Tech Symposium",
            date: "Oct 15-17, 2023",
            location: "Main Auditorium",
            description: "Join us for the biggest tech event of the year featuring industry leaders, workshops, and networking opportunities.",
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        }
    ];

    const eco_carouselMain = document.getElementById('eventsCarousel');
    const eco_navControls = document.getElementById('carouselNav');
    const eco_floatingElements = document.getElementById('floatingShapes');
    let eco_activeCardIndex = 0;

    // Create floating background elements
    function eco_generateFloatingElements() {
        const eco_colorPalette = [
            'rgba(89, 106, 132, 0.4)',
            'rgba(122, 108, 132, 0.4)',
            'rgba(181, 125, 137, 0.4)',
            'rgba(227, 182, 154, 0.4)',
            'rgba(70, 118, 135, 0.4)'
        ];

        for (let eco_i = 0; eco_i < 8; eco_i++) {
            const eco_shapeElement = document.createElement('div');
            eco_shapeElement.className = 'shape';
            
            const eco_elementSize = Math.random() * 300 + 100;
            const eco_elementColor = eco_colorPalette[Math.floor(Math.random() * eco_colorPalette.length)];
            const eco_posLeft = Math.random() * 100;
            const eco_posTop = Math.random() * 100;
            const eco_animDuration = Math.random() * 30 + 20;
            const eco_animDelay = Math.random() * 10;
            
            eco_shapeElement.style.width = `${eco_elementSize}px`;
            eco_shapeElement.style.height = `${eco_elementSize}px`;
            eco_shapeElement.style.background = eco_elementColor;
            eco_shapeElement.style.left = `${eco_posLeft}%`;
            eco_shapeElement.style.top = `${eco_posTop}%`;
            eco_shapeElement.style.animation = `eco_floatAnim ${eco_animDuration}s ease-in-out ${eco_animDelay}s infinite alternate`;
            
            eco_floatingElements.appendChild(eco_shapeElement);
        }
    }

    // Create event cards
    function eco_buildEventCards() {
        eco_eventsData.forEach((eco_event, eco_index) => {
            const eco_cardElement = document.createElement('div');
            eco_cardElement.className = `event-card ${eco_index === 0 ? 'active' : ''}`;
            eco_cardElement.innerHTML = `
                <div class="poster-container">
                    <img src="${eco_event.image}" alt="${eco_event.title}" class="poster">
                    <div class="event-status">Ongoing</div>
                </div>
                <div class="event-details">
                    <h2>${eco_event.title}</h2>
                    <div class="event-meta">
                        <span><i class="far fa-calendar-alt"></i> ${eco_event.date}</span>
                        <span><i class="fas fa-map-marker-alt"></i> ${eco_event.location}</span>
                    </div>
                    <p class="event-description">${eco_event.description}</p>
                    <div class="event-cta">
                        <a href="#" class="event-btn register-btn">Register Now</a>
                        <a href="#" class="event-btn learn-more">Learn More</a>
                    </div>
                </div>
            `;
            eco_carouselMain.appendChild(eco_cardElement);

            // Create navigation indicators
            const eco_indicatorDot = document.createElement('div');
            eco_indicatorDot.className = `eco-nav-indicator ${eco_index === 0 ? 'active' : ''}`;
            eco_indicatorDot.dataset.ecoIndex = eco_index;
            eco_indicatorDot.addEventListener('click', () => {
                eco_switchToCard(eco_index);
            });
            eco_navControls.appendChild(eco_indicatorDot);
        });
    }

    // Animate floating elements
    function eco_animateFloatingElements() {
        const eco_allShapes = document.querySelectorAll('.shape');
        eco_allShapes.forEach(eco_shape => {
            const eco_animationKeyframes = `
                @keyframes eco_floatAnim {
                    0% { transform: translate(0, 0) rotate(0deg); }
                    50% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg); }
                    100% { transform: translate(0, 0) rotate(0deg); }
                }
            `;
            
            const eco_styleElement = document.createElement('style');
            eco_styleElement.innerHTML = eco_animationKeyframes;
            document.head.appendChild(eco_styleElement);
        });
    }

    // Auto-rotate events
    let eco_carouselInterval = setInterval(eco_showNextCard, 1000);

    function eco_showNextCard() {
        const eco_nextCardPos = (eco_activeCardIndex + 1) % eco_eventsData.length;
        eco_switchToCard(eco_nextCardPos);
    }

    function eco_switchToCard(eco_targetIndex) {
        clearInterval(eco_carouselInterval);
        eco_carouselInterval = setInterval(eco_showNextCard, 5000);

        const eco_allCards = document.querySelectorAll('.event-card');
        const eco_allIndicators = document.querySelectorAll('.eco-nav-indicator');

        // Update current card
        eco_allCards[eco_activeCardIndex].classList.remove('active');
        eco_allCards[eco_activeCardIndex].classList.add('prev');

        // Update new card
        eco_allCards[eco_targetIndex].classList.remove('prev');
        eco_allCards[eco_targetIndex].classList.add('active');

        // Update indicators
        eco_allIndicators[eco_activeCardIndex].classList.remove('active');
        eco_allIndicators[eco_targetIndex].classList.add('active');

        eco_activeCardIndex = eco_targetIndex;

        // Clean up classes after animation
        setTimeout(() => {
            eco_allCards.forEach(eco_card => {
                if (!eco_card.classList.contains('active')) {
                    eco_card.classList.remove('prev');
                }
            });
        }, 800);
    }

    // Dynamic background gradient
    const eco_gradientColors = [
        'rgba(89, 106, 132, 0.8)',
        'rgba(122, 108, 132, 0.8)',
        'rgba(181, 125, 137, 0.8)',
        'rgba(227, 182, 154, 0.8)',
        'rgba(70, 118, 135, 0.8)'
    ];

    let eco_currentGradientIndex = 0;
    const eco_sectionElement = document.getElementById('ongoing-events');

    function eco_updateBackground() {
        const eco_primaryColor = eco_gradientColors[eco_currentGradientIndex];
        const eco_secondaryColor = eco_gradientColors[(eco_currentGradientIndex + 2) % eco_gradientColors.length];
        
        eco_sectionElement.style.background = `linear-gradient(135deg, ${eco_primaryColor}, ${eco_secondaryColor})`;
        eco_currentGradientIndex = (eco_currentGradientIndex + 1) % eco_gradientColors.length;
    }

    setInterval(eco_updateBackground, 5000);
    eco_updateBackground();

    // 3D tilt effect on posters
    const eco_allPosters = document.querySelectorAll('.poster-container');
    eco_allPosters.forEach(eco_poster => {
        eco_poster.addEventListener('mousemove', (eco_e) => {
            const eco_posterRect = eco_poster.getBoundingClientRect();
            const eco_mouseX = eco_e.clientX - eco_posterRect.left;
            const eco_mouseY = eco_e.clientY - eco_posterRect.top;
            const eco_centerX = eco_posterRect.width / 2;
            const eco_centerY = eco_posterRect.height / 2;
            const eco_tiltY = (eco_mouseX - eco_centerX) / 20;
            const eco_tiltX = (eco_centerY - eco_mouseY) / 20;
            
            eco_poster.style.transform = `perspective(1000px) rotateX(${eco_tiltX}deg) rotateY(${eco_tiltY}deg)`;
        });

        eco_poster.addEventListener('mouseleave', () => {
            eco_poster.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });

    // Initialize
    eco_generateFloatingElements();
    eco_buildEventCards();
    eco_animateFloatingElements();
});





 document.addEventListener('DOMContentLoaded', function() {
      const dataList = [
        {
          name: "AI Innovation Fair",
          timing: "May 15-17, 2025",
          venue: "Hall A - Innovation Block",
          summary: "Explore real-world applications of AI, ML, and robotics in this cutting-edge exhibition featuring student projects and industry demos.",
          visual: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1470&q=80"
        }
      ];

      const sliderDeck = document.getElementById('sliderDeck');
      const dotNav = document.getElementById('dotNav');
      const orbitContainer = document.getElementById('orbitContainer');
      let current = 0;

      function createOrbitingParticles() {
        const hues = [
          'rgba(90, 114, 131, 0.4)',
          'rgba(160, 128, 164, 0.4)',
          'rgba(201, 124, 147, 0.4)',
          'rgba(237, 192, 162, 0.4)',
          'rgba(71, 135, 151, 0.4)'
        ];

        for (let i = 0; i < 8; i++) {
          const blob = document.createElement('div');
          blob.className = 'glow-particle';
          blob.style.width = blob.style.height = `${Math.random() * 300 + 100}px`;
          blob.style.background = hues[Math.floor(Math.random() * hues.length)];
          blob.style.left = `${Math.random() * 100}%`;
          blob.style.top = `${Math.random() * 100}%`;
          blob.style.animation = `float ${30 + Math.random() * 20}s ease-in-out ${Math.random() * 10}s infinite alternate`;
          orbitContainer.appendChild(blob);
        }
      }

      function renderSlides() {
        dataList.forEach((e, idx) => {
          const panel = document.createElement('div');
          panel.className = `highlight-box ${idx === 0 ? 'active' : ''}`;
          panel.innerHTML = `
            <div class="image-zone">
              <img src="${e.visual}" alt="${e.name}" />
              <div class="badge-status">Live</div>
            </div>
            <div class="info-segment">
              <h3>${e.name}</h3>
              <div class="meta-line">
                <span><i class="far fa-calendar-alt"></i> ${e.timing}</span>
                <span><i class="fas fa-map-marker-alt"></i> ${e.venue}</span>
              </div>
              <p class="summary">${e.summary}</p>
              <div class="cta-area">
                <a href="#" class="cta-button btn-primary">Join Now</a>
                <a href="#" class="cta-button btn-outline">Details</a>
              </div>
            </div>`;
          sliderDeck.appendChild(panel);

          const mark = document.createElement('div');
          mark.className = `dot-unit ${idx === 0 ? 'active' : ''}`;
          mark.dataset.slide = idx;
          mark.onclick = () => moveTo(idx);
          dotNav.appendChild(mark);
        });
      }

      function moveTo(newIndex) {
        clearInterval(auto);
        auto = setInterval(nextSlide, 5000);

        const slides = document.querySelectorAll('.highlight-box');
        const dots = document.querySelectorAll('.dot-unit');

        slides[current].classList.remove('active');
        slides[current].classList.add('previous');
        slides[newIndex].classList.add('active');
        slides[newIndex].classList.remove('previous');

        dots[current].classList.remove('active');
        dots[newIndex].classList.add('active');

        current = newIndex;

        setTimeout(() => {
          slides.forEach(slide => !slide.classList.contains('active') && slide.classList.remove('previous'));
        }, 800);
      }

      function nextSlide() {
        const next = (current + 1) % dataList.length;
        moveTo(next);
      }

      let auto = setInterval(nextSlide, 5000);
      createOrbitingParticles();
      renderSlides();

      // Tilt effect
      setTimeout(() => {
        const zones = document.querySelectorAll('.image-zone');
        zones.forEach(zone => {
          zone.addEventListener('mousemove', e => {
            const rect = zone.getBoundingClientRect();
            const offsetX = e.clientX - rect.left;
            const offsetY = e.clientY - rect.top;
            const rotateY = (offsetX - rect.width / 2) / 20;
            const rotateX = (rect.height / 2 - offsetY) / 20;
            zone.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
          });
          zone.addEventListener('mouseleave', () => {
            zone.style.transform = 'perspective(1000px)';
          });
        });
      }, 500);
    });



























    document.addEventListener('DOMContentLoaded', function() {
        const dataList = [
          {
            name: "AI Innovation Fair",
            timing: "May 15-17, 2025",
            venue: "Hall A - Innovation Block",
            summary: "Explore real-world applications of AI, ML, and robotics in this cutting-edge exhibition featuring student projects and industry demos.",
            visual: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1470&q=80"
          }
        ];
  
        const sliderDeck = document.getElementById('sliderDeck');
        const dotNav = document.getElementById('dotNav');
        const orbitContainer = document.getElementById('orbitContainer');
        let current = 0;
  
        function createOrbitingParticles() {
          const hues = [
            'rgba(90, 114, 131, 0.4)',
            'rgba(160, 128, 164, 0.4)',
            'rgba(201, 124, 147, 0.4)',
            'rgba(237, 192, 162, 0.4)',
            'rgba(71, 135, 151, 0.4)'
          ];
  
          for (let i = 0; i < 8; i++) {
            const blob = document.createElement('div');
            blob.className = 'glow-particle';
            blob.style.width = blob.style.height = `${Math.random() * 300 + 100}px`;
            blob.style.background = hues[Math.floor(Math.random() * hues.length)];
            blob.style.left = `${Math.random() * 100}%`;
            blob.style.top = `${Math.random() * 100}%`;
            blob.style.animation = `float ${30 + Math.random() * 20}s ease-in-out ${Math.random() * 10}s infinite alternate`;
            orbitContainer.appendChild(blob);
          }
        }
  
        function renderSlides() {
          dataList.forEach((e, idx) => {
            const panel = document.createElement('div');
            panel.className = `highlight-box ${idx === 0 ? 'active' : ''}`;
            panel.innerHTML = `
              <div class="image-zone">
                <img src="${e.visual}" alt="${e.name}" />
                <div class="badge-status">Live</div>
              </div>
              <div class="info-segment">
                <h3>${e.name}</h3>
                <div class="meta-line">
                  <span><i class="far fa-calendar-alt"></i> ${e.timing}</span>
                  <span><i class="fas fa-map-marker-alt"></i> ${e.venue}</span>
                </div>
                <p class="summary">${e.summary}</p>
                <div class="cta-area">
                  <a href="#" class="cta-button btn-primary">Join Now</a>
                  <a href="#" class="cta-button btn-outline">Details</a>
                </div>
              </div>`;
            sliderDeck.appendChild(panel);
  
            const mark = document.createElement('div');
            mark.className = `dot-unit ${idx === 0 ? 'active' : ''}`;
            mark.dataset.slide = idx;
            mark.onclick = () => moveTo(idx);
            dotNav.appendChild(mark);
          });
        }
  
        function moveTo(newIndex) {
          clearInterval(auto);
          auto = setInterval(nextSlide, 5000);
  
          const slides = document.querySelectorAll('.highlight-box');
          const dots = document.querySelectorAll('.dot-unit');
  
          slides[current].classList.remove('active');
          slides[current].classList.add('previous');
          slides[newIndex].classList.add('active');
          slides[newIndex].classList.remove('previous');
  
          dots[current].classList.remove('active');
          dots[newIndex].classList.add('active');
  
          current = newIndex;
  
          setTimeout(() => {
            slides.forEach(slide => !slide.classList.contains('active') && slide.classList.remove('previous'));
          }, 800);
        }
  
        function nextSlide() {
          const next = (current + 1) % dataList.length;
          moveTo(next);
        }
  
        let auto = setInterval(nextSlide, 5000);
        createOrbitingParticles();
        renderSlides();
  
        // Tilt effect
        setTimeout(() => {
          const zones = document.querySelectorAll('.image-zone');
          zones.forEach(zone => {
            zone.addEventListener('mousemove', e => {
              const rect = zone.getBoundingClientRect();
              const offsetX = e.clientX - rect.left;
              const offsetY = e.clientY - rect.top;
              const rotateY = (offsetX - rect.width / 2) / 20;
              const rotateX = (rect.height / 2 - offsetY) / 20;
              zone.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
            zone.addEventListener('mouseleave', () => {
              zone.style.transform = 'perspective(1000px)';
            });
          });
        }, 500);
      });