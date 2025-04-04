// Smooth scrolling for CTA links
document.querySelectorAll('.cta a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetURL = this.getAttribute('href');
        window.open(targetURL, '_blank');
    });
});

// Typing effect for "HELLO;" text
const helloText = "HELLO;";
let index = 0;
const helloElement = document.querySelector("h1");

function typeHello() {
    if (index < helloText.length) {
        helloElement.textContent += helloText.charAt(index);
        index++;
        setTimeout(typeHello, 150);
    }
}

// Clear text before animation
helloElement.textContent = "";
setTimeout(typeHello, 500);

// Dynamic greeting based on time of day
const greetingElement = document.createElement("p");
const hour = new Date().getHours();
let greeting;

if (hour < 12) {
    greeting = "Good Morning!";
} else if (hour < 18) {
    greeting = "Good Afternoon!";
} else {
    greeting = "Good Evening!";
}

greetingElement.textContent = greeting;
greetingElement.style.fontSize = "1.5em";
greetingElement.style.marginTop = "10px";
document.querySelector(".container div").appendChild(greetingElement);

// Background image fade-in effect
document.querySelector(".background-image").style.opacity = "0";
setTimeout(() => {
    document.querySelector(".background-image").style.transition = "opacity 2s";
    document.querySelector(".background-image").style.opacity = "0.5";
}, 500);