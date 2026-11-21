
const envelope = document.getElementById("envelope");
const openButton = document.getElementById("openButton");
const scene = document.querySelector(".scene");
const finalCard = document.getElementById("finalCard");

let isOpened = false;

openButton.addEventListener("click", function () {

    if (isOpened) return;

    isOpened = true;

    // Step 1: Open the envelope
    envelope.classList.add("open");

    // Hide the button
    openButton.style.opacity = "0";
    openButton.style.pointerEvents = "none";

    // Step 2: Make the envelope disappear
    setTimeout(function () {
        envelope.classList.add("disappear");
    }, 1500);

    // Step 3: Hide the entire first scene
    setTimeout(function () {
        scene.classList.add("finished");
    }, 2200);

    // Step 4: Reveal the final invitation
    setTimeout(function () {
        finalCard.classList.add("show");
    }, 2400);

});



