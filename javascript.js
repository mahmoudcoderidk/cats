let cat = document.getElementById("blaze"); // Find the cat image

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

function timercat() {
    let timecat = document.getElementById("timer");
    let currenttime = parseInt(timecat.innerHTML) || 0;
    timecat.innerHTML = currenttime + 1;
}

function catclick() {
    let cat = document.getElementById("blaze");
    let meow = new Audio("meow.mp3");
    let num = document.getElementById("number");

    // Increment the counter
    num.innerHTML++;

    // Play the meow sound
    meow.play();
    setTimeout(() => {
        meow.pause();
        meow.currentTime = 0;
    }, 2000);

    // Add the click event listener
    console.log("Cat clicked!");
    console.log(num.innerHTML);
    if (num.innerHTML==1) {
        console.log("Timer started.");

        // Ensure the timer starts from 0 when clicked
        let timecat = document.getElementById("timer");
        timecat.innerHTML = "0";

        // Call timercat every second
        timerInterval = setInterval(timercat, 1000);
    }
}
