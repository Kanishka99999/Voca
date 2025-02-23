document.addEventListener("DOMContentLoaded", function() {
    console.log("Voca Website Loaded!");

    // Speech recognition setup
    const startSpeakingButton = document.querySelector(".start-speaking");
    
    startSpeakingButton.addEventListener("click", () => {
        let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.start();
        
        recognition.onresult = function(event) {
            let command = event.results[0][0].transcript.toLowerCase();
            console.log("You said:", command);
            
            if (command.includes("open google")) {
                window.open("https://www.google.com", "_blank");
            } else if (command.includes("scroll down")) {
                window.scrollBy(0, 500);
            } else if (command.includes("scroll up")) {
                window.scrollBy(0, -500);
            } else {
                alert("Command not recognized!");
            }
        };
    });
});
