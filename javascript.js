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

    // Add the click event listener
    cat.addEventListener("click", function () {
        console.log("Cat clicked!");
    });
}
let timerInterval; // Variable to store the interval ID

function timercat() {
    let timecat = document.getElementById("timer");
    let currenttime = parseInt(timecat.innerHTML) || 0;
    timecat.innerHTML = currenttime + 1;
}

// Function to start the timer on picture click
function startTimerOnPicClick() {
    let cat = document.getElementById("blaze"); // Find the cat image
    cat.addEventListener("click", function () {
        console.log("Cat clicked! Timer started.");
        
        // Ensure the timer starts from 0 when clicked
        let timecat = document.getElementById("timer");
        timecat.innerHTML = "0";

        // Clear any existing interval to avoid multiple intervals running
        if (timerInterval) {
            clearInterval(timerInterval);
        }

        // Call `timercat` every second
        timerInterval = setInterval(timercat, 1000);
    });
}

// Initialize the timer functionality when the page loads
startTimerOnPicClick();
