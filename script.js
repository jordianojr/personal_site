const contentArray = [
    "BSc. Information Systems Student @ Singapore Management University",
    "Aspiring Full-Stack Web Developer",
    "Part Time Freaky Rizzler",
    "Full Time Mogger"
];

let currentIndex = 0;
const dynamicContent = document.getElementById('dynamic-content');
let currentText = '';
let letterIndex = 0;

function typeWriter() {
    if (letterIndex < contentArray[currentIndex].length) {
        currentText += contentArray[currentIndex].charAt(letterIndex);
        dynamicContent.textContent = currentText;
        letterIndex++;
        setTimeout(typeWriter, 50); // Adjust typing speed here (milliseconds)
    } else {
        setTimeout(eraseText, 2000); // Wait 2 seconds before erasing
    }
}

function eraseText() {
    if (currentText.length > 0) {
        currentText = currentText.slice(0, -1);
        dynamicContent.textContent = currentText;
        setTimeout(eraseText, 30); // Adjust erasing speed here (milliseconds)
    } else {
        currentIndex = (currentIndex + 1) % contentArray.length;
        letterIndex = 0; // Reset letter index for next content
        setTimeout(typeWriter, 1000); // Wait 1 second before typing new text
    }
}

// Initial call to start the typewriter effect
typeWriter();
