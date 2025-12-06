// RANDOM NUMBER
document.querySelectorAll(".random-int").forEach(el => {
    el.textContent = Math.floor(Math.random() * (100 - 10 + 1) + 10);
})

// RETURN POST TOPIC
const returnButton = document.getElementById("closeheader-post");
returnButton.addEventListener("click", (event) => {
    location.href = "../main.html";
})

// AUDIO
const pointBlankPeriod = document.getElementById("TOX");
const paragraphText = document.querySelector(".overlayText");

function playPausePBP() {
    if (pointBlankPeriod.paused) {
        pointBlankPeriod.play();
    } else {
        pointBlankPeriod.pause();
    }
}

const PBPstamps = [
    {start: 5, end: 8, text: "BIG\nTEXT"},
    {start: 10, end: 11, text: "POINT\nBLANK\nPERIODT"},
    {start: 11, end: 13, text: "BIGGER\nTEXT"},
    {start: 26, end: 28, text: "KING\nKING\nKING\nKING\nKING\nKING"}
];

pointBlankPeriod.addEventListener('timeupdate', () => {
    const activeStamp = PBPstamps.find(stamp => 
        pointBlankPeriod.currentTime >= stamp.start && pointBlankPeriod.currentTime < stamp.end
    )
    if (activeStamp) {
        paragraphText.classList.add("activeOverlay");
        paragraphText.textContent = activeStamp.text;
        console.log("found time period");
    } else {
        paragraphText.classList.remove("activeOverlay");
        paragraphText.textContent = "";
        console.log("time period not found");
    }
});

