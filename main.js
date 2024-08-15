// main.js
window.addEventListener('scroll', function() {
    const progressBar = document.getElementById('progress-bar');
    const navbar = document.getElementById('navbar');
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    // Calculate scroll percentage
    const scrollPercent = Math.min(scrollTop / (scrollHeight - clientHeight), 1);

    // Scale down the progress width to slow down the effect
    const scaleFactor = 1; // Adjust this value to control the progress bar speed
    const progressWidth = scrollPercent * 100 * scaleFactor; // Calculate the width with scaling

    // Update the width of the progress bar
    progressBar.style.width = `${progressWidth}%`;
});
