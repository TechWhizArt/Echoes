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

		// Move right and left buttons
		const container = document.querySelector('.events-container');
		document.querySelector('.left-arrow').addEventListener('click', () => {
			container.scrollBy({ left: -520, behavior: 'smooth' });
		});
		document.querySelector('.right-arrow').addEventListener('click', () => {
			container.scrollBy({ left: 520, behavior: 'smooth' });
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
				text: "The Echoes Club at MIET, Meerut, displays great enthusiasm and professionalism. Their innovative approach and smooth organization enhance campus life. It was an honor to be a guest speaker and see their dedication. Echoes Club is truly shaping a bright future.",
				name: "Vanshika Jain",
				role: "Application Engineer @Hexaview Technologies",
				image: "assets/vanshika_test.webp"
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



// ongoing section js

	document.addEventListener('DOMContentLoaded', function() {
		const dataList = [
			{
			name: "Echoes Recruitment Drive",
			// timing: "May 15-17, 2025",
			timing: "June 1-8, 2025",

			venue: "Azim Premji Building, Board room",
			summary: "Wanna Be a part of our community?? Join us today. Register for the interview process and become a member of the Echoes Club. We are looking for passionate individuals who want to make a difference.",
			// visual: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1470&q=80"
			visual: "assets/WhatsApp Image 2025-06-01 at 18.10.58.jpeg"
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
					<a href="https://docs.google.com/forms/d/e/1FAIpQLSdMYe7ArFX6njyPqluUa5LEvjMM_6W3bbUwNgsH7jUPL4TiXg/viewform?usp=dialog" class="cta-button btn-primary">Join Now</a>   
					<a href="#members" class="cta-button btn-outline">Details</a>     
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


























