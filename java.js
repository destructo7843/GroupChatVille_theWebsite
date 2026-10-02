// 1. Correct variable declarations with proper types and strings
let premier = "Kroger"; 
let shown = false; 
let ElectionDate = "October 31st 2026";

// 2. Element references with proper string IDs
const premierImage = document.getElementById("premierImage"); 
const ratdance = document.getElementById("ratdance");
const ratdance2 = document.getElementById("ratdance2");
const ratdance3 = document.getElementById("ratdance3");    
const currentPremier = document.getElementById("currentPremier"); // Added definition

// Capitalized 'Audio' and made file path a string
const ratmusic = new Audio("rat-dance-music.mp3"); 
const musicLoopStart = 2.5;
const musicLoopEnd = 19;
ratmusic.loop = false;
ratmusic.addEventListener("timeupdate", () => {
    if (ratmusic.currentTime >= musicLoopEnd) {
        ratmusic.currentTime = musicLoopStart;
    }
});

function premierImageOff(){ 
    if (premierImage) premierImage.hidden = true;
    if (ratdance) {
        ratdance.hidden = true; 
        ratdance2.hidden=true
        ratdance3.hidden=true;
        // Only call media methods if ratdance is an audio/video element
        if (typeof ratdance.pause === "function") {
            ratmusic.pause(); 
            ratmusic.currentTime = musicLoopStart; 
        }
    }
} 

function premierImageOn(){ 
    if (premierImage) premierImage.hidden = false;
    if (ratdance) ratdance.hidden = false; 
    if (ratdance2) ratdance2.hidden = false; 
    if (ratdance3) ratdance3.hidden = false; 
    setTimeout(() => { 
        // Only call play if elements exist and are media elements
        if (ratdance && typeof ratdance.play === "function") ratdance.play(), ratdance2.play(), ratdance3.play();
        ratmusic.play();
    }, 50); 
}

// Initial state reset
premierImageOff();

// 3. Event Listeners with correct event keys and strings
window.addEventListener("keydown", (event) => { 
    if (event.code == "Space" && shown == false) { 
        event.preventDefault(); 
        setText("currentPremier", "Your GroupChatVille Premier Is: " + premier); 
        shown = true; 
        premierImageOn(); 
    } else if (event.code == "Space") { 
        event.preventDefault(); 
        setText("currentPremier", "Press Space For Your GroupChatVille Premier (Or Click)"); 
        shown = false; 
        premierImageOff(); 
    } 
}); 

if (currentPremier) {
    currentPremier.addEventListener("click", (event) => { 
        if (shown === false) { 
            setText("currentPremier", "Your GroupChatVille Premier Is: " + premier); 
            shown = true; 
            premierImageOn(); 
        } else { 
            setText("currentPremier", "Press Space For Your GroupChatVille Premier (Or Click)"); 
            shown = false; 
            premierImageOff(); 
        } 
    });
}

// 4. Custom function to update the text box value 
function setText(elementId, message) { 
    const element = document.getElementById(elementId); 
    if (element) { 
        if ("value" in element) {
            element.value = message;
        } else {
            element.textContent = message;
        }
    } 
} 

setText("electionDate", "The Next Election Date Is: " + ElectionDate + ". It shall be closed at 6 PM EST on that day. The Premier shall enter office the following morning at 7 AM EST. The Premier shall serve for a month and then another election shall be held. There is no limit to number of terms or number of consecutive terms.");