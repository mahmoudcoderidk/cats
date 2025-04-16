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
function click() {
    let cat = document.getElementById("blaze"); 
    let meow = new Audio("meow.mp3");
    let num = document.getElementById("number");
    document.getElementById("number").innerHTML = num + 1;
    setTimeout(() => {
        meow.pause();
        meow.currentTime = 0;
    }, 2000);
}


