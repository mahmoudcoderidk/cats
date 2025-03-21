function explodeCat() {
    let cat = document.getElementById("exploding-cat");
    cat.src = "explosion1.png";
    setTimeout(() => {
        cat.src = "explosion2.png";
    }, 500);
    setTimeout(() => {
        cat.src = "cat.png";
    }, 1500);
}
