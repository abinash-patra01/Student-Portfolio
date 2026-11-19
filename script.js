
// Animated typing effect

const words = [
    "Web Developer",
    "Programmer",
    "Student",
    "Tech Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const typing = document.getElementById("typing");
    const currentWord = words[wordIndex];

    typing.textContent = currentWord.substring(0, charIndex);

    if (!deleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 100);
    } 
    else if (deleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 50);
    } 
    else {
        deleting = !deleting;

        if (!deleting) {
            wordIndex = (wordIndex + 1) % words.length;
        }

        setTimeout(typeEffect, 800);
    }
}

typeEffect();


// Scroll reveal animation

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    observer.observe(element);
});


// Skill bar animation

const skillSection = document.getElementById("skills");

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll(".progress span").forEach(bar => {
                bar.style.width = bar.style.getPropertyValue("--level");
            });

            skillObserver.unobserve(skillSection);
        }
    });
}, { threshold: 0.3 });

skillObserver.observe(skillSection);


// Mobile navigation

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});
