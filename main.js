// JavaScript Progress Bar for scrolling and "Gabriel" background control
window.addEventListener('scroll', function() {
    // Total height of the page
    var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // How much the user has scrolled
    var scrolled = window.scrollY;
    // Calculate the percentage of the page scrolled
    var progressWidth = (scrolled / scrollHeight) * 100;
    
    // Update the background size of the nav bar to create a progress effect from right to left
    var navbar = document.querySelector('.navbar');
    navbar.style.background = `linear-gradient(to left, #ff5c8a ${progressWidth}%, #141414 0%)`;
    
    // Control "Gabriel" background transparency at 60% and above
    const gabrielLink = document.getElementById('gabriel-link');
    if (progressWidth >= 60 && gabrielLink) {  // Background becomes transparent at 60%
        gabrielLink.style.backgroundColor = 'transparent'; // Make background transparent
    } else if (gabrielLink) {
        gabrielLink.style.backgroundColor = '#141414'; // Reset to original color when below 60%
    }
});

// Check scroll position on page load to handle the "Gabriel" link's background transparency
window.addEventListener('load', function() {
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = window.scrollY;
    const progressWidth = (scrolled / scrollHeight) * 100;
    const gabrielLink = document.getElementById('gabriel-link');

    if (progressWidth >= 60 && gabrielLink) {
        gabrielLink.style.backgroundColor = 'transparent'; // Transparent on load if at 60% or above
    }
});

// JavaScript to handle smooth scroll with 60px offset only for the "Hello" section
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior

        const targetId = this.getAttribute('href').substring(1); // Get the target section id
        const targetElement = document.getElementById(targetId); // Get the section element

        if (targetId === 'hello-section') {
            const offset = 60; // Offset only for "Hello" section
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset; // Calculate position of the target section

            // Scroll to the section with offset for "Hello"
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth' // Smooth scrolling
            });
        } else {
            // For other sections, no offset
            targetElement.scrollIntoView({
                behavior: 'smooth' // Smooth scrolling without offset
            });
        }
    });
});

// Add "Gabriel" link when reaching the Hello section, remove when scrolling back above it
window.addEventListener('scroll', function() {
    const helloSection = document.getElementById('hello-section');
    const helloPosition = helloSection.getBoundingClientRect().top;
    const gabrielLink = document.getElementById('gabriel-link'); // Check if the "Gabriel" link exists

    if (helloPosition <= 60 && !gabrielLink) {
        // Create the "Gabriel" link if it doesn't exist
        const newLink = document.createElement('a');
        newLink.id = 'gabriel-link';
        newLink.classList.add('gabriel-link', 'fade-in');
        newLink.href = '#top';
        newLink.textContent = 'Gabriel';

        // Fade-in effect when the link is created
        setTimeout(() => {
            newLink.classList.add('visible'); // Add class to trigger fade-in
        }, 100); // Slight delay to trigger the fade-in animation

        document.body.appendChild(newLink); // Add the link to the body (far left position)

        // Scroll back to the top when clicking the "Gabriel" link
        newLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Smooth scrolling to the top
            });
        });
    } else if (helloPosition > 60 && gabrielLink) {
        // Fade-out effect before removing the link
        gabrielLink.classList.remove('visible'); // Remove class to trigger fade-out

        setTimeout(() => {
            gabrielLink.remove(); // Remove after fade-out animation
        }, 500); // Match this duration to your CSS transition timing
    }
});
