let timerInterval; // Variable to store the interval ID
let timerRunning = false; // Flag to check if the timer is already running

// Function to handle the exploding cat
function explodeCat() {
    let cat = document.getElementById("exploding-cat"); // Find the cat image
    let explosionSound = new Audio("explosion.mp3"); // Load the sound

    explosionSound.play(); // Play the explosion sound

    // Stop the sound after 2 seconds
    setTimeout(() => {
        explosionSound.pause(); // Pause the sound
        explosionSound.currentTime = 0; // Reset the sound to the beginning
    }, 2000);

    cat.src = "explosion1.png"; // Change the image to explosion1

    setTimeout(() => {
        cat.src = "explosion2.png"; // After 0.5 seconds, change to explosion2
    }, 500);

    setTimeout(() => {
        cat.src = "cat.png"; // After 1.5 seconds, change back to normal
    }, 1500);
}

// Function to handle the cat click and counter
function catclick() {
    let cat = document.getElementById("blaze");
    let meow = new Audio("meow.mp3");
    let num = document.getElementById("number");
    let currentValue = parseInt(num.innerHTML) || 0;

    // Increment the counter
    num.innerHTML = currentValue + 1;

    // Play the meow sound
    meow.play();
    setTimeout(() => {
        meow.pause();
        meow.currentTime = 0;
    }, 2000);
}

// Function to increment the timer
function timercat() {
    let timecat = document.getElementById("timer");
    let currenttime = parseInt(timecat.innerHTML) || 0;
    timecat.innerHTML = currenttime + 1;
}

// Function to start the timer on picture click
function startTimerOnPicClick() {
    let cat = document.getElementById("blaze"); // Find the cat image
    cat.addEventListener("click", function () {
        if (!timerRunning) {
            console.log("Cat clicked! Timer started.");
            
            // Ensure the timer starts from 0 only initially
            let timecat = document.getElementById("timer");
            timecat.innerHTML = "0";

            // Call `timercat` every second
            timerInterval = setInterval(timercat, 1000);
            timerRunning = true; // Mark the timer as running
        }
    });
}

// Initialize the functionality when the page loads
function initializeCats() {
    let blazeCat = document.getElementById("blaze");
    let explodingCat = document.getElementById("exploding-cat");

    if (blazeCat) {
        // Add click event for the cat click functionality
        blazeCat.addEventListener("click", catclick);
    }

    if (explodingCat) {
        // Add click event for the exploding cat functionality
        explodingCat.addEventListener("click", explodeCat);
    }

    // Start the timer functionality
    startTimerOnPicClick();
}

// Run initialization on page load
initializeCats();
