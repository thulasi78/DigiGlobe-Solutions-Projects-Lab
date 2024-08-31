const texts = [
    "Innovate,Elevate,Succeed",
    "Transforming Ideas into Digital Reality",
    "Empowering Digital Transformation",
    "Digital Solutions for a Connected World.."
];

let textIndex = 0;

function changeText() {
    const typingElement = document.getElementById('typing-text');
    typingElement.style.animation = 'none'; // Stop current animation
    setTimeout(() => {
        typingElement.textContent = texts[textIndex];
        typingElement.style.width = '0'; // Reset the width to start typing animation again
        typingElement.style.animation = 'typing 4s steps(20) 1s normal both, blink-caret 0.75s step-end infinite';
        textIndex = (textIndex + 1) % texts.length; // Cycle through the text array
    }, 100); // Small delay to reset the animation
}

setInterval(changeText, 5000); // Change text every 5 seconds
