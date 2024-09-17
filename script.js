const video = document.getElementById('background-video');

const loopStart = 2;
const loopEnd = 10;

video.addEventListener('timeupdate', function() {
    if (video.currentTime >= loopEnd) {
        video.currentTime = loopStart;
        video.play();
    }
});

document.getElementById('learn').addEventListener('click', function() { document.body.classList.add('loaded'); });

const blockButton = document.getElementById('sign2');
const rightButton = document.getElementById('sign');
const overlay = document.getElementById('overlay');
const formModal = document.getElementById('form-modal');
const closeModal = document.getElementById('close-modal');

// Function to show modal with transitions
function showModal() {
    overlay.style.display = 'block'; // Make overlay visible
    formModal.style.display = 'block'; // Make form modal visible
    
    // Use setTimeout to trigger the opacity transition after the display is set
    setTimeout(() => {
        overlay.style.opacity = 1; // Fade in the overlay
        formModal.style.opacity = 1; // Fade in the form modal
    }, 10); // Small delay to ensure the display changes before the opacity change
}

// Function to hide modal with transitions
function hideModal() {
    // Fade out the overlay and modal
    overlay.style.opacity = 0;
    formModal.style.opacity = 0;

    // After the fade-out transition, set display to 'none' to fully hide the elements
    setTimeout(() => {
        overlay.style.display = 'none';
        formModal.style.display = 'none';
    }, 500); // Wait for the transition to complete (0.5s)
}

// Show overlay and form modal when the right button is clicked
rightButton.addEventListener('click', showModal);

// Show overlay and form modal when the right button is clicked
blockButton.addEventListener('click', showModal);

// Close modal and overlay when the close button is clicked
closeModal.addEventListener('click', hideModal);

// Close modal and overlay when clicking outside the form (on the overlay)
overlay.addEventListener('click', hideModal);