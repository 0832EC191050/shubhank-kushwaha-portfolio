// Scroll reveal animation
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Typing effect in hero
const roles = [
  "Software Engineer",
  "Ruby on Rails Developer",
  "Full Stack Engineer",
  "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
const roleElement = document.createElement("span");
roleElement.style.color = "#38bdf8";
document.querySelector(".hero p").appendChild(document.createElement("br"));
document.querySelector(".hero p").appendChild(roleElement);

function typeRole() {
  if (charIndex < roles[roleIndex].length) {
    roleElement.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, 100);
  } else {
    setTimeout(eraseRole, 2000);
  }
}

function eraseRole() {
  if (charIndex > 0) {
    roleElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseRole, 60);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, 300);
  }
}

typeRole();
