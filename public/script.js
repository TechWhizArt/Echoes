	function toggleMenu() {
		var navLinks = document.getElementById("nav-links");
		if (navLinks.style.display === "flex") {
			navLinks.style.display = "none";
		} else {
			navLinks.style.display = "flex";
		}
	}


	//moving left and right by buttons
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















//gallary animation script

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

	// Hardcore flipping pattern, brute force approach
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

//data and photos insertion in the gallary





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
				text: "From late-night planning to big stage events, Echoes felt like family. It shaped my creativity and gave me lifelong friends and mentors.",
				name: "Vanshika Jain",
				role: "Application Engineer @Hexaview Technologies",
				image: "assets/vanshika_test.webp"
			},
			{
				text: "Echoes was where I found my voice. Presentations, teamwork, and challenges here helped me break limits I didn’t know I had.",
				name: "Vanshika Garg",
				role: "Associate - P2P(PFM) @Rio Tinto",
				image: "assets/vanshikaGarg.webp"
			},
			{
				text: "Looking back, Echoes gave me a platform to experiment, fail, learn, and succeed. It was the best teacher I could’ve asked for",
				name: "Rajan Tyagi",
				role: "Programmer Analyst @Cognizant",
				image: "assets/RajanTyagi.webp"
			},
			{
				text: "I still remember our first event—it felt magical. Echoes made me realize that ideas matter when they are shared, built, and celebrated.",
				name: "Mr. Chirag Bansal",
				role: "Graphic Design '23",
				image: "assets/ChiragBansal.webp"
			},
			{
				text: "Echoes was my launchpad. I discovered my strengths, worked with amazing peers, and grew into someone ready to face the real world.",
				name: "Capt. Arun Pundir",
				role: "Army Office @Indian Army , Ex-SDE @GFG",
				image: "assets/CaptArunPundir.webp"
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





























// events in the events sliding :
// Event data stored in JavaScript
        const eventsData = [
            {
                imageSrc: "assets/MANTHAN 2.0.webp",
                title: "MANTHAN 2.0",
                date: "20.11.2025",
                description: "Manthan 2.0 brings students face-to-face with real-world product engineering and AI innovation, guided by an industry expert from EPAM Systems. Experience insights, interaction, and hands-on learning for the future of tech.",
                detailsLink: "https://www.commudle.com/communities/echoes-miet/events/manthan-2-0",
				status: "register-btn",  //remove when event is done
				buttonText: "Register now" //update when event is done
            },
            {
                imageSrc: "assets/MANTHAN.webp",
                title: "MANTHAN",
                date: "16.09.2025",
                description: "Manthan 2025 brings together alumni, industry experts, and students for an inspiring day of learning and connection. Celebrate growth, knowledge, and the legacy of Echoes MIET.",
                detailsLink: "https://drive.google.com/drive/folders/1w5TLWPqlWyDTyLxoTVhhPZ9p0Ukamo_a", 
				buttonText: "View Details"
            },
            {
                imageSrc: "assets/WhatsApp Image 2025-06-01 at 18.10.58.jpeg",
                title: "Echoes Recruitment Drive",
                date: "1.06.2025 - 8.06.2025",
                description: "Dream. Dare. Do. Ready to join MIET's only tech tribe? Be part of Echoes—where ideas turn into impact. Register for your interview today!",
                detailsLink: "https://drive.google.com/drive/u/2/folders/15D69GSpQNiGI0RDyO8TZDb2CGHFdn2-s",
				buttonText: "View Details"
            },
            {
                imageSrc: "assets/hackathonHavoc.webp",
                title: "Hackathon Havoc 2.0",
                date: "10.04.2025 - 11.04.2025",
                description: "Two days. Endless ideas. A hackathon built for 1st-years to code, create, and compete. Prizes, recognition, and teamwork await at MIET.",
                detailsLink: "https://drive.google.com/drive/folders/11OZ_G1ldeyiqYLZbI8W9WqnxBIVEuxQj",
				buttonText: "View Details"
            },
            {
                imageSrc: "assets/mlworkshop.webp",
                title: "From Code to Creation– AI & ML Unlocked",
                date: "01.04.2025",
                description: "Harsh Tyagi led a workshop diving into AI and ML with Python. A practical session blending fundamentals with hands-on exploration for curious minds.",
                detailsLink: "https://drive.google.com/drive/folders/10SRfxSPyaQzy1PRVL2yPDBVQoUfJiNgX",
				buttonText: "View Details"
            },
            {
                imageSrc: "assets/CyberWorkshop.webp",
                title: "Decrypting the Dark: Beyond the Web",
                date: "28.02.2025",
                description: "An eye-opening webinar with Mudit Bansal, where students explored the hidden world of the Dark Web, modern cybersecurity, and ethical hacking careers.",
                detailsLink: "https://drive.google.com/drive/folders/1-3lzn2kwSPEOmvWt3q60mWRC0L2h9-tv",
				buttonText: "View Details"
            },
            {
                imageSrc: "assets/industrial.webp",
                title: "Echoes @ HCL, Noida",
                date: "13.12.2024",
                description: "An enriching industrial visit where students explored HCL's innovations, connected with professionals, and learned about the real-world tech landscape.",
                detailsLink: "https://drive.google.com/drive/folders/1X-aZc7D6l7wmDz_IOIR5BPuP-5d9KG-m",
				buttonText: "View Details"
            },
            {
                imageSrc: "assets/event-4.webp",
                title: "Exploring AI: Guest Lecture",
                date: "13.12.2024",
                description: "An engaging session by Dr. Manoj Kumar Gupta on 'AI Fundamentals and Applications,' organized in collaboration with Echoes MIET & CSI MIET.",
                detailsLink: "https://drive.google.com/drive/folders/1aeJ9_WYndK7ci1DLGzKH9fizoyDj6dy6",
				buttonText: "View Details"
            },
            {
                imageSrc: "assets/disha3.webp",
                title: "Disha 3.0",
                date: "14.11.2024",
                description: "Vanshika Jain shared insights on Full Stack Development and Cloud Technologies, wrapping up with a fun Q&A and interactive games with prizes.",
                detailsLink: "https://drive.google.com/drive/folders/1UWbn3S2pbmTngzJ4FaHR9dratbZn8VVd",
				buttonText: "View Details"
            },
            {
                imageSrc: "assets/disha2.webp",
                title: "Disha 2.0",
                date: "24.10.2024",
                description: "Disha 2.0 featured Chirag Bansal, sharing insights on AWS and its career opportunities.",
                detailsLink: "https://drive.google.com/drive/folders/1Yz2-foSewZs5d4IxEJEm56-3GrYp9Jfr",
				buttonText: "View Details"
            },
            {
                imageSrc: "assets/disha.webp",
                title: "Disha 1.0",
                date: "25.09.2024",
                description: "Capt. Arun Pundir delivered a powerful session on mastering coding skills and exploring career opportunities in both tech and defense sectors.",
                detailsLink: "https://drive.google.com/drive/folders/1Sj4r9MgtLSWPf0NbzAkJ-qOY21RBBIs6",
				buttonText: "View Details"
            }
        ];

        // Function to create event boxes
        function createEventBoxes() {
            const container = document.getElementById('events-container');
            
            eventsData.forEach(event => {
                const eventBox = document.createElement('div');
                eventBox.className = 'event-box';
                
                eventBox.innerHTML = `
                    <div class="event-image">
                        <img src="${event.imageSrc}" alt="Event Poster">
                    </div>
                    <div class="event-content">
                        <h3>${event.title}</h3>
                        <p class="date">${event.date}</p>
                        <p class="eventdetailsineventsection">${event.description}</p>
                    </div>
                    <button class="viewdetails-btn ${event.status}" onclick="window.location.href='${event.detailsLink}'">${event.buttonText}</button>
                `;
                
                container.appendChild(eventBox);
            });
        }

        // Initialize event boxes when page loads
        document.addEventListener('DOMContentLoaded', createEventBoxes);
















