// Load the Lottie animation after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('animation-container');
    
    // Load the Lottie animation
    lottie.loadAnimation({
        container: container, // Corrected container ID
        renderer: 'svg', // Render as SVG
        loop: true, // Loop the animation
        autoplay: true, // Start playing automatically
        path: 'animation.json' // Path to your animation JSON file
    });
    
    // Add the bounce class to create a bouncy effect
    container.classList.add('drop-bounce');
});

document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('animation-container2');
    
    // Load the Lottie animation
    lottie.loadAnimation({
        container: container, // Corrected container ID
        renderer: 'svg', // Render as SVG
        loop: true, // Loop the animation
        autoplay: true, // Start playing automatically
        path: 'animation5.json' // Path to your animation JSON file
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const textContainer = document.querySelector('.container1');
    const socialIcons = document.querySelector('.social-icons');
   

    // Apply the fade-slide-left class to text and icons
    textContainer.classList.add('fade-slide-left'); // Add animation to the text container
    socialIcons.classList.add('fade-slide-left'); // Add animation to the social icons
});

