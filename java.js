// 2. Your original JavaScript variable and event listener
let premier = "Johnny MethHead AKA The Martyr"; 
let shown = "False"  
let ElectionDate = "September 30th 2026."
window.addEventListener('keydown', (event) => {
    if (event.code == "Space" && shown=="False") {
        event.preventDefault();
        setText("currentPremier", "Your GroupChatVille Premier Is: " + premier);
        shown="True"
    }
    else if(event.code == "Space"){
        event.preventDefault();
        setText("currentPremier", "Press Space For Your GroupChatVille Premier!");
        shown="False"
    }

});
window.addEventListener('click', (event) => {
    if (shown=="False") {
        event.preventDefault();
        setText("currentPremier", "Your GroupChatVille Premier Is: " + premier);
        shown="True"
    }
    else {
        event.preventDefault();
        setText("currentPremier", "Press Space For Your GroupChatVille Premier (Or Click)");
        shown="False"
    }

});
// 4. Custom function to update the text box value
function setText(elementId, message) {
    const element = document.getElementById(elementId);
    if (element) {
         element.value = message;
    }
}
setText("electionDate", "The Next Election Date Is: "+ElectionDate + " It shall be closed at 6 PM EST on that day. The Premier shall enter ofice the following morning at 7 AM EST. " + "The Premier shall serve for a month and then another election shall be held. There is no limit to number of terms or number of consecutive terms.");